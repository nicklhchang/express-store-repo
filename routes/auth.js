const express = require('express');
const router = express.Router();
const passport = require('passport');

const { register } = require('../controllers/auth');

router.route('/register').post(register);

router.get('/login-status', function(req,res) {
    res.json({ 
        alreadyAuthenticated:req.isAuthenticated(),
        // ? means if .user property exists, then access its value
        user:req?.user
    });
})

router.post('/login', passport.authenticate('local',{
    failureRedirect:'/api/v1/auth/login-failure',
    successRedirect:'/api/v1/auth/login-success'
}));

router.get('/login-success', function(req,res,next) {
    console.log(req);
    res.json({ 
        loginSuccess:true,
        // userID:req.session.passport.user,
        user:req.user
    });
})

router.get('/login-failure', function(req,res,next) {
    res.json({ 
        loginSuccess:false,
        user:null
    });
})

module.exports = router;