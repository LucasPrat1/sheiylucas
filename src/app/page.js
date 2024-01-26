import Link from 'next/link'
import Image from 'next/image'

import Countdown from '@/app/components/Countdown/Countdown'
import Gift from '@/app/components/Gift/Gift'
import { Button, Carousel } from 'flowbite-react'

import anillos from '../../public/img/icono-anillos.svg'
import fiesta from '../../public/img/icono-fiesta.svg'
import calendario from '../../public/img/icono-calendario.svg'
import regalo from '../../public/img/icono-regalo.svg'

import dresscode from '../../public/img/icono-dresscode.svg'
import canciones from '../../public/img/icono-canciones.svg'
import instagram from '../../public/img/icono-instagram.svg'

import ceremonia from '../../public/img/icono-ceremonia.svg'


import galeria1 from '../../public/img/origin.jpg'
// import galeria2 from '../../public/img/fondos-02.jpg'
// import galeria3 from '../../public/img/fondos-03.jpg'
// import galeria4 from '../../public/img/fondos-04.jpg'



export default function Home() {
  return (
    <main>
      <header>
        <div className='containerPortada animate-fade' >
          {/* <Image className='w-full min-w-256 h-screen' src={portada} alt="imagen de portada" priority /> */}
          <h1 className='hidden'>Shei y Lucas</h1>
          <h2 className='hidden'>¡Nos Casamos!</h2>
        </div>
      </header>

      <section id='countdown' className='containerSection p-4 lg:p-8 animate-fade-up animate-view'>
        <Countdown />
      </section>

      <section id='cards' className='w-full py-4 px-6 lg:px-16 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-16'>

        <div id='card' className='flex flex-col items-center bg-slate-200 rounded-xl ring-2 ring-slate-300 shadow-lg p-3 animate-fade-right animate-view'>
          <Image src={ceremonia} alt="icono anillos" className='transition-all' />
          <h3 className='title sm:text-5xl xl:text-7xl'>Ceremonia</h3>
          <p className='text-center text-sm sm:text-base xl:text-xl p-2'>
            <strong>05 de Abril a las  19:00 hs</strong>
            <br /> Parroquia Sagrado Corazon de Jesús
            <br /> Agrelo y Puccio, Rosario
          </p>
          <Link href='https://maps.app.goo.gl/4q6VByKAfMqg7oe66' prefetch={false} target='blank'>
            <Button color="gray" pill className='block xl:hidden mt-3'>
              Como llegar
            </Button>
          </Link>
          <iframe className='hidden xl:block m-3 border-0' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d996.0022126920632!2d-60.69176489260913!3d-32.894499322877245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b6539df40c6e09%3A0x89006750506822f8!2sParroquia%20Sagrado%20Coraz%C3%B3n%20de%20Jes%C3%BAs!5e0!3m2!1ses-419!2sar!4v1705896921999!5m2!1ses-419!2sar" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div id='card' className='flex flex-col items-center bg-slate-200 rounded-xl ring-2 ring-slate-300 shadow-lg p-3 animate-fade-left animate-view'>
          <Image src={fiesta} alt="icono fiesta" />
          <h3 className='title sm:text-5xl xl:text-7xl'>Fiesta</h3>
          <p className='text-center text-sm sm:text-base xl:text-xl p-2'>
            <strong>05 de Abril a las  21:00 hs</strong>
            <br /> Salon Campos de Ibarlucea
            <br /> 25 de Mayo (Ruta 34s) 5306, Ibarlucea
          </p>
          <Link href='https://maps.app.goo.gl/5i5m8fM4NZaBnrk77' prefetch={false} target='blank'>
            <Button color="gray" pill className='block xl:hidden mt-3'>
              Como llegar
            </Button>
          </Link>
          <iframe className='hidden xl:block m-3 border-0' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7971.807768906182!2d-60.76614590963856!3d-32.85233926286167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b651e73eac728b%3A0x96d38fa9f42ccf70!2sCampos%20de%20Ibarlucea.!5e0!3m2!1ses-419!2sar!4v1705896727917!5m2!1ses-419!2sar" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </section>

      <section id='carrusel' className='sm:mx-6 lg:mx-16 sm:my-6  animate-fade animate-view'>
        <div className="h-56 sm:h-64 lg:h-80 xl:h-96 2xl:h-128 bg-slate-900 sm:rounded-xl">
          <Carousel>
            <Image className='' src={galeria1} alt="galeria" />
            {/* <Image className='w-full' src={galeria2} alt="galeria" />
            <Image className='w-full' src={galeria3} alt="galeria" />
            <Image className='w-full' src={galeria4} alt="galeria" /> */}
          </Carousel>
        </div>
      </section>

      <section id='asistencia' className='containerSection px-6 pb-6 bg-slate-300 shadow-inner  animate-fade animate-view'>
        <Image src={calendario} alt="icono calendario" />
        <h3 className='title sm:text-5xl xl:text-7xl'>Confirmanos tu asistencia</h3>
        <p className='text-center text-base sm:text-xl xl:text-2xl p-2 mb-2' >
          Queremos celebrar junto a vos este momento tan especial para nosotros...
        </p>
        <Link href='https://forms.gle/ksuf719Jq9Zj7ifb7' prefetch={false} target='blank'>
          <Button color="dark" size='xl' pill className='w-36 md:w-52 2lg:w-64'>
            Confirmar
          </Button>
        </Link>
      </section>


      <section id='tips' className='containerSection p-6 bg-slate-300  animate-fade animate-view'>
        <h3 className='title sm:text-5xl xl:text-7xl'>¡Fiesta!</h3>
        <p className='text-center text-base sm:text-xl xl:text-2xl p-2' >
          Hagamos juntos una fiesta inolvidable. Te dejamos algunos tips
        </p>

        <div className='w-full p-6 grid grid-cols-1 sm:grid-cols-3 gap-6' >

          <div className='flex flex-col items-center justify-between bg-white rounded-3xl shadow-2xl p-3 animate-fade-right animate-view'>
            <Image src={dresscode} alt="icono DressCode" className='w-24 sm:w-36' />
            <h3 className='title sm:text-3xl xl:text-5xl'>Dress Code</h3>
            <p className='text-center text-sm sm:text-base xl:text-xl p-2 font-bold'>
              Formal
            </p>
          </div>

          <div className='flex flex-col items-center justify-between bg-white rounded-3xl shadow-2xl p-3 animate-fade-up animate-view'>
            <Image src={instagram} alt="icono instagram" className='w-24 sm:w-36' />
            <h3 className='title sm:text-3xl xl:text-5xl'>Instagram</h3>
            <p className='text-center text-sm sm:text-base xl:text-xl p-2 font-bold'>
              si publicás, etiquetanos!
            </p>
            <Link href='https://www.instagram.com/boda.sheiylucas/' prefetch={false} target='blank'
              className='text-blue-900 hover:text-blue-600 hover:font-bold text-center text-sm sm:text-base xl:text-xl'
            >
              @boda.sheiylucas
            </Link>
          </div>

          <div className='flex flex-col items-center justify-between bg-white rounded-3xl shadow-2xl p-3 animate-fade-left animate-view'>
            <Image src={canciones} alt="icono canciones" className='w-24 sm:w-36' />
            <h3 className='title sm:text-3xl xl:text-5xl'>Música</h3>
            <p className='text-center text-sm sm:text-base xl:text-xl p-2 font-bold '>
              Que canción no puede faltar?
            </p>
            <Link href='https://open.spotify.com/playlist/4oP2us5G2HtOasyEMBuWCV?si=458b079cbf904183' prefetch={false} target='blank'
              className='text-blue-900 hover:text-blue-600 hover:font-bold text-center text-sm sm:text-base xl:text-xl'
            >
              agregala a spotify!
            </Link>
          </div>

        </div>
      </section>

      <section id='misa' className='containerSection px-6 pb-10 shadow-inner animate-fade animate-view'>
        <Image src={anillos} alt="icono calendario" />
        <p className='text-center text-base sm:text-xl xl:text-2xl ' >
          Proximamente acá podrás encontrar las canciones y lecturas de la ceremonia...
        </p>
        {/* <Link href='https://forms.gle/ksuf719Jq9Zj7ifb7' prefetch={false} target='blank'>
          <Button color="dark" size='xl' pill className='w-36 md:w-52 2lg:w-64'>
            Confirmar
          </Button>
        </Link> */}
      </section>

      <section id='gift' className='containerSection px-6 pb-6 bg-slate-900 text-slate-200 animate-fade animate-view'>
        <Image src={regalo} alt='icono regalo' className=''></Image>
        <p className='text-center text-base sm:text-xl xl:text-2xl font-medium'>
          ¡El mejor regalo es tu presencia!
        </p>
        <p className='text-center text-sm sm:text-base xl:text-xl font-light pt-2'>
          Pero si deseás hacernos otro regalo, podes ayudarnos con nuestra fiesta...
        </p>
        <Gift />
      </section>


    </main>
  )
}

