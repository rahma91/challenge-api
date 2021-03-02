import React, {useState,useEffect} from 'react'
import ListUsers from './ListUsers'
// import axios from "axios";


const Users = () => {
    const [users, setUser] = useState([])

    const getUser= () =>{

            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUser(json))
    }
        
    useEffect(() => {
      getUser();  
     
    }, [])



    return (
        <div>
          {
            users.map(user =>
                <ListUsers user={user} key={user.id} />

              )
          }
        </div>
    )
}

export default Users