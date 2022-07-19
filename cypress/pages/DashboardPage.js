import BasePage from './BasePage'

const itemTitle = 'div.item-name'
const topHeader = {
  basketBtn: 'button[routerlink="/basket"]', //TO-DO extract header as separate component
  searchIcon: 'mat-icon.mat-search_icon-search',
  searchInput: 'input#mat-input-0',
}
const addToBasketBtn = 'button[aria-label="Add to Basket"]'
const messageBar = 'span.mat-simple-snack-bar-content'
const messageText = {
  success: 'to basket',
  error: 'We are out of stock! Sorry for the inconvenience.',
}

class DashboardPage extends BasePage {
  load() {
    this.visitUrl(this.appUrl)
    this.isLoaded()
    return this
  }

  isLoaded() {
    this.findElement(topHeader.basketBtn)
    this.findElement(addToBasketBtn)
    return this
  }

  clickAddToBasket(index) {
    this.findElement(addToBasketBtn).eq(index).click()
    cy.wait(2000)
    return this.isAddedToBasketMessage()
  }

  itemsInStock() {
    let itemInStock = []
    this.findElement(itemTitle).each((item) => {
      itemInStock.push(Cypress.$(item).text())
    })
    return itemInStock
  }

  isAddedToBasketMessage() {
    let success = false
    this.findElement(messageBar)
      .invoke('text')
      .then((actual) => {
        assert.include(actual, messageText.success)
        success = true
      })
    return success
  }

  clickBasketBtn() {
    this.tap(topHeader.basketBtn)
  }

  clickSearchIcon() {
    this.tap(topHeader.searchIcon)
  }

  enterSearchQuery(query) {
    this.clickSearchIcon()
    this.fill(topHeader.searchInput, `${query}{enter}`)
  }
}

export default DashboardPage
