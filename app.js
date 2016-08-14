var express = require('express'),
    app = express(),
    emojiFavicon = require('emoji-favicon'),
    minifyHTML = require('express-minify-html'),
    minify = require('html-minifier').minify;

app.use(emojiFavicon('computer'));

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

app.set('view engine', 'ejs');

app.get('/', function (req, res, next) {
  res.render('homepage');
});

app.use(express.static(__dirname));

app.listen(3000, function () {
  console.log('Site is on 3000!');
});
