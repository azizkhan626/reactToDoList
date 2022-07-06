import React ,{useState} from 'react';
import Todolist from './Todolist';





const App = () => {

const [inputdata,setinputdata] =useState("");

const [liststor,setliststor] =useState([])

const input_event = (e) =>{
 setinputdata(e.target.value);

}

const add_event = () =>{
  
    setliststor((old_data)=>{
        return [...old_data,inputdata]
    })
  setinputdata("")
    
}    

const DeleteEvent = (id)=>{
    setliststor((old_data)=>{
        return old_data.filter((crnData,index)=>{
            return index !== id;
        })
    })
}

    

    return(
        <div className='container'>

            <div className='center_div'> 
            
                <h1 className='head_h1'>todo list</h1>
                    <div className='input_div'>

                    
                <input onChange={input_event} value={inputdata} placeholder="type" />
                <button onClick={add_event} className='Add_btn'>+</button>
                </div>

                <ul>
                    {liststor.map((list_i,ind)=>{
                          return (
                          <Todolist list={list_i} delete_btn={DeleteEvent} key={ind} id={ind}  />
                          )
                    })}
                </ul>
                
                </div>
           
        </div>
    )

};

export default App;
