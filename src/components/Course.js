import React, { useState, useEffect } from 'react'
import CourseItem from './CourseItem'
// import subjects from '../course.json'
const  Course = () => {

  const [subjects,setSubjects]= useState([]);

  useEffect(() => {
    // Assuming you have a way to fetch the JSON file, using fetch for example
    fetch('/course.json')
      .then(response => response.json())
      .then(data => setSubjects(data.subjects))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <div>
        <div className="course-container">
        {subjects.map( (element)=>{ 
          return <div className="col-md3" key={element.subId}>
          <CourseItem title={element.subName} text={element.description} url={element.urlToImage} urltoContent={element.link}></CourseItem>
          
          </div>
          })}  
        </div>
    </div>
  )
}


export default Course
