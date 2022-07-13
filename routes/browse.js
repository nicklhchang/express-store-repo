const express = require('express');
const router = express.Router();
const Item = require('../models/item');
// all routes are put behind isAuth in app.js, that is the protection needed

router.get('/menu', function(req,res,next) {
    // mongoose queries are just model.function(); this returns Mongoose Query object
    // queries are not promises so no using async/await or chaining .then()....catch()
    // read up on mongoose model api docs but idea is ^ executes query more than once
    Item.find({},'name cost classification')
    .exec(function(err,list_items) {
        if (err) {return next(err);}
        res.json({
            alreadyAuthenticated:true,
            requestSuccess:true,
            user:req.user,
            result:list_items
        });
    });
});

module.exports = router;