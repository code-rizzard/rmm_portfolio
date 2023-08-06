"use client"

import {motion, } from 'framer-motion'
import CodingExperience from '@/components/CodingExperience'
import TechsUsed from '@/components/tech_used/TechsUsed'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  

  return (
    <main
    >
      <div 
      className='relative bg-black border-b border-brand-secondary'
      >
        <Image 
        src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
        alt='Cover image'
        height={580}
        width={870}
        priority
        className='min-w-full brightness-[70%]'
        />
        <div
          className="absolute flex flex-col gap-4 max-sm:gap-0 justify-evenly items-center w-full h-full top-0 left-0 p__container">
         <motion.div 
        initial={{ opacity: 0.2, y:-100 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true, }}
        transition={{ duration: 0.7, delay: 0, }}
         
         className='text-center flex flex-col gap-6 max-md:gap-2 p__container'>
          <h4
            className='font-bold text-5xl max-xs:text-3xl text-center md:text-6xl flex flex-col gap-2'
            >
              An aspiring
                <p className='text-brand'>
                web developer.
                </p>
            </h4>
            <p 
            className='text-xl max-xs:text-md'
            >
            Always ready to create and design projects you want.
            </p>
         </motion.div>
          <motion.p
          initial={{ opacity: 0, translateX:"100%" }}
          animate={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true, }}
          transition={{ duration: 0.7, delay: 0.25, }}
          className="text-right text-2xl text-brand self-end md:text-4xl max-xs:text-lg">
            Richard Manansala
          </motion.p>
        </div>
      </div>
      <TechsUsed
      
      />
      <CodingExperience />
      <div className="p__container">
        <motion.div 
        initial={{ opacity: 0.2, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0, }}
        
        className="border border-brand-secondary rounded-md p-3 gap-3 flex flex-col">
          <h3
          className='text-3xl font-bold '
          >My Projects</h3>
          <p>Projects that I have created using web technologies, flutter, game engines and more.</p>
          <Link 
          href="/projects"
          className='bg-brand text-white py-2 rounded-md self-end text-bold px-6'
          >View</Link>
        </motion.div>
      </div>
    </main>
  )
}
