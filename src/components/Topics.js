import React from "react";
const Topics = (props) =>{
  const bodyArray = Array.isArray(props.body) ? props.body : [props.body];
  return (
      <>
      <div className="topics-container">
        {/* <p>This is topic {props.topicId}</p> */}
        <div className="topic-heading"><h1>{props.heading}</h1>   </div>
        <div className="topic-body">
          <ul className="topics-ul">
          {bodyArray.map((detail, index) => (
                <li className="topics-listItem" key={index}>{detail}</li>
              ))}
          </ul>
        </div>
        { props.example &&  <div className="topic-example" >
          <pre className="topic-pre"> 
            <code className="topic-code">{props.example}</code>          
          </pre>       
        </div>}
      
      </div>
      </>
  )
}


















export default Topics;