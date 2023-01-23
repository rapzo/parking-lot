import { getPageTitle } from "../support/app.po";

describe("web", () => {
  it("should display home page", () => {
    cy.visit("/");
    getPageTitle().contains("Parking Lot");
  });

  it("should display settings page", () => {
    cy.visit("/settings");
    getPageTitle().contains("Parking Lot Settings");
  });
});
