import { valid as account } from '../fixtures/accounts.json'
import BasePage from '../pages/BasePage'
let headers = { Authorization: '', 'content-type': 'application/json' }
const contentTypeHeader = { 'content-type': 'application/json' }

let basketId = ''
let itemsList = ''

class APIUtils extends BasePage {
  getToken() {
    cy.postRequest({
      url: this.appURL + '/rest/user/login',
      headers: contentTypeHeader,
      body: {
        email: account.email,
        password: account.password,
      },
    }).then((res) => {
      expect(res.status).to.eq(200)
      headers = {
        Authorization: 'Bearer ' + res.body.authentication.token,
        'content-type': 'application/json',
      }
      basketId = res.body.authentication.bid
    })
    return this
  }

  getProducts() {
    cy.getRequest({
      url: this.appURL + '/api/Products',
      headers,
    }).then((res) => {
      let { body } = { ...res }
      itemsList = body.data
    })
    return this
  }

  addItemToBasket({ qty }) {
    itemsList.map((item, index) => {
      if (index < qty) {
        cy.postRequest({
          url: this.appURL + '/api/BasketItems',
          headers,
          body: {
            ProductId: item.id,
            BasketId: basketId,
            quantity: 1,
          },
        }).then((res) => {
          expect(res.body.status).to.eq('success')
        })
      }
    })
    return this
  }

  getItemsInBasket() {
    return cy
      .getRequest({
        url: this.appURL + `/rest/basket/${basketId}`,
        headers,
      })
      .then((res) => {
        return res.body.data.Products
      })
  }

  verifyItemsInBasket(items) {
    cy.getRequest({
      url: this.appURL + `/rest/basket/${basketId}`,
      headers,
    }).then((res) => {
      res.body.data.Products.map((product, index) => {
        expect(product.id).to.eq(items[index].id)
        expect(product.name).to.eq(items[index].name)
      })
    })
    return this
  }

  deleteItemsFromBasket(qty = 'all') {
    cy.getRequest({
      url: this.appURL + `/rest/basket/${basketId}`,
      headers,
    }).then((res) => {
      if (qty < res.body.data.Products.length) {
        res.body.data.Products.map((product, index) => {
          if (index < qty) {
            cy.deleteRequest({
              url: this.appURL + `/api/BasketItems/${product.BasketItem.id}`,
              headers,
            })
          }
        })
      } else {
        res.body.data.Products.map((product) => {
          cy.deleteRequest({
            url: this.appURL + `/api/BasketItems/${product.BasketItem.id}`,
            headers,
          })
        })
      }
    })
    return this
  }
}

export default APIUtils
