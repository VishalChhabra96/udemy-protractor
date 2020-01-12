describe("test suite name", function() {


    function calculate(a,b,c){
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);

        element.all(by.tagName('option')).each(function(item){
            item.getAttribute('value').then(function(val){if(val===c){item.click();}})
        });


        element(by.id('gobutton')).click();}



    it("open browser test case name", function() {

        browser.get("http://juliemr.github.io/protractor-demo/");
        calculate(1,2,'MULTIPLICATION');
        calculate(1,2,'ADDITION');
        calculate(1,2,'SUBTRACTION');
        calculate(1,2,'DIVISION');
        calculate(1,2,'MODULO');
    });
});