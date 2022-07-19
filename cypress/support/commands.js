/**
 * setup: Pre-requisites before starting a test
 */
Cypress.Commands.add('setup', () => {
  cy.clearCookies()
  cy.clearLocalStorage()
  cy.viewport(Cypress.env('browser'))
})

/**
 * after: steps after finishing the test
 */
Cypress.Commands.add('after', () => {
  cy.screenshot({ capture: 'viewport' })
  cy.wait(1000)
})

/**
 * tap: click after element is visible on the page
 * @param {string} element Locator to click on
 */
Cypress.Commands.add('tap', (element) => {
  cy.findElement(element).first().click({ force: true })
  cy.wait(500)
})

/**
 * findElement: To wait till the element is visible
 * handles css and xpath as the locator
 * @param {string} element Locator to check for
 */
Cypress.Commands.add('findElement', (element) => {
  if (!element.startsWith('//')) {
    return cy.get(element, { multiple: true })
  } else {
    return cy.xpath(element, {
      multiple: true,
      timeout: Cypress.env('timeout'),
    })
  }
})

/**
 * checkUrl: verifies expected URL for the page
 * @param {string} endpoint name to validate
 */
Cypress.Commands.add('checkUrl', (endpoint) => {
  cy.location('href').should('include', encodeURI(endpoint))
})

/**
 * Visit a given url
 * @param {string} url
 */
Cypress.Commands.add('visitUrl', (url) => {
  cy.visit(url, {
    onBeforeLoad: (win) => {
      win.sessionStorage.clear()
    },
  })
})

/**
 * To clear session storage
 */
Cypress.Commands.add('clearSession', (url) => {
  cy.window().then((win) => {
    win.sessionStorage.clear()
  })
})

/**
 * Enter text in an element
 */
Cypress.Commands.add('fill', (element, inputText, clear = true) => {
  if (!inputText) return
  clear
    ? cy.findElement(element).clear().type(inputText)
    : cy.findElement(element).type(inputText)
})

/**
 * Make a POST request
 */
Cypress.Commands.add('postRequest', ({ url, body, headers }) => {
  cy.request({
    method: 'POST',
    url,
    body,
    headers,
  })
})

/**
 * Make a GET request
 */
Cypress.Commands.add('getRequest', ({ url, headers }) => {
  cy.request({
    method: 'GET',
    url,
    headers,
  })
})

/**
 * Make a DELETE request
 */
Cypress.Commands.add('deleteRequest', ({ url, headers }) => {
  cy.request({
    method: 'DELETE',
    url,
    headers,
  })
})
