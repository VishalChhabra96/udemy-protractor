let calculatorPage = require('./calc-page-object'),
    testData = require('./test-data.data'),
    using = require('jasmine-data-provider');

describe("test suite name", function(){

    beforeEach(function(){
        calculatorPage.getUrl();
    });

    using(testData.data, function (data, description) {
        it(`test case with data: ${description}`, function() {
            console.log(description,":",data);
            calculatorPage.firsInput.sendKeys(data.firstInput);
            calculatorPage.secondInput.sendKeys(data.secondInput);
            calculatorPage.goButton.click().then(function(){
            });
            expect((calculatorPage.result).getText()).toBe(data.result);
            calculatorPage.result.getText().then(function(txt){console.log("txt", txt);});
        });
    });
});
















