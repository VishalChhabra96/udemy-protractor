describe("ng-repeater test-suite name", function(){
    it("test case name", function(){
        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.model('first')).sendKeys(10);

        element(by.model('operator')).element(by.css('option:nth-child(4)')).click();


        element(by.model('second')).sendKeys(10);
        element(by.id('gobutton')).click();
        var txt = element(by.repeater("result in memory")).element(by.css('td:nth-child(3)'));
        expect(txt.getText()).toEqual('100');
    })
});