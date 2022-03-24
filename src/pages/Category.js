import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';




const GETCATEGORY = gql`

query catagories($id: ID!){
    catagory(id: $id){
        data{
            id
            attributes{
                name
                blogs{
                    data{
                        id
                        attributes{
                            title
                            rating
                            blog
                        }
                    }
                }
            }
        }
    }
}

`










export default function Category() {

    const { id } = useParams();

    const { error, loading, data } = useQuery(GETCATEGORY, { variables: { id: id } })


    // console.log(data.catagory.data.attributes.blogs.data[0].attributes.title)



    if (error) return <h1>app cach an error</h1>
    if (loading) return <h1>app loading...</h1>
    // if(data) return <h1>all  data is avalibile </h1>



    return (
        <div>
            <h2>{data.catagory.data.attributes.name}</h2>
            {data.catagory.data.attributes.blogs.data.map((val) => {

                

             return  <div className='review-card' key={val.id}>
                    <div className='rating'>{val.attributes.rating}</div>

                    <h2>{val.attributes.title}</h2>

                    <small>console list </small>

                    <p>{val.attributes.blog}</p>
                    <Link to={'/'}> back to home</Link>


                </div> 



            })}


        </div>
    )


}