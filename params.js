// Email Contents

var params = {
    "message": {
        "from_email":"yutingyue514@gmail.com",
        "to":[{"email":"yyue@wharton.upenn.edu"}],
        "subject": "My RouteX Schedule",
        "html": "<p>Hey *|COOLFRIEND|*, we've been friends for *|YEARS|*.</p>",
        "autotext": true,
        "merge_vars": [
            {
                "rcpt": "your_recipient_address",
                "vars": [
                    {
                        "name": "COOLFRIEND",
                        "content": "Your friend's name"
                    },
                    {
                        "name": "YEARS",
                        "content": "5 awesome years"
                    }
                ]
            }
        ]
    }
};
