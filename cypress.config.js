const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://uitestingplayground.com",
    specPattern: "./cypress/integration/examples/*.cy.js"
  },
});
