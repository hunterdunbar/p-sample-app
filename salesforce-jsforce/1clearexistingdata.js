let jsforce = require('jsforce');
require('dotenv').config();

var conn = new jsforce.Connection();
   conn.login('dunbarhwilliam@developerforce.com', process.env.password + process.env.security_token, function(err, res) {
   if (err) { return console.error(err); }

   //clear the data for demo purposes
   console.log('Delete existing sample data');
   conn.sobject('Contact')
   .find({ Email : 'hdunbar@mycervello.com' })
   .destroy(function(err, rets) {
   if (err) { return console.error(err); }
   console.log('deleted contact'+rets);
   // ...
   });

   conn.sobject('Account')
   .find({ Name : 'Hunter Dunbar' })
   .destroy(function(err, rets) {
   if (err) { return console.error(err); }
   console.log('deleted account'+rets);
   // ...
   });

});
