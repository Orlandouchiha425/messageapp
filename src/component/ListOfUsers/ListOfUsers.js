import styles from './ListOfUsers.module.css'
export default function ListOfUsers({users,activeUser,setActiveUsers}){
    const names=users.map(name=>
        <li
        key={name}
        className={name===activeUser ? styles.active:''}
        onClick={()=>setActiveUsers(name)}>
            {name}
        </li>
        );

        return(
            <ul className={styles.ListOfUsers}>
                {names}    
             </ul>
        )
}