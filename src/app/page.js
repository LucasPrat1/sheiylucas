import Link from 'next/link'
import Image from 'next/image'
import Countdown from '@/app/components/Countdown/Countdown'
import Gift from '@/app/components/Gift/Gift'
import { Button, Carousel } from 'flowbite-react'

import ceremonia from '@/assets/icons/icono-ceremonia.svg'
import fiesta from '@/assets/icons/icono-fiesta.svg'
// import calendario from '@/assets/icons/icono-calendario.svg'
import anillos from '@/assets/icons/icono-anillos.svg'
import regalo from '@/assets/icons/icono-regalo.svg'
import dresscode from '@/assets/icons/icono-dresscode.svg'
import canciones from '@/assets/icons/icono-canciones.svg'
import instagram from '@/assets/icons/icono-instagram.svg'

import logo from '@/assets/img/logo.webp'
import galeria1 from '@/assets/img/galeria1.webp'
import galeria2 from '@/assets/img/galeria2.webp'
import galeria3 from '@/assets/img/galeria3.webp'
import galeria4 from '@/assets/img/galeria4.webp'
import galeria5 from '@/assets/img/galeria5.webp'

export default function Home() {
  return (
    <main>
      <header>
        <div className='containerPortada animate-fade-down delay-200' >
          <h1 className='hidden'>Shei y Lucas</h1>
          <h2 className='hidden'>¡Nos Casamos!</h2>
        </div>
      </header>

      <section id='countdown' className='containerSection p-4 lg:p-8 animate-fade-up animate-view'>
        <Countdown />
      </section>

      <section id='cards' className='w-full pt-2 pb-6 sm:pb-10 px-6 lg:px-16 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-16'>

        <div id='ceremonia' className='flex flex-col items-center rounded-xl ring-2 ring-slate-600 shadow-xl p-3 animate-fade-right animate-view'>
          <Image src={ceremonia} alt="icono anillos" className='transition-all' />
          <h3 className='title text-3xl sm:text-5xl xl:text-7xl'>Ceremonia</h3>
          <p className='text-center text-sm sm:text-base xl:text-xl p-2 font-bold'>
            05 de Abril a las <strong>19:00 hs</strong>
          </p>
          <p className='text-center text-sm sm:text-base xl:text-xl italic font-medium'>
            Parroquia Sagrado Corazón de Jesús
          </p>
          <p className='text-center text-sm sm:text-base xl:text-xl'>
            Agrelo y Puccio, Rosario
          </p>
          <Link href='https://maps.app.goo.gl/4q6VByKAfMqg7oe66' prefetch={false} target='blank'>
            <Button color="gray" pill className='block xl:hidden mt-3 shadow-md'>
              Como llegar
            </Button>
          </Link>
          <iframe className='hidden xl:block m-3 border-0' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d996.0022126920632!2d-60.69176489260913!3d-32.894499322877245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b6539df40c6e09%3A0x89006750506822f8!2sParroquia%20Sagrado%20Coraz%C3%B3n%20de%20Jes%C3%BAs!5e0!3m2!1ses-419!2sar!4v1705896921999!5m2!1ses-419!2sar" width="400" height="300" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div id='fiesta' className='flex flex-col items-center rounded-xl ring-2 ring-slate-600 shadow-xl p-3 animate-fade-left animate-view'>
          <Image src={fiesta} alt="icono fiesta" />
          <h3 className='title text-3xl sm:text-5xl xl:text-7xl'>Fiesta</h3>
          <p className='text-center text-sm sm:text-base xl:text-xl p-2 font-bold'>
            05 de Abril a las  20:30 hs
          </p>
          <p className='text-center text-sm sm:text-base xl:text-xl italic font-medium'>
            Salón Campos de Ibarlucea
          </p>
          <p className='text-center text-sm sm:text-base xl:text-xl'>
            25 de Mayo (Ruta 34s) 5306, Ibarlucea
          </p>
          <Link href='https://maps.app.goo.gl/5i5m8fM4NZaBnrk77' prefetch={false} target='blank'>
            <Button color='gray' pill className='block xl:hidden mt-3 shadow-md'>
              Como llegar
            </Button>
          </Link>
          <iframe className='hidden xl:block m-3 border-0' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7971.807768906182!2d-60.76614590963856!3d-32.85233926286167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b651e73eac728b%3A0x96d38fa9f42ccf70!2sCampos%20de%20Ibarlucea.!5e0!3m2!1ses-419!2sar!4v1705896727917!5m2!1ses-419!2sar" width="400" height="300" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </section>

      <section id='misa' className='containerSection px-6 pb-6 bg-slate-900 text-slate-200 animate-fade animate-view'>
        <Image src={anillos} alt="icono calendario" />
        <p className='text-center italic font-bold text-base sm:text-xl xl:text-2xl ' >
          <q>El que canta ora dos veces</q>
        </p>
        <p className='text-center text-sm sm:text-lg xl:text-xl ' >
          San Agustin
        </p>
        <Link href='https://drive.google.com/file/d/1-7L7LtiFEivnLYBd2zefnbIyCNk4P-YU/view?usp=sharing' prefetch={false} target='blank'>
          <Button color="gray" size='xl' pill className='mt-6 w-36 md:w-52 2lg:w-64'>
            Cancionero
          </Button>
        </Link>
      </section>

      <section id='carrusel' className='py-5 lg:py-7 2xl:py-9 px-1 animate-fade animate-view bg-neutral-900'>
        <div className="grid grid-cols-1 h-44 xs:h-56 sm:h-64 sm:grid-cols-7 md:h-72 lg:h-125 xl:h-128 xl:grid-cols-5 2xl:grid-cols-7">
          <Carousel pauseOnHover className='sm:col-start-2 sm:col-span-5 xl:col-start-2 xl:col-span-3 2xl:col-start-3 2xl:col-span-3'>
            <Image src={galeria1} alt="galeria1" />
            <Image src={galeria2} alt="galeria2" />
            <Image src={galeria3} alt="galeria3" />
            <Image src={galeria4} alt="galeria4" />
            <Image src={galeria5} alt="galeria5" />
          </Carousel>
        </div>
      </section>

      {/* <section id='asistencia' className='containerSection px-6 pb-6 bg-slate-300 shadow-inner  animate-fade animate-view'>
        <Image src={calendario} alt="icono calendario" />
        <h3 className='title text-3xl sm:text-5xl xl:text-7xl'>Confirmanos tu asistencia</h3>
        <p className='text-center text-base sm:text-xl xl:text-2xl p-2 mb-2' >
          Queremos celebrar junto a vos este momento tan especial para nosotros...
        </p>
        <Link href='https://forms.gle/ksuf719Jq9Zj7ifb7' prefetch={false} target='blank'>
          <Button color="dark" size='xl' pill className='w-36 md:w-52 2lg:w-64'>
            Confirmar
          </Button>
        </Link>
      </section> */}

      <section id='tips' className='containerSection p-6 bg-slate-300  animate-fade animate-view'>
        <h3 className='title text-3xl sm:text-5xl xl:text-7xl'>¡Fiesta!</h3>
        <p className='text-center text-base sm:text-xl xl:text-2xl p-2' >
          Hagamos juntos una fiesta inolvidable. Te dejamos algunos tips
        </p>

        <div className='w-full p-6 grid grid-cols-1 sm:grid-cols-3 gap-6' >

          <div className='flex flex-col items-center justify-between bg-white rounded-3xl shadow-2xl p-3 animate-fade-right animate-view hover:shadow-inner transition-shadow duration-300'>
            <Image src={dresscode} alt="icono DressCode" className='w-24 sm:w-36' />
            <h3 className='title text-xl sm:text-3xl xl:text-5xl'>Dress Code</h3>
            <p className='text-center text-base sm:text-lg xl:text-2xl p-2 font-bold text-sky-600'>
              Formal
            </p>
          </div>

          <div className='flex flex-col items-center justify-between bg-white rounded-3xl shadow-2xl p-3 animate-fade-up animate-view hover:shadow-inner transition-shadow duration-300'>
            <Image src={instagram} alt="icono instagram" className='w-24 sm:w-36' />
            <h3 className='title text-xl sm:text-3xl xl:text-5xl'>Instagram</h3>
            <p className='text-center text-sm sm:text-base xl:text-xl p-2'>
              ¡Si publicás, etiquetanos!
            </p>
            <Link href='https://www.instagram.com/boda.sheiylucas/' prefetch={false} target='blank'
              className='text-sky-600 hover:text-sky-800 hover:tracking-wide font-bold transition-all text-center text-base sm:text-lg xl:text-2xl'
            >
              @boda.sheiylucas
            </Link>
          </div>

          <div className='flex flex-col items-center justify-between bg-white rounded-3xl shadow-2xl p-3 animate-fade-left animate-view hover:shadow-inner transition-shadow duration-300'>
            <Image src={canciones} alt="icono canciones" className='w-24 sm:w-36' />
            <h3 className='title text-xl sm:text-3xl xl:text-5xl'>Música</h3>
            <p className='text-center text-sm sm:text-base xl:text-xl p-2'>
              ¿Que canción no puede faltar?
            </p>
            <Link href='https://open.spotify.com/playlist/4oP2us5G2HtOasyEMBuWCV?si=458b079cbf904183' prefetch={false} target='blank'
              className='text-sky-600 hover:text-sky-800 hover:tracking-wide font-bold transition-all text-center text-base sm:text-lg xl:text-2xl'
            >
              Agregala a spotify!
            </Link>
          </div>

        </div>
      </section>

      <section id='gift' className='containerSection px-6 pb-6 bg-slate-900 text-slate-200 animate-fade animate-view'>
        <Image src={regalo} alt='icono regalo' className=''></Image>
        <p className='text-center text-base sm:text-xl xl:text-2xl font-medium'>
          ¡El mejor regalo es tu presencia!
        </p>
        <p className='text-center text-sm sm:text-base xl:text-xl font-light pt-2'>
          Pero si deseás hacernos otro regalo, podés ayudarnos con nuestra fiesta...
        </p>
        <Gift />
      </section>

      <footer id='gracias' className='containerSection p-6 bg-neutral-600 text-slate-200'>
        <p className='text-center text-base sm:text-xl xl:text-2xl font-medium py-6'>
          ¡Gracias por acompañarnos en este momento tan importante!
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 w-full max-w-256 items-center justify-items-center gap-6'>
          <Image src={logo} alt='icono logo' width={200} height={200} />
          <ul className='text-center sm:text-left space-y-2 w-44 '>
            <li className='hover:text-black hover:font-bold transition-all'>
              <Link href={'#ceremonia'}>Ceremonia</Link>
            </li>
            <li className='hover:text-black hover:font-bold transition-all'>
              <Link href={'#fiesta'}>Fiesta</Link>
            </li>
            <li className='hover:text-black hover:font-bold transition-all'>
              <Link href={'#asistencia'}>Confirmar Asistencia</Link>
            </li>
            <li className='hover:text-black hover:font-bold transition-all'>
              <Link href={'#tips'}>Tips</Link>
            </li>
            <li className='hover:text-black hover:font-bold transition-all'>
              <Link href={'#gift'}>Regalo</Link>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  )
}

