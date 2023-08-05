import { Project } from "@/types"
import { getProjects } from "@/utils"
import Image from "next/image"

const ProjectsPage = () => {
  return (
    <>
      <div
      className="p__container border-b border-brand-secondary "
      >
        <div className="flex flex-col gap-5 ">
          <div className="flex flex-row items-center justify-between flex-grow mb-4">
              <Image 
              src="/images/rmm_logo.png"
              width={100}
              height={100}
              alt="RMM Logo"
              />
              <h3
              className="text-2xl font-bold "
              >Richard Manansala</h3>
          </div>
          <h2
          className="text-3xl font-bold"
          >Projects List</h2>
          <p>Here are some list of nice little side projects I worked on:</p>
        </div>



        
      </div>
      {
        getProjects().map(project => <ProjectCard project={project} />)
      }
    </>
  )
}


interface ProjectCardProps { 
  project: Project
}

const ProjectCard = ({project} : ProjectCardProps) => {

  return (
    <div className="p__container">
      <div className="flex flex-col gap-2 p-3 border border-brand-secondary rounded">
        <h3
        className="text-2xl font-bold text-brand"
        >{project.name}</h3>
        <Image 
        src="/images/rmm_logo.png"
        width={100}
        height={100}
        alt={`${project.name} image `}
        />
        <div className="flex flex-wrap justify-start align-center gap-3 mt-4">
          {
            project.tags.map(tag => (
              <span
              className="px-2 py-1 text-sm text-white bg-brand rounded-2xl"
              >
                {tag}
              </span>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage