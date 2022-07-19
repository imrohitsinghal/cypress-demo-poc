import BasePage from './BasePage'

const addAddresBtn = 'button.btn-new-address'
const savedAddressName = 'mat-cell.cdk-column-Name'
const addressForm = {
  country: '[data-placeholder="Please provide a country."]',
  name: '[data-placeholder="Please provide a name."]',
  mobile: '[data-placeholder="Please provide a mobile number."]',
  zip: '[data-placeholder="Please provide a ZIP code."]',
  address: '[data-placeholder="Please provide an address."]',
  city: '[data-placeholder="Please provide a city."]',
  state: '[data-placeholder="Please provide a state."]',
  submitBtn: 'button#submitButton',
  backBtn: 'button.btn-return',
}

const messageBar = 'span.mat-simple-snack-bar-content'
const messageText = {
  success: 'successfully added to your addresses',
  error: '',
}

class CheckoutPage extends BasePage {
  clickAddNewAddressBtn() {
    this.tap(addAddresBtn)
  }

  fillAddressForm(data) {
    let { country, name, mobile, zip, address, city, state } = { ...data }
    this.fill(addressForm.country, country)
    this.fill(addressForm.name, name)
    this.fill(addressForm.mobile, mobile)
    this.fill(addressForm.zip, zip)
    this.fill(addressForm.address, address)
    this.fill(addressForm.city, city)
    this.fill(addressForm.state, state)
  }

  fillAndSubmitNewAddress(data) {
    this.clickAddNewAddressBtn()
    this.fillAddressForm(data)
    this.tap(addressForm.submitBtn)
    this.findElement(messageBar)
      .invoke('text')
      .then((actual) => {
        assert.include(actual, messageText.success)
      })
  }

  getAllSavedAddress() {
    let savedAddress = []
    this.isLoaded()
    this.findElement(savedAddressName).each((name) => {
      savedAddress.push(Cypress.$(name).text())
    })
    return savedAddress
  }

  selectSavedAddress() {
    //TO-DO
  }
}

export default CheckoutPage
