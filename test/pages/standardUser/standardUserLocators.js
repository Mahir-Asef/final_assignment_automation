class StandardUserLocators {
    get usernameField() {
        return $('//input[@id="user-name"]');
    }

    get passwordField() {
        return $('//input[@id="password"]');
    }

    get loginButton() {
        return $('//input[@id="login-button"]');
    }

    get hamburgerMenu() {
        return $("//div[@class='bm-burger-button']");
    }

    get resetAppState() {
        return $('//a[@id="reset_sidebar_link"]');
    }
    get closeMenue(){
        return $("//button[@id='react-burger-cross-btn']");
    }
    // get addItemButtons() {
    //     return $('//button[contains(@id, "add-to-cart")]');
    // }
    get addItemButtons() {
        return $$('//button[contains(@id, "add-to-cart")]');
    }
    get shopingCart(){
        return $("//a[@class='shopping_cart_link']");
    }
    get checkout(){
        return $("//button[@id='checkout']");
    }

    get firstName(){
        return $('//input[@data-test="firstName"]');
    }
    get lastName(){
        return $('//input[@data-test="lastName"]');
    }
    get postalCode(){
        return $('//input[@data-test="postalCode"]');
    }

    get continue(){
        return $('//input[@id="continue"]');
    }


    //div[@class='inventory_item_name']
    //div[@class='inventory_item_price']
    get getProductNamefromInventory(){
        return $$("//div[contains(@class, 'inventory_item_name')]");
    }
    get getProductPricefromInventory(){
        return $$("//div[contains(@class, 'inventory_item_price')]");
    }

    get totalItemPriceWithoutTax(){
        return $("//div[contains(@class,'summary_subtotal_label')]");
    }
    get totalItemPriceWithTax(){
        return $("//div[@class='summary_total_label']");
    }

    get finish(){
        return $("//button[@id='finish']");
    }
    get message(){
        return $("//h2[@class='complete-header']");
    }
    get messageDetails(){
        return $("//div[@class='complete-text']");
    }
    get logout(){
        return $("//a[@id='logout_sidebar_link']");
    }
    
}

module.exports = new StandardUserLocators();
