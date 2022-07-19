import APIUtils from '../../support/APIUtils'
const apiUtils = new APIUtils()
before(() => {
  apiUtils.getToken()
})

beforeEach(() => {
  //get all products
  apiUtils.getProducts().deleteItemsFromBasket()
})

describe('Add Items to basket and validate basket', () => {
  it('add 1 item to basket', () => {
    apiUtils
      .addItemToBasket({ qty: 1 })
      .getItemsInBasket()
      .then((items) => {
        apiUtils.verifyItemsInBasket(items)
      })
  })

  it('add 2 items to basket and validate basket', () => {
    apiUtils
      .addItemToBasket({ qty: 2 })
      .getItemsInBasket()
      .then((items) => {
        apiUtils.verifyItemsInBasket(items)
      })
  })
})

it('delete 1 of 2 items in basket', () => {
  apiUtils
    .addItemToBasket({ qty: 2 })
    .deleteItemsFromBasket(1)
    .getItemsInBasket()
    .then((items) => {
      apiUtils.verifyItemsInBasket(items)
    })
})

afterEach(() => {
  apiUtils.deleteItemsFromBasket()
})
