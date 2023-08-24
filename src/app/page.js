'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css'
import Intro from '../components/Intro';
import Description from '../components/Description';
import Projects from '../components/Projects';
import Header from '../components/Header';


export default function Home() {

  const [isLoading,setLoading]= useState(true);
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
      <main className={styles.main} >
        <Header />
        <Intro />
        <Description />
        <Projects />
      </main>
  )
}
