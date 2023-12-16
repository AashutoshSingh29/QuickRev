import React from "react";


const Topics = (props) =>{
    return (
        <>
        <div className="topics-container">
        <p>This is topic {props.item}</p>
        <div className="topic-heading"><h1>{props.heading}</h1>   </div>
        <div className="topic-body">{props.body} </div>
        <div className="topic-example" >
        {props.children ? (
          props.children
        ) : (
          <div dangerouslySetInnerHTML={{ __html: props.example }} ></div>
        )}    
         </div>
        
        </div>
        
        </>
    )
}

export default Topics;