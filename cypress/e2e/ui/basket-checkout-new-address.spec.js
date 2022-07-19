import { valid } from '../../fixtures/accounts.json'
import Login from '../../business-layer/Login'
import Dashboard from '../../business-layer/Dashboard'
import Basket from '../../business-layer/Basket'
import Checkout from '../../business-layer/Checkout'
import APIUtils from '../../support/APIUtils'

const dashboard = new Dashboard()
const login = new Login()
const basket = new Basket()
const checkout = new Checkout()
const apiUtils = new APIUtils()

describe('Items into Basket and Checkout', () => {
  before(() => {
    //to clean up basket before each run
    apiUtils.getToken()
  })

  beforeEach(() => {
    apiUtils.deleteItemsFromBasket()
    cy.visit(Cypress.env(Cypress.env('host')).url)
    login.signIn({
      email: valid.email,
      password: valid.password,
    })
  })

  it('add 1 item and checkout with New Address', () => {
    let item = 1
    dashboard.addItemsToBasket({ item }).goToCart()
    basket.verifyBasket(item).checkout()
    checkout.selectAddress({ newAddress: true })
  })

  it('add 2 items and checkout with New Address', () => {
    let item = 2
    let itemQty = 1
    dashboard.addItemsToBasket({ item, itemQty }).goToCart()
    basket.verifyBasket(item).checkout()
    checkout.selectAddress({ newAddress: true })
  })
})
