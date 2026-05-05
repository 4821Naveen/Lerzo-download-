import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in animations
      gsap.utils.toArray('.gsap-fade-in').forEach((element) => {
        gsap.fromTo(
          element as Element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element as Element,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Slide up animations with stagger
      gsap.utils.toArray('.gsap-stagger-container').forEach((container) => {
        const items = (container as Element).querySelectorAll('.gsap-stagger-item');
        gsap.fromTo(
          items,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container as Element,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Scale in animations
      gsap.utils.toArray('.gsap-scale-in').forEach((element) => {
        gsap.fromTo(
          element as Element,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element as Element,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Parallax effect
      gsap.utils.toArray('.gsap-parallax').forEach((element) => {
        gsap.to(element as Element, {
          yPercent: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: element as Element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      // Horizontal slide
      gsap.utils.toArray('.gsap-slide-right').forEach((element) => {
        gsap.fromTo(
          element as Element,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element as Element,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      gsap.utils.toArray('.gsap-slide-left').forEach((element) => {
        gsap.fromTo(
          element as Element,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element as Element,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
};

export { gsap, ScrollTrigger };
