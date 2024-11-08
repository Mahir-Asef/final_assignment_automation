## Technology used in this project
JavaScript,WebDriverIO, POM, Allure Reporter, Mocha

## Dev Setup

### Environment Setup
Clone the repository to your local computer
```
git clone https://github.com/Mahir-Asef/final_assignment_automation.git
```
Use the package manager `npm` to install dependencies:
```
npm install
```
To initialize the node module: 
```
npm init -y
```
To add the CLI package: 
```
npm i --save-dev @wdio/cli
```
To add a full WebdriverIO setup:
```
npm init wdio@latest
```
## Allure Reporter Setup
```
npm install @wdio/allure-reporter --save-dev
```
## Add these code in reporter:

```
            reporters: [['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
         }]],
```
## Allure Commandline
```
npm i allure-commandline
```
## Add these code to aferTest of wdio.config.js
```
afterTest: function(test, context, { error, result, duration, passed, retries }) {
    },
    afterTest: async function (
        test,
        context,
        { error, result, duration, passed, retries }
      ) {
        if (error) {
          const screenshot = await browser.takeScreenshot();
          allure.addAttachment("Screenshot",Buffer.from(screenshot, "base64"),"failure/png"
          );
        }
      }
```
## Execute following command to get report: 
```
npm run getReport
```
### Automation & Report Generate
Run test suite separately
```
npm run test
```
Run test suite altogether in sequential way
```
npm run runAllFiles
```
Generate Allure Report
```
npm run getReport
```
![allure report](image.png)
## A summary of this project at a glance
1. Try to Login to this [Sauce Demo](https://www.saucedemo.com/) site with locked_out_user
    - Try to login with locked_out_user
    - Successfully executing the error message with the given user ID and password.

2. Try to Login to this [Sauce Demo](https://www.saucedemo.com/) site with standard_user
    - standard_user will login smootly
    - will click the hamburger menu
    - will click to reset App State
    - will close the hamburger menu
    - will add three items to the cart
    - will navigate to the final checkout page
    - will verify all the product's name that was added previous in the inventory
    - will verify the total price with tax and without tax.
    - will complete Checkout with Success Message
    - will go back to home 
    - will click the hamburger menu
    - will rest the App State
    - wil logout

3. Try to Login [Sauce Demo](https://www.saucedemo.com/) with performance_glitch_user
    - login with performance_glitch_user
    - will click the hamburger menu
    - reset App State
    - will reload the site
    - will close the hamburger menu
    - filter product by name (Z to A)
    - will add first item to the cart
    - will navigate to the final checkout page
    - will verify the product's name in the inventoy
    - will verify the total price without tax and with tax
    - will complete Checkout with Success Message
    - will click the hamburger menu
    - will rest the App State
    - will logout



