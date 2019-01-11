// `total` - this should tally up all of the money in the bank balance and display it for the user.

// * `deposit <number>` - this should add a positive amount to the bank balance. (No need to display the total here)

// * `withdraw <number>` - this should add a negative amount to the bank balance. (No need to display the total here)

// * `lotto`


 var bankstatment = {
     
     deposit : parseFloat(process.argv[2]),
     withdrawal : parseFloat(process.argv[3]),
     lotto :Math.floor(Math.random() * 100) -100,
     total : "",
 }
 

 bankstatment.total = bankstatment.deposit + bankstatment.withdrawal + bankstatment.lotto;
//  var deposit = parseFloat(process.argv[2]);
//  var withdrawl = parseFloat(process.argv[3]);
//  var lotto = Math.floor(Math.random() * 100) -100;

 
 

//  bankstatment.lotto.push(lotto);


//  bankstatment.deposit.push(deposit);
//  bankstatment.total.push(total);
//  bankstatment.withdrawal.push(withdrawl);



 var fs = require("fs");
 // Next, we append the text into the "sample.txt" file.
 // If the file didn't exist, then it gets created on the fly.
 fs.appendFile("bank.txt", bankstatment, function(err) {
 
   // If an error was experienced we will log it.
   if (err) {
     console.log(err);
   }
 
   // If no error is experienced, we'll log the phrase "Content Added" to our node console.
   else {
     console.log("Content Added!");
   }
 
 });
 