import React from 'react'
import { Card } from "react-bootstrap";

const CardComments = ({comment}) => {
    return (
        
        <div>
            <Card style={{ width: '18rem',height:'380px'}}>
            <Card.Body>
                <Card.Title>{comment.id} </Card.Title>
                <Card.Title>{comment.name} </Card.Title>
                <Card.Title>{comment.email} </Card.Title>
                <Card.Text>{comment.body} </Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}

export default CardComments
