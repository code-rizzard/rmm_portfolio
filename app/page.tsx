import Image from 'next/image'

export default function Home() {
  return (
    <main
    >
      <div 
      className='relative bg-black'
      >
        <Image 
        src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
        alt='Cover image'
        height={580}
        width={870}
        priority
        className='min-w-full brightness-[70%]'
        />
        <div className="absolute flex flex-col gap-4 px-6 justify-evenly items-center w-full h-full top-0 left-0 ">
         <div className='text-center flex flex-col gap-6 px-10'>
          <h4
            className='font-bold text-5xl text-center md:text-6xl'
            >
              An experienced 
              <br />
                <p className='text-brand'>
                web developer.
                </p>
            </h4>
            <p 
            className='text-xl'
            >
            Always ready to create and design projects you want.
            </p>
         </div>
          <p className="text-right text-2xl text-brand self-end mr-4 md:text-4xl">
            Richard Manansala
          </p>
        </div>
      </div>
    </main>
  )
}
