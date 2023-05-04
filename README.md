# Salesforce Node Examples
Run the following in the root directory of the project:
```
npm install
```

Update .env with password and security token
```
password='<<password goes here>'
security_token='<<token goes here>'
```

Update each of the files in salesforce-jsforce with the username that you are using to login to Salesforce

Run the following command:
```
node salesforce-jsforce/1clearexistingdata.js 
node salesforce-jsforce/2createaccountcontact.js
node salesforce-jsforce/3updatecontact.js
node salesforce-jsforce/4updatecontactwithmid.js
node salesforce-jsforce/5updateplynkattributes.js
```

