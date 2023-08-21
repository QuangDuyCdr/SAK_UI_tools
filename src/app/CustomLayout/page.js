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
<h1 className={styles.headLine} >Custom Layout</h1>
<div className={styles.container}><p>insert mockup and them picker here</p></div>
      </main>
  )
}
