import { Project } from "@/types"
import { getProjects } from "@/utils"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"


export const metadata : Metadata = {
  title: "RMM - Projects",
  description: "List of projects I have worked on. This is not limited to only web projects but also some games, android, and other platforms I have done."
}

const ProjectsPage = async () => {
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
        (await getProjects()).map(project => <ProjectCard project={project} />)
      }
    </>
  )
}


interface ProjectCardProps { 
  project: Project
}

const ProjectCard = ({project} : ProjectCardProps) => {

  return (
    <div
    className="p__container">
      <a
      href={project.url}
      target="_blank"
       className="flex flex-col gap-2 p-3 border border-brand-secondary rounded relative group"
       
       >
        <h3
        className="text-2xl font-bold text-brand"
        >{project.name}</h3>
        <Image 
        src={project.image}
        width={600}
        height={400}
        alt={`${project.name} image `}
        className="object-fit w-full h-full"
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
        <div className="absolute top-0 left-0 w-full h-full flex p-3 bg-surface flex-col transition-all group-focus-within:opacity-100 group-hover:opacity-100 opacity-0 duration-200 ease-in-out scale-90 group-focus-within:scale-100 group-hover:scale-100 ">
          <p
          className="text-md flex-grow"
          >{project.description}</p>
          <span
          className="justify-self-end bg-brand text-white px-3 py-2 text-center rounded-md"
          >Visit</span>
        </div>
      </a>
    </div>
  )
}

export default ProjectsPage