const express=require('express')
const router=express.Router();

const usersCtrl=require('../../controllers/api/users')
const ensureLoggedIn=require('../../config/ensureloggedin')

router.post('/', usersCtrl.create)
//this creates , from function located in api/users
// POST /api/users

router.post('/login', usersCtrl.login);
//takes you to login route rom controllers/api/users location
//post /api/users/login
//reminder checks for user, finds by email and logsin

router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
//before we get logged in , will check token and ensure we are logged in from function
//located in config/ensurelogged in / lastly we will check the token , to be specific we call only one function. 
//that function is checktoken within the variable usersCtrl inside of controllers/api/users
// GET /api/users/check-token
