const xstate = require("xstate")

const { Machine, interpret, assign, actions } = xstate

const sumToTenMachine = Machine({
  id: "summer",
  initial: "counting",
  context: {
    count: 0
  },
  states: {
    counting: {
      on: {
        ADD: [
          // order is important
          {
            target: "success",
            cond: (context, { no }) => context.count + no === 10,
            actions: [
              assign({
                count: ({ count: prevCount }, { no }) =>
                  prevCount + no
              })
            ]
          },
          {
            cond: (context, { no }) =>
              no > 0 && context.count + no <= 11,
            actions: [
              assign({
                count: ({ count: prevCount }, { no }) =>
                  prevCount + no
              }),
              actions.log(
                (context, event) =>
                  `count: ${JSON.stringify(context)}, event: ${
                    event.type
                  } payload: ${event.no}`,
                "ADD"
              )
            ]
          }
        ]
      }
    },
    success: {
      type: "final"
    }
  }
})
