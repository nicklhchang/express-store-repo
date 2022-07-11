const express = require('express');
const router = express.Router();
const passport = require('passport');

const { register } = require('../controllers/auth');

router.route('/register').post(register);

router.get('/loginStatus', function(req,res) {
    res.json({ alreadyAuthenticated:req.isAuthenticated() });
})

router.post('/login', passport.authenticate('local',{
    failureRedirect:'/api/v1/auth/login-failure',
    successRedirect:'/api/v1/auth/login-success'
}));

router.get('/login-success', function(req,res,next) {
    console.log(req);
    res.json({ loginSuccess:true });
})

router.get('/login-failure', function(req,res,next) {
    res.json({ loginSuccess:false });
})

module.exports = router;