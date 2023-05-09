let jsforce = require('jsforce');
require('dotenv').config();

var conn = new jsforce.Connection();
   conn.login('dunbarhwilliam@developerforce.com', process.env.password + process.env.security_token, function(err, res) {
   if (err) { return console.error(err); }

   //More plynk attributes added to child object called Plynk Event

   conn.sobject('CampaignMember')
      .select("Campaign.Name")
      .where({"Contact.MID__c" : "MID123"})
      .execute(function(err, records){
         console.log(records);
      })
   

});
