let testData = function () {

   return  {

   data: {
       first: {
           firstInput: "5",
           secondInput: "5",
           result: "10"
       },
       second: {
           firstInput: "15",
           secondInput: "5",
           result: "20"
       },
       third: {
           firstInput: "5",
           secondInput: "15",
           result: "20"
       },
       fourth: {
           firstInput: "25",
           secondInput: "25",
           result: "50"
       },
       fifth: {
           firstInput: "50",
           secondInput: "50",
           result: "100"
       }
   }

   };


};

module.exports = new testData();