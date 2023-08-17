import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './style.module.css';
import Link from 'next/link';
import Image from 'next/image';


export default function Index() {

  return (
    <div className={styles.headerContainer} >
       <Image className={styles.logoImage} src={'/images/logo.png'}    
       alt='logo' 
       width={35}
       height={35}/>
       <div className={styles.navList}>
        <Link className ={styles.navLink} href="/CustomLayout">Custom Layout</Link>
        <Link className ={styles.navLink} href="/ColorPalete">Color Palete</Link>
        <Link className ={styles.navLink} href="/Animation">Animation</Link>
       </div>
       <div className={styles.contactList}>
        <a href="https://github.com/QuangDuyCdr"><Image src={'/images/github-logo.svg'} alt='Github logo' width={30} height={30}/></a>
       </div>
    </div>
  )
}

