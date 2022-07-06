import React from 'react'

const Todolist = (props) => {
  return (
    <div className='listDiv'>
    <spen className='btn_x' onClick={()=>{
     return   props.delete_btn(props.id)
    }}>X</spen>
    <li>{props.list}</li>
    </div>
  )
}

export default Todolist