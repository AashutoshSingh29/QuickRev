import React from "react";


const IntroCard= ()=>{
return (
    <>
    <div className="intro">
    <div className="intro-card" >
            
            <div className="intro-card-image">
                <img src='/laptop.jpg' className="intro-card-img" alt="..."/>
            </div>
            <div className="intro-profile-image">
                    <img src="/developer-photo.jpg" alt="" />
            </div>
            <div>
                    <p className="intro-card-title">Aashutosh Singh Gautam</p>
                    <p className="intro-card-text">Associate Software Engineer</p>
                    <button className='btn' > Read More</button>
            </div>
        
    </div>
    <div className="intro-card" >
            
            <div className="intro-card-image">
                <img src='/laptop.jpg' className="intro-card-img" alt="..."/>
            </div>
            <div className="intro-profile-image">
                    <img src="" alt="" />
            </div>
            <div>
                    <p className="intro-card-title">Designer</p>
                    <p className="intro-card-text">Associate Software Engineer</p>
                    <button className='btn' > Read More</button>
            </div>
        
    </div>
    </div>
    </>
)
}

export default IntroCard;