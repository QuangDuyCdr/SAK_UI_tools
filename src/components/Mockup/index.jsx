'use client';
import React, { useLayoutEffect, useRef, useEffect } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default function Index() {

    const background = useRef(null);
    const introImage = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top",
                end: "+=500px",
            },
        })

        timeline
            .from(background.current, {clipPath: `inset(15%)`})
            .to(introImage.current, {height: "200px"}, 0)
    }, [])
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1;
  
    useEffect( () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start: 0,
          end: window.innerHeight,
          onUpdate: e => direction = e.direction * -1
        },
        x: "-500px",
      })
      requestAnimationFrame(animate);
    }, [])
  
    const animate = () => {
      if(xPercent < -100){
        xPercent = 0;
      }
      else if(xPercent > 0){
        xPercent = -100;
      }
      gsap.set(firstText.current, {xPercent: xPercent})
      gsap.set(secondText.current, {xPercent: xPercent})
      requestAnimationFrame(animate);
      xPercent += 0.1 * direction;
    }
  
    return (
        <div className={styles.homeHeader}>
            <div className={styles.backgroundImage} ref={background}>
                <video
                    src={'/videos/CodeBackground.mp4'}
                    fill={true}
                    alt="background video"
                    priority={true}
                    autoPlay
                    loop
                    muted
                />
            </div>
            <div className={styles.intro}>
                    <div ref={introImage} data-scroll data-scroll-speed="0.3" className={styles.introImage}>
                        <Image
                            src={'/images/webdesign.jpg'}
                            alt="intro image"
                            fill={true} 
                            priority={true}
                        />
                    </div>
                    <div className={styles.sliderContainer}>
                    <div ref={slider} className={styles.slider}>
          <p ref={firstText}>SAK Design Tools -</p>
          <p ref={secondText}>SAK Design Tools -</p>
        </div>
        </div>
             </div>
        </div>
    )
}
