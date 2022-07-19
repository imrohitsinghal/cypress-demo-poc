class BasePage {
  constructor() {
    this.host = Cypress.env('host')
    this.appURL = Cypress.env(Cypress.env('host')).url
  }

  tap = (element) => {
    return cy.tap(this.getLocator(element))
  }

  fill = (element, input, clearField) => {
    return cy.fill(this.getLocator(element), input, clearField)
  }

  findElement = (element) => {
    return cy.findElement(this.getLocator(element))
  }

  checkUrl = (element) => {
    cy.checkUrl(this.getLocator(element))
  }

  getLocator = (element) => {
    return typeof element !== 'object' ? element : element[`${this.app}`]
  }

  visitUrl = (url) => {
    cy.visitUrl(url)
  }

  clearSession = () => {
    cy.clearSession()
  }

  clickElementWithText(text, element) {
    if (element) {
      cy.get(element).contains(text).click({ force: true })
    } else {
      cy.contains(text).click()
    }
  }
}

export default BasePage
