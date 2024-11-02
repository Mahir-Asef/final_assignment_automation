const performenceGlitchUserLocators = require("./performenceGlitchUserLocators");

class PerformenceGlitchUserActions {
  async login(username, password) {
    await performenceGlitchUserLocators.usernameField.setValue(username);
    await browser.pause(3000);
    await performenceGlitchUserLocators.passwordField.setValue(password);
    await browser.pause(3000);
    await performenceGlitchUserLocators.loginButton.click();
    await browser.pause(3000);
  }

  async clickOnHamburgerMenue() {
    await performenceGlitchUserLocators.hamburgerMenu.click();
  }

  async resetAppState() {
    await performenceGlitchUserLocators.resetAppState.click();
    await browser.pause(5000);
  }
  async clickOnCloseMenue() {
    await performenceGlitchUserLocators.closeMenue.click();
    await browser.pause(3000);
  }

  async clickOnNameFilterField() {
    await performenceGlitchUserLocators.nameFilterField.click();
}
async selectNamefromFilterFiled() {
    await performenceGlitchUserLocators.optionSelectionNameFromFilter.click();
}

// Product Add to cart from the list

async clickAddtoCartFromList(count) {
    const addToCartButtons = performenceGlitchUserLocators.addToCartFromList;

    for (let i = 0; i < count; i++) {
        await addToCartButtons[i].click();
    }
}
// Click Add to Cart Button
async clickOnAddtoCartShopping() {
    await performenceGlitchUserLocators.addtoCartShopping.click();
}

async clickOnCheckoutbutton() {
    await performenceGlitchUserLocators.checkoutbutton.click();
}

async clickOnCheckoutInfo(firstName, lastName, postalCode) {
  await performenceGlitchUserLocators.firstName.setValue(firstName);
  await performenceGlitchUserLocators.lastName.setValue(lastName);
  await performenceGlitchUserLocators.postalCode.setValue(postalCode);
  await browser.pause(4000);
}
as

async clickContinue() {
    await performenceGlitchUserLocators.continue.click();
}

//Get product Name From the Inventory Cart
async getProductNameFromInventory(count) {
    var productNamefromList = performenceGlitchUserLocators.productNamefromInventory;
    const itemNames = [];
    for (let i = 0; i < count; i++) {
        var productName = await productNamefromList[i].getText();
        itemNames.push(productName);

    }
    return itemNames;
}
// Get product Price From the Inventory Cart
async getProductPriceFromInventory(count) {
    var productPricefromList = performenceGlitchUserLocators.productPricefromInventory;
    const itemPrices = [];
    for (let i = 0; i < count; i++) {
        var productPrice = await productPricefromList[i].getText();
        const price = parseFloat(productPrice.replace('$', ''));
        itemPrices.push(price);
        //   console.log(`Product Price: ${productPrice}`);         
    }
    return itemPrices;
}

async getTotalItemPriceWithoutTax() {
    await browser.pause(2000);
    const itemTotalText = await performenceGlitchUserLocators.totalItemPrice.getText();
    const itemTotalprice = await parseFloat(itemTotalText.replace('Item total: $', ''));
    await browser.pause(2000);
    return itemTotalprice;
}
async getTotalItemPriceWithTax() {
    await browser.pause(2000);
    const itemTotalTax = await performenceGlitchUserLocators.totalItemPriceWithTax.getText();
    const itemTotalwithTax = await parseFloat(itemTotalTax.replace('Total: $', ''));
    await browser.pause(2000);
    return itemTotalwithTax;
}

async clickOnFinish() {
    await performenceGlitchUserLocators.finish.click();
}
async getSuccessfulMessage() {
    return await performenceGlitchUserLocators.successfulMessage.getText();
}
async getOrderDetailsMessage() {
  return await performenceGlitchUserLocators.messageDetails.getText();
}
async clickOnLogout() {
    await performenceGlitchUserLocators.logout.click();
}
}

module.exports = new PerformenceGlitchUserActions();
