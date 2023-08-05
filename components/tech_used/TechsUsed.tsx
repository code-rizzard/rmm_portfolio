import TechCard from "./TechCard"

import { techUseds } from "@/constants"

const TechsUsed = () => {
  return (
    <div
    className="p__container"
    >
      <h2
        className="text-brand text-4xl font-bold mb-6"
        >
          Tech I Use
      </h2>
      <div 
      className="techs-used-container"
      >
        
      {
          techUseds.map(({name, image} : any) => (
              <TechCard
                  key={name}
                  name={name}
                  image={image}
              />
          ))
      }
      </div>
    </div>

  )
}

export default TechsUsed