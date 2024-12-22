import Card from "../components/Card.jsx"
import { datafromgithub } from '../data/Data.github.js';
import { Img } from "../dataArray"

  const names = await datafromgithub();

  console.log(names);

  const Projects = () => {

    return (
    <div>
          <div className="flex pb-5 bg-black flex-wrap justify-center">
              {names.map((name) => (
                      <div key={name}>
                        <Card
                              projecImage={Img[name]}
                              projectName={name} 
                              altname={name} 
                          />
                      </div>  
                    )
                  )}
              </div>
    </div>
    )
}

export default Projects
