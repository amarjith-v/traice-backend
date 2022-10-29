const express = require('express');
const router = express.Router();
const imageController= require('../controller/image-controller');


router.get('/display-images',imageController.displayImage);
router.post('/image/:id',imageController.displayOneImage);


module.exports = router;