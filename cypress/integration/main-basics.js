describe("JSWeekend", () => {
  describe("Search", () => {
    it("Should work", () => {
      cy.log("Visit Search")
      cy.visit("http://localhost:3000/")
      cy.title().should("include", "Weekend")
      cy.location("pathname").should("be", "/")

      cy.log("Set category: food")
      // cy.get("input[value=food]").click({ force: true })
      cy.get("input[value=food]")
        .closest("label")
        .click()

      cy.log("Set destination: Brno")
      cy.get("input[type=text]")
        .eq(0) // placepicker
        .clear()
        .type("brno")
        .wait(3000)
        .type("{downarrow}{downarrow}")
        .wait(1000)
        .type("{enter}")
        .should("have.value", "Brno–Tuřany")

      cy.log("Set when: tomorrow")

      cy.log("Set destination: ")

      cy.log("Search")
      cy.contains("button", "Search").click()
    })
  })
  describe("Results", () => {
    it("Should work", () => {
      cy.log("Visit Results")
      cy.visit(
        "http://localhost:3000/result?adults=2&interest=food&flyFrom=BRQ&dateFrom=2019-01-27&dateTo=2019-02-03&places=&stopovers=IT-2-5"
      )

      cy.log("Select first")
      cy.get("button")
        .eq(0)
        .click()

      // ...
    })
  })
  describe("Places", () => {
    it("Should work", () => {
      cy.log("Visit Places")
      cy.visit("http://localhost:3000/places?bookingToken=TODO")
      // ...
    })
  })
})
