import { describes, its, faker } from "../support/e2e";
describe("Test Mockable.io", function () {
  afterEach(() => {
    cy.crudScreenshot();
  });
  it("Array 11 camadas", function () {
    cy.crud({ payload: "Mockable/11camadas" });
  });
  it("JSON 1", function () {
    cy.crud({ payload: "Mockable/json1" });
  });

  it("JSON 2", function () {
    cy.crud({ payload: "Mockable/json2" });
  });

  it("JSON 3", function () {
    cy.crud({ payload: "Mockable/json3" });
  });
  it("JSON 4", function () {
    cy.crud({ payload: "Mockable/json4" });
  });
  it("JSON 5", function () {
    cy.crud({ payload: "Mockable/json5" });
  });
  it("JSON 6", function () {
    cy.crud({ payload: "Mockable/json6" });
  });
  it("JSON 7", function () {
    cy.crud({ payload: "Mockable/json7" });
  });

  it("JSON 8", function () {
    cy.crud({ payload: "Mockable/json8" });
  });

  it("JSON 9", function () {
    cy.crud({ payload: "Mockable/json9" });
  });
});
