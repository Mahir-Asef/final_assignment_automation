const lockedOutUserLocators = require('./lockedOutUserLocators');

class LockedOutUserActions {
    async login(username, password) {
        await lockedOutUserLocators.usernameField.setValue(username);
        await browser.pause(2000);
        await lockedOutUserLocators.passwordField.setValue(password);
        await browser.pause(2000);
        await lockedOutUserLocators.loginButton.click();
        await browser.pause(2000);
    }

    async getErrorMessage() {
        return await lockedOutUserLocators.errorMessage.getText();
        
    }
}

module.exports = new LockedOutUserActions();
