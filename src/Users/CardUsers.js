import React from 'react'
import { Card, } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Avatar from "../assets/avatar.jpg"
import '../Users/CardUsers.css'

const CardUsers = ({user}) => {
    return (
      
<div style={{width:"15rem"}}>    
    <Link to={`/user/post/userId/${user.id}`}   >
      <Card className="card" style={{ width: '18rem'  ,height:"24rem"   }}  >
          <Card.Img className="imgAvatar"  variant="top" src={Avatar} />
            <Card.Body>
            <Card.Title>{user.id}</Card.Title>
            <Card.Title>{user.name}</Card.Title>
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
    </Link>
</div>
    )
}

export default CardUsers
