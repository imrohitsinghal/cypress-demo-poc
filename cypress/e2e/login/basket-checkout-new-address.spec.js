import { valid } from '../../fixtures/accounts.json'
import Login from '../../business-layer/Login'
import Dashboard from '../../business-layer/Dashboard'
import Basket from '../../business-layer/Basket'

const dashboard = new Dashboard()
const login = new Login()
const basket = new Basket()

describe('Items into Basket and Checkout', () => {
  beforeEach(() => {
    cy.visit(Cypress.env(Cypress.env('host')).url)
    login.signIn({
      email: valid.email,
      password: valid.password,
    })
  })

  it('Add 1 item and Checkout with New Address', () => {
    let product = 1
    dashboard.addItemsToBasket({ product }).goToCart()
    basket.verifyBasket(product).checkout()
  })
})
