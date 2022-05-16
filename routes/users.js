var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* task1.4 */
var posts = [];
router.post('/addpost', function(req, res, next) {
  posts.push(req.body);
  res.send();
});

router.get('/getposts', function(req, res, next) {
  var postsReorder = [];
  var n = 5;

  if (n > posts.length) {
    n = posts.length;
  }

  for (let i = 0; i < n; i++) {
    postsReorder.push(posts[posts.length - 1 - i])
  }
  res.send(postsReorder);
});

module.exports = router;
