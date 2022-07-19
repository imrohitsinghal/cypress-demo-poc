import LoginPage from '../pages/LoginPage'
import CommonDialogs from '../pages/dialogs/CommonDialog'
const loginPage = new LoginPage()
const dialog = new CommonDialogs()

class Login {
  loadPage() {
    cy.log('[ParentLogin] load login page')
    loginPage.load()
    return this
  }

  signIn({ email, password }) {
    dialog.welcomeDialog({ action: 'dismiss' })
    loginPage
      .load()
      .enterEmail(email)
      .enterPassword(password)
      .clickSubmit(email, password)
    return this
  }
}

export default Login
