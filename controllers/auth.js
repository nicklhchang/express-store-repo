const passport = require('passport');
const Member = require('../models/member');

const register = async function(req,res) {
    try {
        const paramsToCreate = {
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        };
        const newMember = await Member.create({ ...paramsToCreate });
        // immediately log in; however only adds user property (req.user is logged in user)
        // .login() won't add logged in user to req.session Object.passport.user 
        req.login(newMember,function(err) {
            if (err) {return next(err);}
            return res.json({ newlyRegisteredMember:newMember });
        });
        // console.log(req);
    } catch (error) {
        console.error(error); // for devs
        // res.redirect('/api/v1/auth/register')
        res.json({ newlyRegisteredMember:null });
    }
}

// this here must go before controller in routes to protect; the protecting middleware
const isAuthenticated = function(req,res,next) {
    if (req.isAuthenticated()) {next();}
    else {res.status(401).json({ msg:'Please login as a member' });}
}

module.exports = { register,isAuthenticated }
