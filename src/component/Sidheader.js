import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch';


function Sidheader() {

    const { error, loding, data } = useFetch("http://localhost:1337/api/catagories");

    if (loding) return <h1>App is loading....</h1>
    if (error) return <h1>Error fund :(</h1>



    return (
        <div className='site-header'>
            <Link to="/"><h1>sidheader</h1></Link>


            <nav className='categories' ><span>Filer blogs by category</span>
                {data.map(icategory => {


                    return  <Link key={icategory.id} to={`/category/${icategory.id}`}>
                        {icategory.attributes.name}
                        
                        </Link>
                    
                       


                })
                }</nav>
        </div>
    )
}

export default Sidheader






