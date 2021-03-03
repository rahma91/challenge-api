import React, {useState,useEffect} from 'react'
import axios from "axios";
import { Form } from "react-bootstrap";
import CardUsers from './CardUsers';
import './Users.css'



const UsersListe = () => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")


    const getUser= () =>{
        const url='https://jsonplaceholder.typicode.com/users'
        axios.get(url).then(res=>res.data).then(res=>setUsers(res))
    
    }
     
    useEffect(() => {
      getUser();
      }, [])

    return (
        <div className="styleUsers">
          <div>
                 <Form.Control type="text" placeholder="search..." value={search} 
      onChange={(e)=>{setSearch(e.target.value)}}/> 
          </div>
         
         
          {
            search !== "" ?
            users.filter(user => user.name.toUpperCase().includes(search.toUpperCase()))

            .map(user =>
            
                <CardUsers user={user} key={user.id} />
              )
                :

                users.map(user =>    
                        

                <CardUsers user={user} key={user.id} />
                
                )

            }
            
        </div>
        

    )

}
                    

export default UsersListe