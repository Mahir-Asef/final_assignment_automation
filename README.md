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



