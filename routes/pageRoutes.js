const { Router } = require('express');
const router = Router();
const pageController = require('../controllers/pageController');

router.get('/home', pageController.home_get);
router.get('/about', pageController.about_get);
router.post('/contact', pageController.contact_post);


module.exports = router;