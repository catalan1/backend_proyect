const express = require('express');

const router = express.Router();
const placesController = require('../models/places-controller');
const {check}= require('express-validator');
const {validatorResult}=require('express-validator');

router.get('/:pid', placesController.getPlaceById);
router.get('/user/:uid', placesController.getPlaceByUser);
    
//paso27

router.post(
    '/', 
    [
        check('title').not().isEmpty(),
        check('description').isLength({min:6}),
        check('address').not().isEmpty()

    ]
    ,
    placesController.createPlace);


router.patch('/:pid', 
    [
        check('title').not().isEmpty(),
        check('description').isLength({min:6})
    ]
    ,
    placesController.updatePlace);

router.delete('/:pid', placesController.deletePlace);
module.exports = router;
