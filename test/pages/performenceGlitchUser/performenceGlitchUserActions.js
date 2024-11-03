const performenceGlitchUserLocators = require("./performenceGlitchUserLocators");

class PerformenceGlitchUserActions {
  async login(username, password) {
    await performenceGlitchUserLocators.usernameField.setValue(username);
    await browser.pause(2000);
    await performenceGlitchUserLocators.passwordField.setValue(password);
    await browser.pause(2000);
    await performenceGlitchUserLocators.loginButton.click();
    await browser.pause(2000);
  }

  async clickOnHamburgerMenue() {
    await performenceGlitchUserLocators.hamburgerMenu.click();
  }

  async resetAppState() {
    await performenceGlitchUserLocators.resetAppState.click();
    await browser.pause(2000);
  }
  async clickOnCloseMenue() {
    await performenceGlitchUserLocators.closeMenue.click();
    await browser.pause(2000);
    await browser.refresh();
  }

  async clickOnNameFilterField() {
    await performenceGlitchUserLocators.nameFilterField.click();
    await browser.pause(2000);
  }
  async selectNamefromFilterFiled() {
    await performenceGlitchUserLocators.optionSelectionNameFromFilter.click();
    await browser.pause(2000);
  }

  // Product Add to cart from the list

  async clickAddtoCartFromList(count) {
    const addToCartButtons = performenceGlitchUserLocators.addToCartFromList;

    for (let i = 0; i < count; i++) {
      await addToCartButtons[i].click();
      await browser.pause(2000);
    }
  }
  // Click Add to Cart Button
  async clickOnAddtoCartShopping() {
    await performenceGlitchUserLocators.addtoCartShopping.click();
    await browser.pause(2000);
  }

  async clickOnCheckoutbutton() {
    await performenceGlitchUserLocators.checkoutbutton.click();
    await browser.pause(2000);
  }

  async clickOnCheckoutInfo(firstName, lastName, postalCode) {
    await performenceGlitchUserLocators.firstName.setValue(firstName);
    await performenceGlitchUserLocators.lastName.setValue(lastName);
    await performenceGlitchUserLocators.postalCode.setValue(postalCode);
    await browser.pause(2000);
  }
  async clickContinue() {
    await performenceGlitchUserLocators.continue.click();
    await browser.pause(2000);
  }

  //Get product Name From the Inventory Cart
  async getProductNameFromInventory(count) {
    var productNamefromList =
      performenceGlitchUserLocators.productNamefromInventory;
    const itemNames = [];
    for (let i = 0; i < count; i++) {
      var productName = await productNamefromList[i].getText();
      itemNames.push(productName);
    }
    await browser.pause(2000);
    return itemNames;
  }
  // Get product Price From the Inventory Cart
  async getProductPriceFromInventory(count) {
    var productPricefromList =
      performenceGlitchUserLocators.productPricefromInventory;
    const itemPrices = [];
    for (let i = 0; i < count; i++) {
      var productPrice = await productPricefromList[i].getText();
      const price = parseFloat(productPrice.replace("$", ""));
      itemPrices.push(price);
      //   console.log(`Product Price: ${productPrice}`);
    }
    await browser.pause(2000);
    return itemPrices;
  }

  async getTotalItemPriceWithoutTax() {
    await browser.pause(2000);
    const itemTotalText =
      await performenceGlitchUserLocators.totalItemPrice.getText();
    const itemTotalprice = await parseFloat(
      itemTotalText.replace("Item total: $", "")
    );
    await browser.pause(2000);
    return itemTotalprice;
  }
  async getTotalItemPriceWithTax() {
    await browser.pause(2000);
    const itemTotalTax =
      await performenceGlitchUserLocators.totalItemPriceWithTax.getText();
    const itemTotalwithTax = await parseFloat(
      itemTotalTax.replace("Total: $", "")
    );
    await browser.pause(2000);
    return itemTotalwithTax;
  }

  async clickOnFinish() {
    await performenceGlitchUserLocators.finish.click();
    await browser.pause(2000);
  }
  async getSuccessfulMessage() {
    return await performenceGlitchUserLocators.successfulMessage.getText();
  }
  async getOrderDetailsMessage() {
    return await performenceGlitchUserLocators.messageDetails.getText();
  }
  async clickOnLogout() {
    await performenceGlitchUserLocators.logout.click();
    await browser.pause(2000);
  }
}

module.exports = new PerformenceGlitchUserActions();
