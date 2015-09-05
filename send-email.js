// Create a function to log the response from the Mandrill API
function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('664MdZ32dLQb8icEJxp4jw');

// create a variable for the API call parameters
/*var params = {
    "message": {
        "from_email":"yutingyue514@gmail.com",
        "to":[{"email":"yyue@wharton.upenn.edu"}],
        "subject": "Sending a text email from the Mandrill API",
        "text": "I am testing it from routex"
    }
};*/

function sendTheMail() {
// Send the email!

    m.messages.send(params, function(res) {
        //log(res);
    }, function(err) {
        log(err);
    });
}
