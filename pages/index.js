import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/logo.svg'
import logoLg from '../public/logo-lg.svg'
import githubIcon from '../public/github-original.svg'
import linkedinIcon from '../public/linkedin-plain.svg'
import codepenIcon from '../public/codepen-plain.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Antony Otero | Front-End Developer</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className='fixed top-0 flex justify-between py-7 px-6 w-full bg-white text-theme-black z-10'>
        <a href='#landing'>
          <Image src={logo} />
        </a>
        <nav>
          <ul className='flex text-sm'>
            <li><a href='#work' className='px-1.5 mr-2 align-middle'>Work</a></li>
            <li><a href='#about' className='px-1.5 mr-2 align-middle'>About</a></li>
            <li><a href='#contact' className='px-1.5 align-middle'>Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className='px-2.5 text-theme-black'>
        <section id='landing' className='h-screen pt-20 bg-white'>
          <div className='py-8'>
            <Image src={logoLg} />
          </div>
          <p className='max-w-[232px] mx-auto mb-8 text-center'>
            <span className='font-bold'>Hi, I’m Antony Otero.</span><br/>
            A Frontend Developer focused on building pixel-perfect, responsive sites with modern web technologies. Interested in crafting secure, performant, and accessible interactive experiences.
          </p>
          <div className='btn-group | flex justify-center mb-16 text-xs'>
            <a href='#work' className='py-3 px-5 mr-5 text-white bg-theme-black border rounded-md border-theme-black'>View Work</a>
            <a href='#' className='py-3 px-5 border rounded-md border-theme-black'>Contact Me</a>
          </div>
          <nav>
            <ul className='flex justify-center text-sm underline'>
              <li><a href='' className='mr-8'>GitHub</a></li>
              <li><a href='' className='mr-8'>LinkedIn</a></li>
              <li><a href=''>Twitter</a></li>
            </ul>
          </nav>
        </section>
        <section id='work' className='h-screen bg-green-500'>

        </section>
        <section id='about' className='h-screen bg-blue-500'>

        </section>
        <section id='contact' className='h-screen bg-red-500'>

        </section>
      </main>

      <main>

      </main>

      {/* <header className='absolute m-[30px]'>
        <Image src={logo} />
      </header>

      <main className='flex items-center justify-center w-[100vw] h-[100vh]'>
        <div className='w-[319.74px] h-[480px] bg-[linear-gradient(336.12deg,#151515_50.04%,#7F7F7F_100%)] rounded-[5px] shadow-[4px_4px_16px_0px_rgb(21,21,21,0.25)]'></div>
        <div className='w-[450px] ml-10'>
          <div className='mb-10'>
            <h1 className='text-2xl'>Antony Otero</h1>
            <p className='text-lg'>Front-End Developer</p>
          </div>
          <p className='mb-10'>
            Focused on creating performant, interactive components in React. Passionate about implementing designs to a pixel-perfect standard in HTML/CSS.
          </p>
          <div className='mb-[60px] text-xs'>
            <button className='py-3 px-5 mr-2.5 text-white bg-[#151515] border rounded-[5px] font-semibold'>View Work</button>
            <a href="mailto:hello@antonyotero.com" className='py-3 px-5 mr-2.5 border border-[#151515] rounded-[5px] font-semibold'>Contact Me</a>
          </div>
          <div className='flex'>
            <a className='w-6 mr-5' href="https://github.com/AntonyOtero">
              <Image src={githubIcon} />
            </a>
            <a className='w-6 mr-5' href="https://www.linkedin.com/in/antonyotero/">
              <Image src={linkedinIcon} />
            </a>
            <a className='w-6' href="https://codepen.io/AntonyOtero">
              <Image src={codepenIcon} />
            </a>
          </div>
        </div>
      </main>

      <footer className='absolute bottom-0 left-1/2 -translate-x-1/2'>
        <p className='mb-10 font-bold animate-pulse'>
          This site is currently under construction - 2022
        </p>
      </footer> */}
    </>
  )
}