'use client';
import React, { useLayoutEffect, useRef, useEffect } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default function Index() {

  
    return (
      <div className='container'>
        <div className={styles.intro}>
          <div className='introText'></div>
          <div className='introIllustrate'></div>
        </div>
      <div className='cardList'>
        <div className='card1'></div>
        <div className='card1'></div>
        <div className='card1'></div>
      </div>
      <div className='BentoContainer'>
        <div className='box1'></div>
        <div className='box1'></div>
        <div className='box1'></div>
        <div className='box1'></div>
      <div className='service'>
        <div className='serviceCol'></div>
        <div className='serviceCol'></div>
        <div className='serviceCol'></div>
      </div>
      </div>
    </div>
    )
}
