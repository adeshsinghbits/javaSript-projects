import ProfieImage1 from "../assets/ProfileImage.webp"
import Project from "../assets/Project.jpg"
import SmallProject from "../assets/Small-Projects.png"

import { useEffect, useState } from "react";

function Profile() {
    
    const images = [
        ProfieImage1, Project, SmallProject
        
    ];
    
    // State to track the current image index
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
    // Function to update the image index
    const changeImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    
    // Set interval to change the image every 3 seconds
    const interval = setInterval(changeImage, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
    }, [images.length]);;
    return (
        <div className=" mt-5 pb-5">
            <div className="text-center m-3">
                <h2 className="text-3xl font-medium text-gray-400">Who Am I ?</h2>
            </div>
            <div className="flex flex-wrap justify-center">
                <div className="mx-8 ">
                    <img  src={images[currentIndex]}
                    alt="profile not found" 
                    className="w-64 h-96 hover:shadow-black shadow-black shadow-lg hover:shadow-xl animate-[pulse_5s_linear_infinite]"
                    />
                </div>
                <div>
                    <div className="p-3">
                        <h3 className="text-xl font-medium animate-pulse text-blue-500">A BIT ABOUT ME</h3>
                        <p className="w-96 mt-2 text-justify">I am a passionate and detail-oriented Full-Stack Developer with expertise in designing and building scalable, user-friendly web applications. With a strong foundation in both front-end and back-end development, I excel at creating seamless digital experiences that bridge aesthetics with robust functionality.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile