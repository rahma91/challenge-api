import React from 'react'
import { Card } from "react-bootstrap";
import Avatar from "../assets/avatar.jpg"


const ListUsers = ({user}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }} >
  <Card.Img variant="top" src={Avatar} />
  <Card.Body>
    <Card.Title>{user.id}</Card.Title>
    <Card.Title>{user.username}</Card.Title>
    <Card.Title>{user.email}</Card.Title>
    <Card.Text>
      {user.address.street} <br />
      {user.address.city}
      {user.company.name}
      {user.phone}
      {user.website}




    </Card.Text>

  </Card.Body>
</Card>
        </div>
    )
}

export default ListUsers
