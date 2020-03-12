const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


// POST ROUTES

router.get('/posts', ctrl.posts.index);
router.get('/posts/:id', ctrl.posts.show);
router.post('/posts', ctrl.posts.create);
router.put('/posts/:id', ctrl.posts.update);
router.delete('/posts/:id', ctrl.posts.destroy);

// router.put('/user/:id/posts', ctrl.posts.update);
// router.delete('/user/:id/posts/:id', ctrl.posts.destroy)

// USER ROUTES
router.get('/users', ctrl.users.index);
router.get('/users/:id', ctrl.users.show);
router.post('/users', ctrl.users.create);
router.delete('/users/:id', ctrl.users.destroy);

//RESTAURANT ROUTES
router.get('/restaurants', ctrl.restaurants.index);
router.get('/restaurants/:id', ctrl.restaurants.show)
router.post('/restaurants', ctrl.restaurants.create)

module.exports = router;