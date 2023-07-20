const router = require('express').Router();
const blogController = require('../controllers/blogController');
const authenticate = require('../middleware/authenticate');
const upload = require('../middleware/multer');

router.post('/addBlog', authenticate, upload.single('image'), blogController.addBlog);
router.delete('/deleteBlog/:id', authenticate, blogController.deleteBlog);
router.get('/getBlogs', blogController.getBlogs);

module.exports = router;