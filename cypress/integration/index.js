describe("JSWeekend", () => {
  it("should TODO", () => {
    cy.log("Load page")
    cy.visit("/")
    cy.title().should("include", "Weekend")
    cy.location("pathname").should("be", "/")

    cy.log("Set category to Coffee")
    cy.get("input[value=coffee").click({ force: true })

    // Set from/where to Brno
    cy.get("input[type=text]")
      .eq(0) // placepicker
      .type("brno", { delay: 100 })
      .wait(3000)
      .type("{downarrow}{downarrow}")
      .wait(1000)
      .type("{enter}")
      .should("have.value", "Brno–Tuřany")

    // TODO
  })
})
