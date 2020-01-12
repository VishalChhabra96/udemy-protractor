describe("ng-repeater test-suite name", function(){
    function operation(a, b, op){
        let option='';
        element(by.model('first')).sendKeys(a);
        switch(op) {
            case 'ADDITION': option = 1;
                break;
            case 'DIVISION': option = 2;
                break;
            case 'MODULO': option = 3;
                break;
            case 'MULTIPLICATION': option = 4;
                break;
            case 'SUBTRACTION': option = 5;
                break;
        }
        element(by.model('operator')).element(by.css(`option:nth-child(${option})`)).click();
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();
    }


    it("test case name", function(){
        browser.get("http://juliemr.github.io/protractor-demo/");
        operation(10,20,'ADDITION');
        operation(20,30,'DIVISION');
        operation(30,40,'MODULO');
        operation(40,50,'MULTIPLICATION');
        operation(50,60,'SUBTRACTION');
        // operation(60,70,6);
        element.all(by.repeater('result in memory')).count().then((totalCount)=>{expect(totalCount).toEqual(5);});

        element.all(by.repeater('result in memory')).each(function(item){item.element(by.css('td:nth-child(3)')).getText().then((txt)=>{console.log("txt",txt)})});
    })
});