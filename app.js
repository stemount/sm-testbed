var express = require('express'),
    app = express(),
    emojiFavicon = require('emoji-favicon'),
    minifyHTML = require('express-minify-html'),
    proxy = require('express-http-proxy');

// Set computer emoji as favicon.
app.use(emojiFavicon('computer'));

// minify HTML.
app.use(minifyHTML({
    override:      true,
    htmlMinifier: {
        removeComments:            true,
        collapseWhitespace:        true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes:     true,
        minifyCSS:                 true,
        minifyJS:                  true,
        html5:                     true
    }
}));

// use EJS templating.
app.set('view engine', 'ejs');

// serve homepage.
app.get('/', function (req, res, next) {
  res.render('homepage');
});

// set static assets to 1 year max-age expiry.
app.use(express.static(__dirname, {maxage: '1y'}));

// listen on 3000.
app.listen(3000, function () {
  console.log('Site is on 3000!');
});
