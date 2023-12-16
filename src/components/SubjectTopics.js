import React from "react";
import Topics from "./Topics";
const SubjectTopics = () => {

    const oops=[
        {
            "topicId":1,
            "heading":"Classes and Objects",
            "body":" The collection of objects that share common properties and behavior is called class. A class can also be defined as a blueprint from which you can create an individual object. A class that is derived from another class is called a subclass. The class from which the subclass is derived is called a superclass. Class doesn't consume any space. It is a logical entity.",
            "example":`<pre style="background-color: #d1cfcf; border: 1px solid #999; display:block;padding: 5px; ">

            <code style="color:rgb(11, 11, 127) ;">
            public class Dog <span style="color: purple;"> // Class created</span>
                {
                    String breed;
                    int Age;
                    String color;
                        void barking () {} <span style="color: purple;"> // method created</span>
                }</code>
            </pre>`
        }
    ]
    
// const [topics,setTopics] = useState(oops);

// let something= () => {
//     setTopics(oops)
//  }
    return (
        <>

     
        <div className="subjects-container">

        {
            oops.map( (element)=>{
                return <div className="comp" key={element.topicId}>
                    <Topics item={1} heading={element.heading} body={element.body} example={element.example} />
                </div>
            })
        }

        {/* <Topics item={1} heading={something.heading}></Topics>
        <Topics item={2}></Topics>
        <Topics item={3}></Topics>
        <Topics item={4}></Topics> */}
        </div>
        </>
    )
}

export default SubjectTopics;