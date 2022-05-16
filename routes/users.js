var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* task1.4 */
router.post('/addpost', function(req, res, next) {
  var lines = req.body.lines;
  var suffix = req.body.suffix;
  var sentence = "";
  for (let line of lines) {
    sentence += line + suffix + "\n";
  }
  res.send(sentence);
});

router.post('/getposts', function(req, res, next) {
  var lines = req.body.lines;
  var suffix = req.body.suffix;
  var sentence = "";
  for (let line of lines) {
    sentence += line + suffix + "\n";
  }
  res.send(sentence);
});

module.exports = router;
