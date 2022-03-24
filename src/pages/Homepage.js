import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';


const BLOGS = gql`
query GetBlogs {
    blogs{ 
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




export default function Homepage() {

  const { error, loading, data } = useQuery(BLOGS)

   


 

  if (error) return <h1>app cach an error</h1>
  if (loading) return <h1>app loading...</h1>
  // if(data) return <h1>all  data is avalibile </h1>



 



  return (

    <div>
      {data.blogs.data.map((val) => {

        return <div className='review-card' key={val.id}>

          <div className='rating'>{val.attributes.rating}</div>
          <h1> GET ID:{val.id}</h1>
          <h2>{val.attributes.title}</h2>

          <small>console list {val.id}</small>

         

          

          <p>{val.attributes.blog.substring(0, 200)}</p>
          <Link to={`/details/${val.id}`}> Rad more {val.id}</Link>

        </div>
      })}

    </div>

  )



}










{/* <div  className='review-card'>
                    <div className='rating'>{item.attributes.rating}</div>
                    <h2>{item.attributes.title}</h2>

                    <small>console list {item.id}</small>

                    <p>{item.blog.substring(0, 200)}...</p>
                    <Link to={`/details/${item.id}`}>{item.id} Rad more</Link>

                </div> */}


