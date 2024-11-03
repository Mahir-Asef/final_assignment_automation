const standardUserActions = require("../pages/standardUser/standardUserActions");
const username = "standard_user";
const password = "secret_sauce";
let count = 3;
let percentageOfTax = 0.08;
let productIntoTheInventory = [
  "Sauce Labs Backpack",
  "Sauce Labs Bike Light",
  "Sauce Labs Bolt T-Shirt",
];

describe("Standard User Test", () => {
  it("should complete login for standard_user", async () => {
    // Login with standard_user
    await standardUserActions.login(username, password);
  });
  it("standard_user's product purchase journey", async () => {
    // hamburger Menue
    await standardUserActions.clickOnHamburgerMenue();
    // Reset App State
    await standardUserActions.resetAppState();
    //close menue
    await standardUserActions.clickOnCloseMenue();
    //add to cart
    // await standardUserActions.clickOnItemsButton();
    await standardUserActions.clickOnItemsButton(count);
    //calling shoping cart
    await standardUserActions.clickOnShopingCart();
    //calling checkout
    await standardUserActions.clickOnCheckout();
    // calling checkout-Info
    await standardUserActions.clickOnCheckoutInfo("xoxo", "rock", 1212);
    // calling click on continue
    await standardUserActions.clickOnContinue();

    //product purchase journey
    let name = await standardUserActions.productNameFromInventory(count);
    expect(name).toEqual(productIntoTheInventory);

    let price = await standardUserActions.productPriceFromInventory(count);
    //    await browser.pause(2000);

    let calculatedTotal = 0;
    for (let i = 0; i < price.length; i++) {
      calculatedTotal += price[i];
    }
    //console.log(calculatedTotal);
    const itemPrice = await standardUserActions.TotalPriceWithoutTax();
    // console.log(`Item Price: ${typeof itemPrice}`);
    expect(calculatedTotal).toEqual(itemPrice);

    //
    const expectedTotal = calculatedTotal + calculatedTotal * percentageOfTax;
    const totalPricewithTax = await standardUserActions.totalPriceWithTax();
    expect(expectedTotal).toBeCloseTo(totalPricewithTax);

    //calling of finish button
    await standardUserActions.clickOnFinishButton();
    //geting successful  message
    const successfulMsg = await standardUserActions.getSuccessfulMessage();
    //console.log(successfulMsg)
    const actualMsg = "Thank you for your order!";
    expect(successfulMsg).toEqual(actualMsg);
    //expect(successfulMsg).toContain(actualMsg);
    const orderDetailsMessage =
      await standardUserActions.getOrderDetailsMessage();
    const actualDetailsMesage =
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!";
    expect(orderDetailsMessage).toEqual(actualDetailsMesage);
    
    // hamburger Menue
    await standardUserActions.clickOnHamburgerMenue();
    // Reset App State
    await standardUserActions.resetAppState();
    // get log-out of here
    await standardUserActions.clickOnlogout();
  });
});
