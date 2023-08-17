'use client';
import { useEffect } from 'react';
import styles from './page.module.css'
import Header from '../../components/Header';

export default function Home() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
      <main className={styles.main}>
<Header/>
      </main>
  )
}
