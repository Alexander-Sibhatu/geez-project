import React from 'react'
import './homepage.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (

    <div className='HomePage'>
      <button><Link to="/catagory">Catagory</Link></button>
      <button><Link to="/grammer">Grammer</Link></button>
      <button><Link to ="/noun">Noun</Link></button>
      {/* <button><Link to ="/mistakes">Mistakes</Link></button> */}
      <button><Link to="/poem">Poem</Link></button>
    </div>
  )
}
export default HomePage