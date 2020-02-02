const express = require('express');
const router = express.Router();

// GET posts index /post
router.get('/', (req, res, next) =>{
  res.send('INDEX /posts');
});

// GET post NEW /post/new
router.get('/new', (req, res, next) =>{
  res.send('NEW /posts/new');
});

// POST post CREATE /posts
router.post('/', (req, res, next) =>{
  res.send('POST /posts');
});

// GET post SHOW /posts/:id
router.get('/:id', (req, res, next) =>{
  res.send('SHOW /posts/:id');
});

// GET post EDIT /posts
router.get('/:id/edit', (req, res, next) =>{
  res.send('EDIT /posts/:id/edit');
});

// PUT post UPDATE /posts/:id
router.put('/:id', (req, res, next) =>{
  res.send('UPDATE /posts/:id');
});

// DELETE post DELETE /posts/:id
router.delete('/:id', (req, res, next) =>{
  res.send('DESTROY /posts/:id/');
});

module.exports = router;
