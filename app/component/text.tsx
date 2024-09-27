"use client";
import React, { useRef, useEffect, use } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import "./text.css";

const phrase =
  "PyCon Mumbai is a premier Python conference in Mumbai, bringing together Python enthusiasts, developers, data scientists, and industry experts from across the region. This event serves as a vibrant platform for sharing knowledge, best practices, and innovations within the Python ecosystem. Attendees can expect a range of activities including engaging talks, hands-on workshops, insightful panel discussions, and networking opportunities. Whether you're a seasoned Python developer or a beginner, PyCon Mumbai offers something for everyone, fostering collaboration, learning, and the advancement of Python in India's tech community.";

export default function TextSplit() {
  const refs = useRef<Array<HTMLSpanElement | null>>([]);
  const body = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const animation = gsap.timeline().fromTo(
      "h1",
      {
        y: "110%",
      },
      {
        y: "0%",
        duration: 0.6,
        delay: 0,
      }
    );

    return () => {
      animation.kill();
    };
  }, []);
  useEffect(() => {
    const animation = gsap.timeline().fromTo(
      "h1",
      {
        rotationX: 50,
      },
      {
        rotationX: 0,
        duration: 0.6,
        delay: 0.3,
        ease: "power2.out",
      }
    );

    return () => {
      animation.kill();
    };
  }, []);
  useEffect(() => {
    const animation = gsap.timeline().fromTo(
      ".titleanim",
      {
        y: "1%",
      },
      {
        y: "0%",
        duration: 0.6,
        delay: 0.3,
        ease: "power2.out",
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
      toggleActions: "play none none reverse",
    });
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current!,
        scrub: true,
        start: `500vh top`,
        end: window.innerWidth < 1000 ? `1000vh 20%` : `40% bottom`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
      toggleActions: "play none none reverse",
    });
    createAnimation2();
  }, []);

  const createAnimation2 = () => {
    gsap.to(".mainBody", {
      scrollTrigger: {
        trigger: ".third",
        scrub: true,
        start: `30% 51%`,
        end: `32% center`,
      },
      opacity: 1,
      backgroundImage: `radial-gradient(
        213% 213% at 5% -9%,
        rgba(38, 134, 190, 0.3) 0px,
        rgba(38, 133, 189, 0.3) 8.6%,
        rgba(37, 130, 185, 0.1) 16.6%,
        rgba(36, 126, 178, 0.1) 23.9%,
        rgba(34, 120, 170, 0.08) 30.9%,
        rgba(32, 113, 160, 0.07) 37.4%,
        rgba(30, 104, 148, 0.06) 43.8%,
        rgba(27, 95, 134, 0.05) 50%,
        rgba(24, 84, 119, 0.04) 56.2%,
        rgba(21, 72, 103, 0.03) 62.6%,
        rgba(17, 60, 85, 0.02) 69.2%,
        rgba(13, 46, 65, 0.01) 76.1%,
        transparent 100%
      ),
      radial-gradient(
        150% 150% at 3% -45%,
        rgba(255, 255, 255, 0.08) 0px,
        rgba(255, 255, 255, 0) 100%
      )`,
      ease: "cube.out",
      stagger: 0.1,
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
      toggleActions: "play none none reverse",
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
    <div ref={body} className="body">
      {splitWords(phrase)}
    </div>
  );
}
