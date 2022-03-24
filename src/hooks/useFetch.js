import { useEffect, useState } from 'react';





const useFetch = ( url) => {
   
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loding, setLoding] = useState(true);

    useEffect(()=>{


        const fetchData = async ()=>  {
            setLoding(true)

            try{
                const res = await fetch(url)
                const json = await res.json()

            
                setData(json.data)
                setLoding(false)
            } catch (error){
                setError(error)
                setLoding(false)

            }

        }
        fetchData()
    } ,[url])

   
    return {error,loding,data}
}

export default useFetch


