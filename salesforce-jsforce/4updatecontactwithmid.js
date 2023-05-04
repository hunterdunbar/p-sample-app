let jsforce = require('jsforce');
require('dotenv').config();

var conn = new jsforce.Connection();
   conn.login('dunbarhwilliam@developerforce.com', process.env.password + process.env.security_token, function(err, res) {
   if (err) { return console.error(err); }


   //AO Complete with User Reg - Add MID
   console.log('update the contact record with a mid number')
   conn.sobject('Contact')
   .find({ 'Account_Number__c' : 'abc123456' })
   .update({ MID__c: 'MID123' }, function(err, rets) {
     if (err) { return console.error(err); }
     console.log(rets);
     // ...
   });

});
