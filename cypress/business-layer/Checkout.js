import CheckoutPage from '../pages/CheckoutPage'
import { userAddress } from '../fixtures/checkout-data'
const checkoutPage = new CheckoutPage()

class Checkout {
  selectAddress({ newAddress = false }) {
    newAddress
      ? checkoutPage.fillAndSubmitNewAddress(userAddress)
      : checkoutPage.selectSavedAddress()
  }
}

export default Checkout
