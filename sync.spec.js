describe("non-angular synchronization", function(){
   it("test case", function(){
       browser.driver.manage().window().maximize();



       browser.waitForAngularEnabled(false);
      browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");

      element(by.css('[href*="loadAjax();"]')).click();


      let EC = protractor.ExpectedConditions;

      browser.wait(EC.invisibilityOf(element(by.id('loader'))), 1000000);


       // browser.sleep(10000);
      expect(element(by.id('results')).getText()).toEqual('Process completed! This response has been loaded via the Ajax request directly from the web server, without reoading this page.');
   });


   // browser.sleep(5000);
});