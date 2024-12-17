import ProfileImage from "../assets/profileImage.webp"

function Profile() {

    return (
        <div className="mt-5 pb-5">
            <div className="">
                <div className="mx-8 flex justify-center">
                    <img  src={ProfileImage}
                    alt="profile not found" 
                    className="w-60 h-60 rounded-full hover:shadow-black shadow-lg hover:shadow-xl animate-[pulse_5s_linear_infinite]"
                    />
                    </div>
                        <div className="flex flex-col justify-center">
                            <h1 className="text-4xl text-center font-bold mt-5">I&apos;m <span className="text-red-700">Adesh Singh</span>,  Full-Stack Developer</h1>
                            <p className="text-center mt-2">I specialize in building modern and responsive websites using modern technologies</p>
                        </div>
                    <div> 
                </div>
            </div>
        </div>
    )
}

export default Profile