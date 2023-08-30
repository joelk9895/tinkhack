"use client"
import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import './text.css';

const phrase = "TinkHack is an exhilarating hackathon uniting imaginative minds and coding enthusiasts to delve into the world of Generative AI. Showcase skills, unleash creativity, and innovate using state-of-the-art AI. Kerala's inaugural AI hackathon code, innovate, and make your mark on Tinkhack's neural network!";

export default function TextSplit() {
  const refs = useRef<Array<HTMLSpanElement | null>>([]);
  const body = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
        toggleActions: "play none none reverse"
    });
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current!,
        scrub: true,
        start: `500vh top`,
        end: window.innerWidth<1000?`1000vh 20%`:`40% bottom`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1
    });
  };


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
        toggleActions: "play none none reverse"
    });
    createAnimation2();
  }, []);

  const createAnimation2 = () => {
    gsap.to(".mainBody", {
      scrollTrigger: {
        trigger: ".third",
        scrub: true,
        start: `30% bottom`,
        end: `40% center`,
      },
      background: "linear-gradient(to top, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39))",
      ease: "none",
      stagger: 0.1
    });
  };




  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
        toggleActions: "play none none reverse"
    });
    createAnimation3();
    createAnimation4();
  }, []);

  const createAnimation3 = () => {
    gsap.to(".amt", {
      scrollTrigger: {
        trigger: ".third"!,
        scrub: true,
        pin: true,
        start: `20% top`,
        end: `10% top`,
      },
        opacity: 0,
        ease: "power2.out",
    });
  };

  const createAnimation4 = () => {
    gsap.to(".mind", {
      scrollTrigger: {
        trigger: ".third",
        scrub: true,
        start: "20% top",
        end: "bottom center",
      },
      opacity: 1,
      y: 150, // Change this property to the one you want to animate
    });
  };
  const splitWords = (phrase: string) => {
    const body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word: string) => {
    const letters: JSX.Element[] = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            if (el) refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <div ref={body} className='body'>
      {splitWords(phrase)}
    </div>
  );
}
