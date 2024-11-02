const performenceGlitchUserActions = require("../pages/performenceGlitchUser/performenceGlitchUserActions");
const username = "performance_glitch_user";
const password = "secret_sauce";
let count = 1;
let percentageOfTax = 0.08;
let productIntoTheInventory = [
    "Test.allTheThings() T-Shirt (Red)"
];
describe("Performance Glitch User Purchase Flow", () => {
  it("hould complete login for performance_glitch_user", async () => {
    await performenceGlitchUserActions.login(username, password);
  });
  it("should complete a purchase flow for performance_glitch_user", async () => {
    // hamburger Menue
    await performenceGlitchUserActions.clickOnHamburgerMenue();
    // Reset App State
    await performenceGlitchUserActions.resetAppState();
    //close menue
    await performenceGlitchUserActions.clickOnCloseMenue();

    await performenceGlitchUserActions.clickOnNameFilterField();
    await browser.pause(3000);
    await performenceGlitchUserActions.selectNamefromFilterFiled();
    await browser.pause(3000);
    await performenceGlitchUserActions.clickAddtoCartFromList(count);
    await browser.pause(3000);
    await performenceGlitchUserActions.clickOnAddtoCartShopping();
    await browser.pause(3000);
    await performenceGlitchUserActions.clickOnCheckoutbutton();

    await performenceGlitchUserActions.clickOnCheckoutInfo(
      "xoxo",
      "rock",
      1212
    );
    await browser.pause(3000);

    await performenceGlitchUserActions.clickContinue();

    let name = await performenceGlitchUserActions.getProductNameFromInventory(
      count
    );
    expect(name).toEqual(productIntoTheInventory);
    let price = await performenceGlitchUserActions.getProductPriceFromInventory(
      count
    );
    let calculatedTotal = 0;
    for (let i = 0; i < price.length; i++) {
      calculatedTotal += price[i];
    }

    const itemPrice =
      await performenceGlitchUserActions.getTotalItemPriceWithoutTax();
    expect(calculatedTotal).toEqual(itemPrice);

    //
    const expectedTotal = calculatedTotal + calculatedTotal * percentageOfTax;
    const totalPricewithTax =
      await performenceGlitchUserActions.getTotalItemPriceWithTax();
    expect(expectedTotal).toBeCloseTo(totalPricewithTax);

    await performenceGlitchUserActions.clickOnFinish();
    await browser.pause(3000);

    const initiaiSuccessfulMessage = "Thank you for your order!";
    const actualSuccessfulMessge =
      await performenceGlitchUserActions.getSuccessfulMessage();

    expect(actualSuccessfulMessge).toEqual(initiaiSuccessfulMessage);
    const orderDetailsMessage =
      await performenceGlitchUserActions.getOrderDetailsMessage();
    const actualDetailsMesage =
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!";
    expect(orderDetailsMessage).toEqual(actualDetailsMesage);
    await performenceGlitchUserActions.clickOnHamburgerMenue();
    await performenceGlitchUserActions.resetAppState();
    await browser.pause(3000);
    await performenceGlitchUserActions.clickOnLogout();
    await browser.pause(3000);
  });
});
