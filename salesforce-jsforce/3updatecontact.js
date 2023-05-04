let jsforce = require('jsforce');
require('dotenv').config();

var conn = new jsforce.Connection();
   conn.login('dunbarhwilliam@developerforce.com', process.env.password + process.env.security_token, function(err, res) {
   if (err) { return console.error(err); }

   //AO Complete - Add Account Number
   console.log('update the contact record with an account number')
   conn.sobject('Contact')
   .find({ 'Email' : 'hdunbar@mycervello.com' })
   .update({ Account_Number__c: 'abc123456' }, function(err, rets) {
     if (err) { return console.error(err); }
     console.log(rets);
     // ...
   });


});
