const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'kg15x6',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
