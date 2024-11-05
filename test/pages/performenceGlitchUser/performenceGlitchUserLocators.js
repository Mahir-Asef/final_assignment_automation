class PerformenceGlitchUserLocators {
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
    get nameFilterField() {
        return $("//select[@class='product_sort_container']");
        //return $("//span[@class='select_container']");
    }

    get optionSelectionNameFromFilter() {
        return $("//option[contains(text(),'Name (Z to A)')]");
    }

    // Add to cart button from the List
    get addToCartFromList() {
        return $$("//button[contains(@id,'add-to-cart')]");
    }
    // CLick Add to Cart Button
    get addtoCartShopping() {
        return $("//a[@class='shopping_cart_link']");
    }

    get checkoutbutton() {
        return $("//button[@id='checkout']");
    }

    get firstName() {
        return $("//input[@id='first-name']");
    }

    get lastName() {
        return $("//input[@id='last-name']");
    }

    get postalCode() {
        return $("//input[@id='postal-code']");
    }

    get continue() {
        return $("//input[@id='continue']");
    }
    // Get Product Name and Price from Inventory Cart
    get productNamefromInventory() {
        return $$("//div[contains(@class, 'inventory_item_name')]");
    }
    get productPricefromInventory() {
        return $$("//div[contains(@class, 'inventory_item_price')]");
    }

    get totalItemPrice() {
        return $("//div[contains(@class,'summary_subtotal_label')]");
    }
    get totalItemPriceWithTax() {
        return $("//div[@class='summary_total_label']");
    }

    get finish() {
        return $("//button[@id='finish']");
    }

    get successfulMessage() {
        return $("//h2[@class='complete-header']");
    }
    get messageDetails(){
        return $("//div[@class='complete-text']");
    }    
    get logout() {
        return $("//a[@id='logout_sidebar_link']");
    }
}

module.exports = new PerformenceGlitchUserLocators();
