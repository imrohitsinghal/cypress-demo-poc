import BasePage from './BasePage'

const items = 'mat-grid-tile.mat-grid-tile'

class SearchResultsPage extends BasePage {
  load() {
    this.visitUrl(this.appURL + '/#/search')
    this.isLoaded()
    return this
  }

  isLoaded() {
    this.checkUrl('/search')
    return this
  }

  getItemCount() {
    return this.findElement(items).then((itemList) => {
      return Cypress.$(itemList).length
    })
  }

  getSearchResultList() {
    let result = []
    this.findElement(items).each((item) => {
      result.push(Cypress.$(item).text())
    })
    return result
  }
}

export default SearchResultsPage
