import React from 'react'

function CourseItem(props) {
  return (
    <div className='course-container'>
        <div className="card" style={{ width:`25rem` , height:`25rem`}}>
            <img src={props.url} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.text}</p>
                <button className='btn' > Read More</button>
            </div>
        </div>
    </div>
  )
}

export default CourseItem
