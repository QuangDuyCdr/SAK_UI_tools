import React from 'react'
import styles from './style.module.css';
import Link from 'next/link';
import Image from 'next/image';


export default function Index() {

  return (
    <div className={styles.headerContainer} >
       <Link href="/" ><Image className={styles.logoImage} src={'/images/logo.png'} alt='logo' 
       width={35}
       height={35}/>
       </Link>

       <div className={styles.navList}>
        <Link className ={styles.navLink} href="/CustomLayout"><p>Custom Layout</p></Link>
        <Link className ={styles.navLink} href="/ColorPalete"><p>Color Palete</p></Link>
        <Link className ={styles.navLink} href="/Animation"><p>Animation</p></Link>
       </div>
       <div className={styles.contactList}>
        <a href="https://github.com/QuangDuyCdr/SAK_UI_tools"><Image src={'/images/github-logo.svg'} alt='Github logo' width={30} height={30}/></a>
       </div>
    </div>
  )
}
