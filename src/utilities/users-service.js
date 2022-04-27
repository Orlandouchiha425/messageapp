import * as usersAPI from './users-api'

//Sign Up

export async function signUp(userData){
    const token=await usersAPI.signUp(userData);
    localStorage.setItem('token',token)
    return token
//we imported everything /every function, in the js file theres one called signUp
//We created a function , created variable token, and wait for promise, until we retrieve with data from "signUp "
}


//Login

export async function login(credentials){
    const token=await usersAPI.login(credentials);
    localStorage.setItem('token',token)
    return getUser()
//this function is to login, created a variable token we making a promise and get everything from ./users-api'
//we will add item /token 
//return getUser is the las function in this file
}


//Get Token
export function getToken(){
    const token=localStorage.getItem('token');
    if(!token) return null;
    

    const payload=JSON.parse(window.atob(token.split('.')[1]))
    if(payload.exp <Date.now() /1000){
        localStorage.removeItem('token')
        return null
    }
    return token;
//breaking down this function:
//getting the token, get variable and will set the token to token from localstorage
// another variable payload.https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
//We basically transcribed the DOM information into readable information
//atob decoded our token and splits by '.' period, starting at 1 index , if payload exp is less than DATE now
// it removes the token, remember, the exp is in controllers/api/users.js, set to 24hrs 
//else it returns the token
}





//Logout

export function logout(){
    localStorage.removeItem('token')
//self explanatory, when we call this function is removes the token aka logs user out
}

//CheckToken
export function checkToken(){
    return usersAPI.checkToken()
    .then(dateStr =>new Date(dateStr))

//easy to understand, gets information from users-api.js and that js has a function called checkToken
// creates function and sets new Date/time
}

//GetUser
export function getUser(){
    const token=getToken();
    return token ? JSON.parse(window.atob(token.split('.')[1])).user : null;

//create a function named getUser, we call function get token from line 27ish
//if we have  a token, we will then decode and split otherwise return null/false
}
