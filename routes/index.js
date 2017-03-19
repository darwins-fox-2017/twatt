var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let OAuth = require('oauth')
    var oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token', // request token
        'https://api.twitter.com/oauth/access_token', // access token
        '50w9snkwLrsC5tfS4YnR4z6r2', // consumer key
        '9vf5wz7a6r5LQ8DbkE4JIwIumIcLDLfTUoesRV5N8PfWq0BKPW', // secret
        '1.0A',
        null, // callback ur;
        'HMAC-SHA1'
    );

    oauth.get(
        'https://api.twitter.com/1.1/search/tweets.json?q=nikita%20mirzani&src=typd',
        '836419613055320064-CZTE1R8qtH7eai9MLxiDf5YImu36u6n', // Access token
        'JEmFKEAQTWI0hdcOPej6YLzwTmdan9HZ7v1izYPqm7sq8', // Access secret
        function (e, data, respond) {
            if (e) console.error(e);
            res.send(data)
        });

});

router.get('/search/:parameter', function (req, res, next) {
    let keyword = req.params.parameter
    let OAuth = require('oauth')
    var oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token', // request token
        'https://api.twitter.com/oauth/access_token', // access token
        '50w9snkwLrsC5tfS4YnR4z6r2', // consumer key
        '9vf5wz7a6r5LQ8DbkE4JIwIumIcLDLfTUoesRV5N8PfWq0BKPW', // secret
        '1.0A',
        null, // callback ur;
        'HMAC-SHA1'
    );

    oauth.get(
        `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.parameter}&src=typd`,
        '836419613055320064-CZTE1R8qtH7eai9MLxiDf5YImu36u6n', // Access token
        'JEmFKEAQTWI0hdcOPej6YLzwTmdan9HZ7v1izYPqm7sq8', // Access secret
        function (e, data, respond) {
            if (e) console.error(e);
            res.send(data)
        });
});

router.get('/timeline/:parameter', function (req, res, next) {
    let keyword = req.params.parameter
    let OAuth = require('oauth')
    var oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token', // request token
        'https://api.twitter.com/oauth/access_token', // access token
        '50w9snkwLrsC5tfS4YnR4z6r2', // consumer key
        '9vf5wz7a6r5LQ8DbkE4JIwIumIcLDLfTUoesRV5N8PfWq0BKPW', // secret
        '1.0A',
        null, // callback ur;
        'HMAC-SHA1'
    );

    oauth.get(
        `https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=${req.params.parameter}&count=2`,
        // 'https://api.twitter.com/1.1/search/tweets.json?q=nikita%20mirzani&src=typd',
        '836419613055320064-CZTE1R8qtH7eai9MLxiDf5YImu36u6n', // Access token
        'JEmFKEAQTWI0hdcOPej6YLzwTmdan9HZ7v1izYPqm7sq8', // Access secret
        function (e, data, respond) {
            if (e) console.error(e);
            res.send(data)
        });
});

module.exports = router;
