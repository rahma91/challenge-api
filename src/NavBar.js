import React from 'react'
import { Navbar,Form,Nav,FormControl } from "react-bootstrap";

const NavBar = ({setSearch,search}) => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">API CHALLENGE</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Posts</Nav.Link>
      <Nav.Link href="#link">Comments</Nav.Link>
      
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => setSearch(e.target.value)} value={search} />
    </Form>
  </Navbar.Collapse>
</Navbar>
            
        </div>
    )
}

export default NavBar
