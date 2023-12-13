import React from 'react'

function CourseItem(props) {
  return (
    <div className='course-container'>
        <div className="card" style={{ width:`25rem` , height:`25rem`}}>
            <img src={props.url} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.text}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
  )
}

export default CourseItem
