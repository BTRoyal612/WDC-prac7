var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* task1.1 */
router.get('/brew', function(req, res, next) {
  var d = req.query.drink;
  if (d == "tea") {
    res.send("A delicious cup of tea");
  } else if (d == "coffee") {
    res.status(418).send();
  } else {
    res.status(400).send();
  }
});

/* task1.2 */
var previous = "first";
router.post('/pass-it-on', function(req, res, next) {
  var q = req.body.message;
  if (q == "") {
    res.status(400).send();
  } else {
    res.send(previous);
    previous = q;
  }
});

/* task1.3 */
router.post('/combine', function(req, res, next) {
  var lines = req.body.lines;
  var suffix = req.body.suffix;
  var sentence = "";
  for (let line of lines) {
    sentence += line + suffix + "\n";
  }
  res.send(sentence);
});

/* task3.1 */
var cookiesCount = 1;
router.get('/cookie', function(req, res, next) {
  res.cookie('task3_1', cookiesCount);
  cookiesCount++;
  res.send();
});

module.exports = router;
