import Card from "../components/Card.jsx"
import { datafromgithub } from '../data/Data.github.js';




  const names = await datafromgithub();

  console.log(names);

  const Projects = () => {
    return (
    <div>
          <div className="flex">
              {names.map((name) => (
                      <div key={name}>
                        <Card
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
