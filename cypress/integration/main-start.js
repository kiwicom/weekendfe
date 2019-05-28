describe("JSWeekend", () => {
  describe("Search", () => {
    it("Should work", () => {
      cy.log("Visit Search")
      cy.log("Set category: food")
      cy.log("Set destination: Brno")
      cy.log("Set when: tomorrow")
      cy.log("Set destination: ")
      cy.log("Search")
    })
  })
  describe("Results", () => {
    it("Should work", () => {
      cy.log("Visit Results")
      cy.log("Select first")
      // ...
    })
  })
  describe("Places", () => {
    it("Should work", () => {
      cy.log("Visit Places")
      // ...
    })
  })
})
