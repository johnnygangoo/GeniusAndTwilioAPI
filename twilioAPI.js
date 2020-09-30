//need to sign into twilio with trial account to get info below
//install node and then "npm install twilio" to use it features
//from there you specify the "to" and "from" phone number and can just 
//run this code right inside your ide, keep in mind you have
//to generate a "from" number from twilio and approve a "to" number
//inside of your twilio trial account

var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'; // Your Account SID from www.twilio.com/console
var authToken = 'eXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: '+12019485958',  // Text this number
    from: '+12019485958' // From a valid Twilio number
})
.then((message) => console.log(message.sid));

