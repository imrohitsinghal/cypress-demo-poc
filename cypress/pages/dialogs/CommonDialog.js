import BasePage from '../../pages/BasePage'

const welcomeDialog = {
  title: '',
  message: '',
  dimissBtn: 'button.close-dialog',
  gettingStartedBtn: '',
}

class CommonDialogs extends BasePage {
  welcomeDialog({ action = 'dismiss' }) {
    cy.log('[CommonDialog] welcome dialog')
    action === 'dismiss' ? this.dismissWelcomeDialog() : this.getStarted()
  }

  dismissWelcomeDialog() {
    cy.wait(2500) // TODO: update this to implicit wait
    this.findElement('body').then((body) => {
      if (body.find(welcomeDialog.dimissBtn).length > 0) {
        this.tap(welcomeDialog.dimissBtn)
      }
    })
    this.findElement(welcomeDialog.dimissBtn).should('not.exist')
  }

  getStarted() {
    console.log('[CommonDialog] Getting Satrted Docs')
  }
}

export default CommonDialogs
