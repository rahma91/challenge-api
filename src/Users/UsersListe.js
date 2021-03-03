import React, {useState,useEffect} from 'react'
import axios from "axios";
import { Form,Navbar,Nav } from "react-bootstrap";
import CardUsers from './CardUsers';
import '../Users/UsersListe.css'

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
        <div>
            <div style={{display:'flex' ,flexDirection:'column'}}>
              <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">API CHALLENGE</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Posts</Nav.Link>
      <Nav.Link href="#link">Comments</Nav.Link>
      
    </Nav>
    <Form inline>
<Form.Control type="text" placeholder="search..." value={search} 
      onChange={(e)=>{setSearch(e.target.value)}}/> 
          </Form>
  </Navbar.Collapse>
</Navbar>
</div>

      
          <div className="styleUsers">
            


                 {/* <Form.Control type="text" placeholder="search..." value={search} 
      onChange={(e)=>{setSearch(e.target.value)}}/>  */}
          
          {
            search !== "" ?
            users.filter(user => user.name.toUpperCase().includes(search.toUpperCase()))
            .map(user =>
            
                <CardUsers user={user} key={user.id} />
              )
                : users.map(user =>    
                   
                <CardUsers user={user} key={user.id} />               
                )
            }
            </div>
        </div>
    )
}
                    
export default UsersListe