const express = require('express');
const blogController = require('../controllers/blogController')


const router = express.Router();

router.get('/', blogController.blog_index );
router.get('/create', blogController.blogs_create_get)
router.post('/', blogController.blogs_create_post )
router.get('/:id', blogController.blog_details)
router.delete('/:id', blogController.blogs_delete_post);

module.exports = router;

