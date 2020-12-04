var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
    'index', 
    { 
      title: 'Hallo Dedy' 
    }
  );
});

/**  Demo 1 - Render Template */
router.get('/demo1', function(req, res, next) {
  res.render(
    'demo1',
    {
      message: 'Apakah ada yang bisa saya bantu tuan ?',
      user : 
      {
        name: 'Dedy', 
        email: 'dedy.blinda94@gmail.com', 
        website: 'https://www.sokamu.com'
      }
    }
  );
});

/** Demo 2 - parameter di URL */
router.get('/demo2/(:id)/(:category)', function(req, res, next) {
  res.render(
    'demo2',
    {
      id: req.params.id,
      category: req.params.category,
    }
  );
});

/** Demo 3 - Menampilkan Respon JSON */
router.get('/demo3', function(req, res, next) {
  res.json(
    {
      message: 'Halo kawan',
      user: 
      {
        name: 'Dedy', 
        email: 'dedy.blinda94@gmail.com', 
        website: 'https://www.sokamu.com'
      }
    }
  );
});

/** Demo 4 - Menerima Request Method POST Dari Form */
router.get('/demo4/', function(req, res, next) {
  res.render('demo4');
});

router.post('/demo4/', function(req, res, next) {
  res.json(
    {
      message: "request POST is executed",
      data: 
      {
        username: req.param('username'),
        email: req.param('email'),
        website: req.param('website'),
        phone: req.param('phone'),
      }
    }
  );
});

/** Demo 5 - Menerima Request Method PUT */
router.put('/demo5/', function(req, res, next) {
  res.json(
    {
      message: "request PUT is executed",
      data: 
      {
        username: req.param('username'),
        email: req.param('email'),
        website: req.param('website'),
        phone: req.param('phone'),
      }
    }
  );
});

/** Demo 6 - Menerima Request Method DELETE */
router.delete('/demo6/', function(req, res, next) {
  res.json(
    {
      message: "request DELETE is executed"
    }
  );
});

/** Demo 7 - Redirect URL */
router.get('/demo7', function(req, res, next) {
  res.redirect('/demo7_result');
});

router.get('/demo7_result', function(req, res, next) {
  res.render('demo7');
});

module.exports = router;
