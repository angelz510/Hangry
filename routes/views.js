const express = require('express');
const router = express.Router();


// HOMEPAGE
router.get('/', (req, res) => {
    res.sendFile('views/index.html', {
        root: __dirname + '/../'
    });
});

// LOGIN
router.get('/login', (req, res) => {
    res.sendFile('views/log-in.html', {
        root: __dirname + '/../'
    });
});

// POSTS PAGE
router.get('/posts', (req, res) => {
    res.sendFile('views/posts.html', {
        root: __dirname + '/../'
    });
});

module.exports = router;