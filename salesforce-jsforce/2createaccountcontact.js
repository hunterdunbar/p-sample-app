let jsforce = require('jsforce');
require('dotenv').config();

var conn = new jsforce.Connection();
   conn.login('dunbarhwilliam@developerforce.com', process.env.password + process.env.security_token, function(err, res) {
   if (err) { return console.error(err); }

   //Prospect Phase - Create account record with no acc number
   console.log('Create account record with no acc number');
   let accountPayload = {
      Name : 'Hunter Dunbar'
   }
   conn.sobject("Account").create(accountPayload, function(err, ret) {
      if (err || !ret.success) { return console.error(err, ret); }
      console.log("Created record id : " + ret.id);
      //Prospect Phase - Create contact record with no acc number associated to parent account
      
      console.log('Create contact record with no acc number associated to parent account');
      let prospectPayload = {
         FirstName: 'Hunter',
         LastName: 'Dunbar',
         Email: 'hdunbar@mycervello.com',
         Phone: 5555555555,
         AccountId: ret.Id
      }
      conn.sobject("Contact").create(prospectPayload, function(err, ret) {
         if (err || !ret.success) { return console.error(err, ret); }
         console.log("Created record id : " + ret.id);
         // ...
      });
   });
   


});
