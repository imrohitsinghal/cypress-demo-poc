import BasePage from './BasePage'

const emailInputField = 'input#email'
const passInputField = 'input#password'
const loginBtn = 'button#loginButton'
class LoginPage extends BasePage {
  load() {
    this.visitUrl(Cypress.env(Cypress.env('host')).url + '/login')
    this.isLoaded()
    return this
  }

  isLoaded() {
    this.checkUrl('/login')
    this.findElement(emailInputField)
    this.findElement(loginBtn)
    return this
  }

  enterEmail(email) {
    this.fill(emailInputField, email)
    return this
  }

  enterPassword(password) {
    this.fill(passInputField, password)
    return this
  }

  clickSubmit(email, password) {
    this.findElement(loginBtn).then(($btn) => {
      email.length > 0 && password.length > 0
        ? cy.wrap($btn).click()
        : cy.wrap($btn).should('be.disabled')
    })
    this.clearSession()
    return this
  }
}

export default LoginPage
