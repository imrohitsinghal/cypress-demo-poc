const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://juice-shop.guardrails.ai/#/',
    specPattern: 'cypress/e2e/**/*.spec.{js,ts}',
    viewportHeight: 768,
    viewportWidth: 1366,
    defaultCommandTimeout: 30000,
    video: false,
    chromeWebSecurity: false,
    trashAssetsBeforeRuns: false,
    screenshotOnRunFailure: true,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'cypress/config/reporter-config.json',
    },
  },
  env: {
    host: 'prod',
    browser: 'macbook-15',
    timeout: 30000,
    prod: {
      url: 'https://juice-shop.guardrails.ai',
    },
  },
})
