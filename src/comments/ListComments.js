import React,{useState,useEffect} from 'react'
import axios from "axios";
import CardComments from './CardComments';

const ListComments = () => {
    const [comments, setComments] = useState([])


    const getcomments= () =>{
        const url='https://jsonplaceholder.typicode.com/posts/'
        axios.get(url).then(res=>res.data).then(res=>setComments(res))
    
    }
     
    useEffect(() => {
      getcomments();
      }, [])

    return (
        <div>
            <div>
                <h1>{comments.length} comments </h1>
            </div>

            {
                comments.map(comment =>
                    <CardComments comment={comment} key={comment.id} />)
            }
            
        </div>
    )
}

export default ListComments
