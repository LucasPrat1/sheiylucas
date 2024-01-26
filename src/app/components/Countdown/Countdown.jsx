'use client'
import { useState, useEffect } from 'react'

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [esHoy, setEsHoy] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const bodaDate = new Date('04/05/2024 18:00:00');
      const now = new Date();
      const difer = bodaDate.getTime() - now.getTime();

      if (now.getDate() === bodaDate.getDate()
        && now.getMonth() === bodaDate.getMonth()
        && now.getFullYear() === bodaDate.getFullYear()) {
        setEsHoy(true)
      } else {
        const d = Math.floor(difer / (1000 * 60 * 60 * 24));
        setDays(d);
        const h = Math.floor((difer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        setHours(h);
        const m = Math.floor((difer % (1000 * 60 * 60)) / (1000 * 60));
        setMinutes(m);
        const s = Math.floor((difer % (1000 * 60)) / (1000));
        setSeconds(s)
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  return (
    <>
      {esHoy ? <p className={styles.falta}>¡Hoy es el gran día!</p>
        :
        <>
          <p className='title sm:text-5xl xl:text-7xl'>Falta</p>
          <div className='flex justify-around w-full max-w-128 mt-2'>
            <div className='flex flex-col items-center'>
              <span className='font-roboto font-bold leading-none text-sky-900 text-3xl sm:text-5xl xl:text-7xl animate-fade'>{days}</span>
              <span className='font-roboto text-sky-950 text-sm sm:text-base xl:text-lg'>DÍAS</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='font-roboto font-bold leading-none text-sky-900 text-3xl sm:text-5xl xl:text-7xl animate-fade'>{hours}</span>
              <span className='font-roboto text-sky-950 text-sm sm:text-base xl:text-lg'>HORAS</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='font-roboto font-bold leading-none text-sky-900 text-3xl sm:text-5xl xl:text-7xl animate-fade'>{minutes}</span>
              <span className='font-roboto text-sky-950 text-sm sm:text-base xl:text-lg'>MINUTOS</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='font-roboto font-bold leading-none text-sky-900 text-3xl sm:text-5xl xl:text-7xl animate-fade'>{seconds}</span>
              <span className='font-roboto text-sky-950 text-sm sm:text-base xl:text-lg'>SEGUNDOS</span>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default Countdown