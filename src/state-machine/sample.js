const xstate = require("xstate")
const util = require("util")

const { Machine, interpret, assign, actions } = xstate
const { log } = actions

const defaultDays = [2, 5]

// Action to increment the context amount
const addPlace = assign({
  places: (context, { payload }) =>
    context.places.concat([[payload.place, [1, 3]]])
})

// Stateless machine definition
// machine.transition(...) is a pure function used by the interpreter.
const toggleMachine = Machine(
  {
    id: "places",
    // the initial context (extended state) of the statechart
    context: {
      places: [["Australia", defaultDays]]
    },
    initial: "inactive",
    states: {
      inactive: {
        on: {
          RESET: {
            actions: [
              assign({ places: [["Australia", defaultDays]] })
            ]
          },
          TOGGLE: "sent",
          ADD_PLACE: {
            actions: assign({
              places: (context, { payload }) =>
                context.places.concat([
                  [payload && payload.place, [1, 3]]
                ])
            })
          },
          CHANGE_PLACE: {
            cond: (context, { index, place }) =>
              index > 0 && context.places < index && place,
            actions: assign({
              places: ({ places }, { index, place }) => {
                places[index][0] = place
                return places
              }
            })
          },
          CHANGE_DAYS: {
            cond: (context, { index, days }) =>
              index > 0 && context.places < index && days,
            actions: assign({
              places: ({ places }, { index, days }) => {
                places[index][1] = days
                return places
              }
            })
          },
          REMOVE_PLACE: {
            target: "inactive", // optional
            cond: (context, { index }) => {
              debugger
              return index > 0 && context.places.length > index
            },
            actions: [
              context => console.log(`Before: ${context.count}`),
              assign({
                places: (context, event) =>
                  context.places.filter(
                    (val, index) => index !== event.index
                  )
              }),
              context => console.log(`After: ${context.count}`)
            ]
          },
          LOG2: {
            actions: log(
              (context, event) =>
                `count: ${util.inspect(
                  context.places,
                  false,
                  4
                )}, event: ${event.type} payload: ${event.payload}`,
              "AA"
            )
          }
        }
      },
      sent: { type: "final" }
    }
  },
  {
    actions: { addPlace }
    // guards: { glassIsFull }
  }
)

// Machine instance with internal state
const toggleService = interpret(toggleMachine)
  .onTransition(state => console.log(state.value, state.context))
  .start()
// => 'inactive'

// toggleService.send("LOG", { payload: "myoption" })
// toggleService.send("LOG2", { payload: "myoption" })

console.log(toggleMachine.handles("ADD_PLACE"))

const currentState = toggleService.state

console.log(currentState.nextEvents)

// Allowed actions with params
console.log(
  toggleService.state.nextEvents.filter(nextEvent => {
    return toggleMachine.transition(currentState, {
      type: nextEvent /* ... */
    }).changed
  })
)

toggleService.send("ADD_PLACE")
toggleService.send("CHANGE_PLACE", { index: 1, place: "Brno" })

console.log(
  "REMOVE_PLACE allowed",
  toggleMachine.transition(toggleService.state, {
    type: "REMOVE_PLACE",
    index: 1
  }).changed
)

toggleService.send("REMOVE_PLACE", { index: 1 })

// toggleService.send("LOG2", { payload: "myoption" })
