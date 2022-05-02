import UserLogOut from '../../component/UserLogOut/UserLogOut';
import ListOfUsers from '../../component/ListOfUsers/ListOfUsers';
import { useState,useEffect } from 'react';
import MessageBoard from '../../component/MessageBoard/MessageBoard';
export default function HomePage({user,setUser}){
    const [activeUsers,setActiveUsers]=useState('');





    return(
        <main>
                <MessageBoard />
<UserLogOut user={user} setUser={setUser} />

<h1>This is the HomePage</h1>
        </main>
     
    
    )
}