const express = require('express');
const router = express.Router();
const posts = require('../controller/posts.controller')

router.get('/', async (req, res) => {
    try {
        const response = await posts.get_posts()
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(response.data));
    } catch (error) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(error.message));
    }
})

router.get('/:id', async (req, res) => {
    try {
        const response = await posts.get_posts_by_id(req.params.id)
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(response.data));
    } catch (error) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(error.message));
    }
})

router.post('/', async (req, res) => {
    try {
        const response = await posts.create_posts(req.body)
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(response.data));
    } catch (error) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(error.message));
    }
})


module.exports = router;
