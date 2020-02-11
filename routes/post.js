const express = require('express')

const Post = require('../controllers/post')

const router = express.Router()

router.post('/post', Post.createPost)
router.put('/post/:id', Post.updatePost)
router.delete('/post/:id', Post.deletePost)
router.get('/post/:id', Post.getPostById)
router.get('/post', Post.getPosts)

module.exports = router