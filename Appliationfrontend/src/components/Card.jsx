import alternateImg from "../assets/alternate.png"

function Card({ projectName, altname, projecImage }) {
    return (
        <div className="m-3">
            <div className="w-64 h-64 rounded-xl">
                <img
                    src={projecImage || alternateImg}
                    alt={altname}
                    className="rounded-t-xl h-52 w-64 object-cover"
                />
            <div className="glass py-4 px-5 relative -top-[3.4rem] bg-slate-300  rounded-b-xl z-10">
                <h1 className="font-bold font-sans text-xl">{projectName}</h1>
                <button className="px-2 py-1 my-2 bg-red-700 font-medium text-md rounded-sm hover:bg-transparent border-2 border-transparent hover:border-black" ><a href="https://github.com/adeshsinghbits/javaSript-projects" target="blank">View Project</a></button>
            </div>
            </div>
        </div>
    )
    }

    export default Card