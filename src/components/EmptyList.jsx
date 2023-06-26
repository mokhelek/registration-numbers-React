import React from 'react'
import myImage from '../assets/undraw_void_-3-ggu.svg'

function EmptyList() {
  return (
    <div>
        <p style={{fontSize:"1.3rem"}} > ~ No registration numbers  ~ </p>
        <img style={{width:"50%"}} className='img-fluid' src={myImage} alt="" />
    </div>
  )
}

export default EmptyList