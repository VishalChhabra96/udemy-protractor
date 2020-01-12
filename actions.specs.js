describe("protractor actions", function(){
   it("first test case", function(){
      browser.get("https://posse.com/");
      // browser.actions().mouseMove(element(by.model('userInputQuery')).sendKeys('river')).perform();
      // browser.actions().mouseMove(element(by.model('locationQuery')).sendKeys('London')).perform();
      // browser.sleep(5000);
      // browser.actions().sendKeys(protractor.Key.ENTER).perform();

       element(by.css('a[data-instr-search-area*="yo"]')).click();
       expect(element(by.binding('searchResults.length'))).toEqual(64);
       // browser.sleep(5000);
        browser.getAllWindowhandles().then(function(allWindowhandles) {
            browser.switchTo().window(allWindowhandles[1]);
       });
   });
});


