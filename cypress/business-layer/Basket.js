import BasketPage from '../../pages/BasketPage'
const basketPage = new BasketPage()

class Basket {
  verifyBasket(products) {
    basketPage.getItemsInCart().then((inBasket) => {
      expect(inBasket).to.eq(products)
    })
    return this
  }

  checkout() {
    basketPage.clickCheckout()
    return this
  }
}

export default Basket
