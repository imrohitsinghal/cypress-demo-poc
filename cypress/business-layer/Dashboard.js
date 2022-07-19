import DashboardPage from '../pages/DashboardPage'
import CommonDialogs from '../pages/dialogs/CommonDialog'
const dashboardPage = new DashboardPage()
const dialog = new CommonDialogs()

class Dashboard {
  isLoaded() {
    cy.log('[Dashboard] check dashboard page')
    dashboardPage.isLoaded()
    return this
  }

  loadDashboard() {
    dashboardPage.load()
  }

  addItemsToBasket({ item, itemQty = 1 }) {
    this.loadDashboard()
    for (let p = 0; p < item; p++) {
      for (let qty = 1; qty <= itemQty; qty++) {
        dashboardPage.clickAddToBasket(p)
      }
    }
    return this
  }

  goToCart() {
    dashboardPage.clickBasketBtn()
    return this
  }

  searchItem(query) {
    dialog.welcomeDialog({ action: 'dismiss' })
    dashboardPage.enterSearchQuery(query)
  }
}

export default Dashboard
