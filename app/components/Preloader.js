import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const Preloader = () => {
  const [finalPosition, setFinalPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const tl = gsap.timeline();
  useEffect(() => {
    setFinalPosition(window.innerWidth - 180);
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
   
  }, []);
  const stepDistance = finalPosition / 6;
  const delays = [5, 5.3, 5.6];
  const load = useRef();
  
  useGSAP(() => {
    gsap.set(".revealer svg", { scale: 0 });
    tl.to(".count", {
      x: -900,
      duration: 0.69,
      delay: 0.5,
      ease: "power4.inOut",
    });

    for (let i = 1; i <= 6; i++) {
      const xPosition = -900 + i * 180;
      tl.to(".count", {
        x: xPosition,
        duration: 0.69,
        ease: "power4.inOut",
        onStart: () => {
          gsap.to(".count-wrapper", {
            x: stepDistance * i,
            duration: 0.69,
            ease: "power4.inOut",
          });
        },
      });
    }

    load.current.querySelectorAll(".revealer svg").forEach((el, i) => {
      gsap.to(el, {
        scale: 45,
        duration: 1.5,
        ease: "Power4.inOut",
        delay: delays[i],
        
      });
    });
  }, [finalPosition]);

  return (
    <div
      className="loader fixed top-0 left-0 flex items-end overflow-hidden h-full w-full z-50 "
      ref={load}
    >
      <div className="count-wrapper">
        <div className="count">
          <div className="digit">
            <h1>9</h1>
          </div>
          <div className="digit">
            <h1>8</h1>
          </div>
          <div className="digit">
            <h1>7</h1>
          </div>
          <div className="digit">
            <h1>4</h1>
          </div>
          <div className="digit">
            <h1>3</h1>
          </div>
          <div className="digit">
            <h1>2</h1>
          </div>
        </div>
      </div>

      <div className="count-wrapper">
        <div className="count">
          <div className="digit">
            <h1>9</h1>
          </div>
          <div className="digit">
            <h1>5</h1>
          </div>
          <div className="digit">
            <h1>9</h1>
          </div>
          <div className="digit">
            <h1>7</h1>
          </div>
          <div className="digit">
            <h1>4</h1>
          </div>
          <div className="digit">
            <h1>0</h1>
          </div>
        </div>
      </div>

      <div className={`revealer revealer-1 -z-10  ${isVisible?'block':'hidden'} `}>
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_1_70"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="200"
            height="200"
          >
            <path
              d="M100 0V0C100.039 55.2123 144.788 99.9609 200 100V100V100C144.788 100.039 100.039 144.788 100 200V200V200C99.9609 144.788 55.2123 100.039 0 100V100V100C55.2123 99.9609 99.9609 55.2123 100 0V0Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_1_70)">
            <rect
              width="250"
              height="250"
              transform="matrix(0 1 1 0 -25 -50)"
              fill="white"
            />
          </g>
        </svg>
      </div>
      <div className={`revealer revealer-2  ${isVisible?'block':'hidden'}`}>
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_1_70"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="200"
            height="200"
          >
            <path
              d="M100 0V0C100.039 55.2123 144.788 99.9609 200 100V100V100C144.788 100.039 100.039 144.788 100 200V200V200C99.9609 144.788 55.2123 100.039 0 100V100V100C55.2123 99.9609 99.9609 55.2123 100 0V0Z"
              fill="#C5FB45"
            />
          </mask>
          <g mask="url(#mask0_1_70)">
            <rect
              width="250"
              height="250"
              transform="matrix(0 1 1 0 -25 -50)"
              fill="#C5FB45"
            />
          </g>
        </svg>
      </div>
      <div className="revealer revealer-3 z-50">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_1_70"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="200"
            height="200"
          >
            <path
              d="M100 0V0C100.039 55.2123 144.788 99.9609 200 100V100V100C144.788 100.039 100.039 144.788 100 200V200V200C99.9609 144.788 55.2123 100.039 0 100V100V100C55.2123 99.9609 99.9609 55.2123 100 0V0Z"
              fill="black"
            />
          </mask>
          <g mask="url(#mask0_1_70)">
            <rect
              width="250"
              height="250"
              transform="matrix(0 1 1 0 -25 -50)"
              fill="black"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Preloader;
