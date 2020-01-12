describe("alerts", function(){
   it("alerts", function() {
       // browser.waitForAngularEnabled(false);
       browser.driver.manage().window().maximize();
       browser.ignoreSynchronization = true;
       browser.get("https://www.rahulshettyacademy.com/AutomationPractice/");
       element(by.id("confirmbtn")).click();
       browser.switchTo().alert().accept();
       browser.sleep(5000);

        browser.switchTo().frame('courses-iframe');
       expect(element(by.partialLinkText('30')).getText()).toBe('30');
   });
});