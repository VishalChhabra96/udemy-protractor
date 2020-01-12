describe("practise exercise test suite", function() {

    function addToCart(productName) {

        expect(element.all(by.tagName('app-card')).count()).toEqual(4);
        element.all(by.tagName('app-card')).each(function(product){
            product.element(by.css('h4 a')).getText().then(function(txt){
                if(txt === productName) {

                    product.element(by.css('button[class*=btn-info]')).click();
                    // browser.sleep(2000);
                }
            });
        });
    };

    beforeAll(function() {
            browser.get('https://qaclickacademy.github.io/protocommerce/');
            browser.driver.manage().window().maximize();
        }
    );

    it("validate the url", function() {
        expect(browser.getCurrentUrl()).toBe('https://qaclickacademy.github.io/protocommerce/');
    });

    it("validate the page title", function() {
        expect(browser.getTitle()).toBe('ProtoCommerce');
    });

    it("form input", function() {
        element(by.name('name')).sendKeys('Vishal Chhabra');
        // element(by.name('name')).clear();
        element(by.css('input[name="email"]')).sendKeys('abc@gmail.com');
        element(by.id('exampleInputPassword1')).sendKeys('password@123');
        element(by.id('exampleCheck1')).click();
        // element(by.id('exampleFormControlSelect1')).click();
        // browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        // browser.actions().sendKeys(protractor.Key.ENTER).perform();
        // element(by.id('exampleFormControlSelect1')).element(by.css('option:nth-child(2)')).click();
        element(by.cssContainingText('[id="exampleFormControlSelect1"] option', "Female")).click();
        element(by.id('inlineRadio2')).click();
        element(by.name('bday')).sendKeys(27111996);

        element(by.buttonText('Submit')).click().then(function() {

            expect(element(by.css('div [class*=alert-success')).getText()).toBe('×\n' +
                    'Success! The Form has been submitted successfully!.');
        browser.sleep(2000);

        });
        element(by.name('name')).clear().sendKeys('V');
        expect(element(by.css('div[class*="alert-danger"]')).getText()).toBe('Name should be at least 2 characters').then(
            function(){browser.sleep(2000)}
            );

        element(by.linkText('Shop')).click().then(function(){
            browser.sleep(2000);
        });


        addToCart('iphone X');
        addToCart('Samsung Note 8');
        addToCart('Nokia Edge');
        addToCart('Blackberry');
        // addToCart('iphone X');
        element(by.partialLinkText('Checkout')).getText().then(function(txt){
            let res = txt.split('(');

            expect(res[1].trim().charAt(0)).toBe('4');
        });

        element(by.partialLinkText('Checkout')).click();

        // expect(element.all(by.tagName('tr')).count()).toEqual(4);
        // element.all(by.css('tbody tr')).each(function(row) {
        //     row.element(by.css('td: nth-child(4) strong')).getText().then(function(amount){
        //        console.log("amount", amount);
        //     });
        // });
    });
});