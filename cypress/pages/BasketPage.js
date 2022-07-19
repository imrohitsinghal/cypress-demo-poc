import BasePage from './BasePage'

const checkoutBtn = 'button#checkoutButton'
const deleteIcon = 'svg[data-icon="trash-alt"]'
const itemName = 'mat-cell.mat-column-product'

class BasketPage extends BasePage {
  load() {
    this.visitUrl(this.appURL + '/#/basket')
    this.isLoaded()
    return this
  }

  isLoaded() {
    this.checkUrl('/basket')
    this.findElement(checkoutBtn)
    return this
  }

  clickCheckout() {
    this.tap(checkoutBtn)
  }

  getItemsInCart() {
    this.isLoaded()
    return this.findElement(itemName).then((items) => {
      return Cypress.$(items).length
    })
  }
}

export default BasketPage
