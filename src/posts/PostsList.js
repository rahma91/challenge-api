import React,{useState,useEffect} from 'react'
import axios from "axios";
import CardPosts from './CardPosts';


const PostsList = () => {
     const [posts, setPosts] = useState([])


    const getPosts= () =>{
        const url='https://jsonplaceholder.typicode.com/posts/'
        axios.get(url).then(res=>res.data).then(res=>setPosts(res))
    
    }
     
    useEffect(() => {
      getPosts();
      }, [])

    return (
        <div>
            {
                posts.map(post => 
                    <CardPosts post={post} key={post.id} />)
            }
            
        </div>
    )
}

export default PostsList
