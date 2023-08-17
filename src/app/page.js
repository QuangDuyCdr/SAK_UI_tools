'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css'
import Intro from '../components/Intro';
import Description from '../components/Description';
import Projects from '../components/Projects';
import Header from '../components/Header';
import Preloader from '../components/Preloader'

export default function Home() {

  const [isLoading,setLoading]= useState(true);
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();


        setTimeout(()=>{setLoading(false);document.body.style.cursor ='default';},2000)
      }
    )()
  }, [])

  return (
      <main className={styles.main} >
        <Header />
        { isLoading && <Preloader/> }
        <Intro />
        <Description />
        <Projects />
      </main>
  )
}
