'use client'
import { useState, useEffect } from 'react'
import styles from './countdown.module.css'

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
          <p className={styles.falta}>Falta</p>
          <div className={styles.reloj}>
            <div className={styles.colReloj}>
              <span className={styles.numReloj}>{days}</span>
              <span className={styles.textReloj}>Días</span>
            </div>
            <div className={styles.colReloj}>
              <span className={styles.numReloj}>{hours}</span>
              <span className={styles.textReloj}>Horas</span>
            </div>
            <div className={styles.colReloj}>
              <span className={styles.numReloj}>{minutes}</span>
              <span className={styles.textReloj}>Minutos</span>
            </div>
            <div className={styles.colReloj}>
              <span className={styles.numReloj}>{seconds}</span>
              <span className={styles.textReloj}>Segundos</span>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default Countdown