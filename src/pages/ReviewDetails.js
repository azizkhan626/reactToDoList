import React from 'react'
import { useParams } from 'react-router-dom'

import { Link } from 'react-router-dom';
import { useQuery,gql } from '@apollo/client';






 const GET_DETAIL=gql`
 
 query GetBlogs($id: ID!) {  
    blog(id: $id){
       data{
      id
         attributes{
           title,
            blog,
            rating,
             }
             }
             }
             }
 
`





export default function ReviewDetails() {

    const { id } = useParams();

    const { data, error, loading } = useQuery(GET_DETAIL,{variables:{id:id}})

 
           

    if (error) return <h1>app cach an error</h1>
    if (loading) return <h1>app loading...</h1>
    // if(data) return <h1>all  data is avalibile </h1>

   
  

   
    return (
        <div>
              <div  className='review-card'>
                    <div className='rating'>{data.blog.data.attributes.rating}</div>
                   
                    <h2>{data.blog.data.attributes.title}</h2>
                    
                    <small>console list </small>

                    <p>{data.blog.data.attributes.blog}</p>
                    <Link to={'/'}> back to home</Link>
                   

                </div>
            
        </div>
    )
}
