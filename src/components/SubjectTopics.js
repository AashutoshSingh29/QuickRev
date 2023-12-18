import React, { useEffect, useState } from "react";
import Topics from "./Topics";

const SubjectTopics = () => {

const [topics,setTopics] = useState([]);

useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the data from SubjectTopics.json
        const response = await fetch('/oopsTopics.json');

        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        // Parse the JSON data
        const data = await response.json();

        // Update the state with the fetched data
        setTopics(data.oops);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); 

    return (
        <>
        <div className="subjects-container">
        {
            topics.map( (element)=>{
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