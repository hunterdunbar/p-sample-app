let jsforce = require('jsforce');
require('dotenv').config();

var conn = new jsforce.Connection();
   conn.login('dunbarhwilliam@developerforce.com', process.env.password + process.env.security_token, function(err, res) {
   if (err) { return console.error(err); }

   //More plynk attributes added to child object called Plynk Event
   let todaysDate = new Date();
   console.log('Upsert child object on the contact to track special plynk attributes')
   let plynkAttributePayload2 = {
      Crypto_Status_Date__c : todaysDate,
      MID__c: 'MID123',
      Event_Type__c: 'CRYPTO',
      Contact__r: {
         MID__c: 'MID123'
      }
   }
   conn.sobject('Plynk_Event__c').upsert(plynkAttributePayload2, 'MID__c', function(err, ret) {
      if (err || !ret.success) { return console.error(err, ret); }
      console.log('Upserted Successfully');
      // ...
    });
   

});
