import Dashboard from '../business-layer/Dashboard'
import Search from '../business-layer/Search'

const dashboard = new Dashboard()
const search = new Search()

describe('Search', () => {
  before(() => {
    cy.visit(Cypress.env(Cypress.env('host')).url)
  })

  it('search result should contain 2 apple items and 0 Banana Products', () => {
    let query = 'apple'
    dashboard.searchItem(query)
    search.checkResults({
      itemCount: 2,
      itemNotExpected: 'banana',
    })
  })
})
