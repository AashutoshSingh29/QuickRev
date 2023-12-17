import React from "react";
import Topics from "./Topics";
const SubjectTopics = () => {

    const oops=[
        {
            "topicId":1,
            "heading":"Classes and Objects",
            "body":[
                "The collection of objects that share common properties and behavior is called class.",
                "A class can also be defined as a blueprint from which you can create an individual object.",
                "A class that is derived from another class is called a subclass.",
                "The class from which the subclass is derived is called a superclass.",
                "Class doesn't consume any space.",
                "It is a logical entity."
              ],
            "example":"public class Dog {\n  String breed;\n  int Age;\n  String color;\n  void barking () {}\n}"
        },
        {
            "topicId":2,
            "heading":"Classes and Objects",
            "body":[
                "The collection of objects that share common properties and behavior is called class.",
                "A class can also be defined as a blueprint from which you can create an individual object.",
                "A class that is derived from another class is called a subclass.",
                "The class from which the subclass is derived is called a superclass.",
                "Class doesn't consume any space.",
                "It is a logical entity.",
              ],
            "example":"public class Dog {\n  String breed;\n  int Age;\n  String color;\n  void barking () {}\n}"
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
                    <Topics topicId={element.topicId} heading={element.heading} body={element.body} example={element.example} />
                </div>
            })
        }
        </div>
        </>
    )
}

export default SubjectTopics;