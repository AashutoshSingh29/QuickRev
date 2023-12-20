import React from 'react'
import { Link } from 'react-router-dom'

function CourseItem(props) {

  return (
    <div className='course-container'>
        <div className="card-course" >
            <img src={props.url} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.text}</p>
                <Link to={props.urltoContent}><button className='btn' >Read More</button></Link>
                
            </div>
        </div>
    </div>
  )
}

export default CourseItem
