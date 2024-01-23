import Image from 'next/image'
import galeria1 from '../../public/img/origin.jpg'
import galeria2 from '../../public/img/fondos-02.jpg'
import galeria3 from '../../public/img/fondos-03.jpg'
import galeria4 from '../../public/img/fondos-04.jpg'
import anillos from '../../public/img/icono-anillos.svg'
import fiesta from '../../public/img/icono-fiesta.svg'
import Countdown from './components/Countdown/Countdown'
import Link from 'next/link'
import { Button, Carousel } from 'flowbite-react'




export default function Home() {
  return (
    <main>
      <header>
        <div className='containerPortada'>
          {/* <Image className='w-full min-w-256 h-screen' src={portada} alt="imagen de portada" priority /> */}
          <h1 className='hidden'>Shei y Lucas</h1>
          <h2 className='hidden'>¡Nos Casamos!</h2>
        </div>
      </header>

      <section id='countdown' className='containerSection p-6'>
        <Countdown />
      </section>

      <section id='cards' className='w-full p-6 grid grid-cols-1 sm:grid-cols-2 gap-6'>

        <div id='card' className='flex flex-col items-center bg-slate-200 rounded shadow-lg p-3'>
          <Image className='' src={anillos} alt="icono anillos" />
          <h4 className='title sm:text-5xl xl:text-7xl'>Ceremonia</h4>
          <p className='text-center text-sm sm:text-base xl:text-xl p-2'>
            <strong>05 de Abril a las  19:00 hs</strong>
            <br /> Parroquia Sagrado Corazon de Jesús
            <br /> Agrelo y Puccio, Rosario
          </p>
          <Link href='https://maps.app.goo.gl/5i5m8fM4NZaBnrk77' prefetch={false} target='blank'>
            <Button color="gray" pill className='block lg:hidden mt-3'>
              Como llegar
            </Button>
          </Link>
          <iframe className='hidden lg:block m-3 border-0' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d996.0022126920632!2d-60.69176489260913!3d-32.894499322877245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b6539df40c6e09%3A0x89006750506822f8!2sParroquia%20Sagrado%20Coraz%C3%B3n%20de%20Jes%C3%BAs!5e0!3m2!1ses-419!2sar!4v1705896921999!5m2!1ses-419!2sar" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div id='card' className='flex flex-col items-center bg-slate-200 rounded shadow-lg p-3'>
          <Image className='' src={fiesta} alt="icono fiesta" />
          <h4 className='title sm:text-5xl xl:text-7xl'>Fiesta</h4>
          <p className='text-center text-sm sm:text-base xl:text-xl p-2'>
            <strong>05 de Abril a las  21:00 hs</strong>
            <br /> Salon Campos de Ibarlucea
            <br /> 25 de Mayo (Ruta 34s) 5306, Ibarlucea
          </p>
          <Link href='https://maps.app.goo.gl/5i5m8fM4NZaBnrk77' prefetch={false} target='blank'>
            <Button color="gray" pill className='block lg:hidden mt-3'>
              Como llegar
            </Button>
          </Link>
          <iframe className='hidden lg:block m-3 border-0' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7971.807768906182!2d-60.76614590963856!3d-32.85233926286167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b651e73eac728b%3A0x96d38fa9f42ccf70!2sCampos%20de%20Ibarlucea.!5e0!3m2!1ses-419!2sar!4v1705896727917!5m2!1ses-419!2sar" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </section>
      <section id='carrusel' className='m-6'>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <Image className='w-full'src={galeria1} alt="galeria" />
            <Image className='w-full'src={galeria2} alt="..." />
            <Image className='w-full'src={galeria3} alt="..." />
            <Image className='w-full'src={galeria4} alt="..." />
          </Carousel>
        </div>
      </section>
    </main>
  )
}





