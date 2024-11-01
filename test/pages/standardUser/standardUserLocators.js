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
        return $('//button[@id="react-burger-menu-btn"]');
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

    get finish(){
        return $("//button[@id='finish']");
    }
    get message(){
        return $("//h2[@class='complete-header']");
    }
    get logout(){
        return $("//a[@id='logout_sidebar_link']");
    }
}

module.exports = new StandardUserLocators();
