const express = require('express');
const router = express.Router({ mergeParams:true });

// /posts/:id/reviews
// /posts/:id/reviews/new
// /posts/:id/reviews/
// /posts/:id/reviews/:id_review
// /posts/:id/reviews/:id_review/edit
// /posts/:id/reviews/:id_review
// /posts/:id/reviews/:id_review




// GET reviews index /post
router.get('/', (req, res, next) =>{
  res.send('INDEX /posts/:id/reviews');
});

// GET reviews NEW /reviews/new
router.get('/new', (req, res, next) =>{
  res.send('NEW /posts/:id/reviews/new');
});

// POST reviews CREATE /reviews
router.post('/', (req, res, next) =>{
  res.send('POST /posts/:id/reviews');
});

// GET reviews SHOW /reviews/:id
router.get('/:review_id', (req, res, next) =>{
  res.send('SHOW /posts/:id/reviews/:review_id');
});

// GET reviews EDIT /reviews
router.get('/:review_id/edit', (req, res, next) =>{
  res.send('EDIT /posts/:id/reviews/:review_id/edit');
});

// PUT reviews UPDATE /reviews/:id
router.put('/:review_id', (req, res, next) =>{
  res.send('UPDATE /posts/:id/reviews/:review_id');
});

// DELETE reviews DELETE /reviews/:id
router.delete('/:review_id', (req, res, next) =>{
  res.send('DESTROY /posts/:id/reviews/:review_id/');
});

module.exports = router;
