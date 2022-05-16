var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* task1.1 */
router.get('/brew', function(req, res, next) {
  var q = req.query.drink;
  if (q == "tea") {
    res.send("A delicious cup of tea");
  } else if (q == "coffee") {
    res.status(418).send();
  } else {
    res.status(200).send();
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

module.exports = router;