var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',(req, res, next) => {
  res.send('GET /index')
});

router.get('/register', (req, res, next) =>{
  res.send('GET /register')
});

router.post('/register', (req, res, next) =>{
  res.send('POST /register')
});

router.get('/login', (req, res, next) =>{
  res.send('GET /login')
});

router.post('/login', (req, res, next) =>{
  res.send('POST /login')
});

router.get('/profile', (req, res, next) =>{
  res.send('GET  /profile')
});

router.put('/profile/:user_id', (req, res, next) =>{
  res.send('put  /profile/:user_id')
});

/* GET /forgot */
router.get('/forgot', (req, res, next) => {
  res.send('GET /forgot');
});

/* PUT /forgot */
router.put('/forgot', (req, res, next) => {
  res.send('PUT /forgot');
});

/* GET /reset */
router.get('/reset/:token', (req, res, next) => {
  res.send('GET /reset/:token');
});

/* PUT /reset */
router.put('/reset/:token', (req, res, next) => {
  res.send('PUT /reset/:token');
});



module.exports = router;
