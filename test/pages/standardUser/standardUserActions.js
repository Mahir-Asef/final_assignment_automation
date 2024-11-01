const standardUserLocators = require("./standardUserLocators");

class StandardUserActions {
  async login(username, password) {
    await standardUserLocators.usernameField.setValue(username);
    await browser.pause(3000);
    await standardUserLocators.passwordField.setValue(password);
    await browser.pause(3000);
    await standardUserLocators.loginButton.click();
    await browser.pause(3000);
  }

  async clickOnHamburgerMenue() {
    await standardUserLocators.hamburgerMenu.click();
  }

  async resetAppState() {
    await standardUserLocators.resetAppState.click();
    await browser.pause(5000);
  }
  async clickOnCloseMenue() {
    await standardUserLocators.closeMenue.click();
    await browser.pause(3000);
  }
  // async clickOnItemsButton(){
  //     await standardUserLocators.addItemButtons.click();
  //     await browser.pause(5000);
  // }

  //select product from list
  async clickOnItemsButton(count) {
    const addButtons = standardUserLocators.addItemButtons;
    for (let i = 0; i < count; i++) {
      await addButtons[i].click();
      await browser.pause(4000);
    }
  }
  async clickOnShopingCart() {
    await standardUserLocators.shopingCart.click();
    await browser.pause(4000);
  }
  async clickOnCheckout() {
    await standardUserLocators.checkout.click();
  }
  async clickOnCheckoutInfo(firstName, lastName, postalCode) {
    await standardUserLocators.firstName.setValue(firstName);
    await standardUserLocators.lastName.setValue(lastName);
    await standardUserLocators.postalCode.setValue(postalCode);
    await browser.pause(4000);
  }
  async clickOnContinue() {
    await standardUserLocators.continue.click();
    await browser.pause(4000);
  }
  async clickOnFinishButton() {
    await standardUserLocators.finish.click();
    await browser.pause(4000);
  }
  async getSuccessfulMessage() {
    return await standardUserLocators.message.getText();
  }
  async clickOnlogout() {
    await standardUserLocators.logout.click();
    await browser.pause(4000);
  }
}

module.exports = new StandardUserActions();
