import React from 'react'
import { Card,Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const CardPosts = ({post}) => {
    return (
        <div>
              <Card style={{ width: '18rem',height:'400px'}}>
            <Card.Body>
                <Card.Title>{post.id} </Card.Title>
                <Card.Title>{post.title} </Card.Title>
                <Card.Text>{post.body} </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                
                <Link to={`/user/post/comments/postId/${post.id}`} >
                     <Button variant="info">Comments</Button>
                </Link>
               </Card.Footer>
        </Card>
        </div>
    )
}

export default CardPosts
