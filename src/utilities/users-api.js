import { getToken } from "./users-service";
//this only imports getToken function from Users-service

const Base_URL= "/api/users";
//previously, if we wanted to deploy to heroku and netlify we needed to go back 
//and change every url with heroku and nelify link, with this we can just come here and update BASE_URL

export async function signUp(userData){
    return sendRequest(`${Base_URL}`, 'POST',userData)
//created a function with address api/users make it into a post and gives *userData* whatever we put in the parameter
//all this is inside sendRequest, which is the last function in this file

}


export async function checkToken(){
    return sendRequest(`${BASE_URL}/check-token`)
//we send the request to check token
}



export async function login(credentials){
    return sendRequest(`${BASE_URL}/login`,'POST',credentials)
    //this is just a post request, we didnt need to specifiy in checktoken because is automatically and get request
}


async function sendRequest(url,method='GET',payload=nul){
    
    // Fetch accepts an options object as the 2nd argument
    // used to include a data payload, set headers, etc.
    const options={ method };
    if(payload){
        options.headers={ 'Content-type': 'application/json'};
        options.body=JSON.stringify(payload)
    }
    const token=getToken()
    if(token){
        options.headers=options.headers || {};
        options.headers.Authorization= `Bearer ${token}`
    }
    const res= await fetch(url,options);
        // res.ok will be false if the status code set to 4xx in the controller action
if(res.ok) return res.json();
throw new Error('Bad Request')
}

