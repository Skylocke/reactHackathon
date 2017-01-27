var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");

var URL = "https://www.goodreads.com/author/quotes/30691.Adolf_Hitler";

var hitler_quotes;

request(URL, function(error, response, body) {
  var $ = cheerio.load(body);
  var quoteTexts = $('.quoteText')

  hitler_quotes = quoteTexts.map(function(index, element) {
    return { name: 'hitler',
      quote: element.children[0].data.trim().replace("“", "").replace("”", "")
    };
  }).get();
  fs.writeFile('hitler_quotes.json', JSON.stringify(hitler_quotes), 'utf8', function (err) {
    console.error(err);
  });

});
