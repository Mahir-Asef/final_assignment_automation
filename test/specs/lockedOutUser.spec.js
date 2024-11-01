const lockedOutUserActions = require('../pages/lockedOutUser/lockedOutUserActions');
const username = 'locked_out_user';
const password = 'secret_sauce';
describe('Locked Out User Test', () => {
    it('should show an error message for locked_out_user', async () => {    
        // Attempt to log in with locked_out_user credentials
        await lockedOutUserActions.login(username, password);
    
        // Verify the error message
        const errorMsg = await lockedOutUserActions.getErrorMessage();
        // console.log(errorMsg)
        const actualMsg = 'Epic sadface: Sorry, this user has been locked out.';
        expect(errorMsg).toEqual(actualMsg);
        //expect(errorMsg).toContain(actualMsg);
    });
});
