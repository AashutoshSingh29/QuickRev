import React, { useState } from 'react'
import SubjectTopics from './SubjectTopics';

function CourseItem(props) {

  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className='course-container'>
        <div className="card-course" >
            <img src={props.url} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.text}</p>
                <button className='btn' onClick={ () => {setIsToggled(!isToggled)}} > Read More</button>
                
            </div>
        </div>
        {isToggled && <SubjectTopics/>}
    </div>
  )
}

export default CourseItem
