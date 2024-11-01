const standardUserActions = require('../pages/standardUser/standardUserActions');
const username = 'standard_user';
const password = 'secret_sauce';
let count = 3;
describe('Standard User Test', () => {
    it('should complete login for standard_user', async () => {
        // Login with standard_user
        await standardUserActions.login(username,password );
    });
    it('product purchase journey', async ()=>{
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
        await standardUserActions.clickOnCheckoutInfo('xoxo','rock', 1212);
        // calling click on continue
        await standardUserActions.clickOnContinue();
        //calling of finish button
        await standardUserActions.clickOnFinishButton();
        //geting successful  message
        const successfulMsg = await standardUserActions.getSuccessfulMessage();
        console.log(successfulMsg)
        const actualMsg = 'Thank you for your order!';
        expect(successfulMsg).toEqual(actualMsg);
        //expect(successfulMsg).toContain(actualMsg);
        // hamburger Menue
        await standardUserActions.clickOnHamburgerMenue();
        // Reset App State
        await standardUserActions.resetAppState();
        // get log-out of here
        await standardUserActions.clickOnlogout();
    })
});
