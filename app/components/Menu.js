"use client";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/shyambazar", label: "Shyambazar" },
  { path: "/paikpara", label: "Paikpara" },
  { path: "/kumartuli", label: "Kumartuli" },
  { path: "/about", label: "About" },
];

const Menu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if(isMenuOpen){
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen])
  

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar text-white flex z-10 justify-between items-center p-8">
        <div className="menu-logo">
          <Link href="/">Archishman</Link>
        </div>
        <div className="menu-open cursor-pointer" onClick={toggleMenu}>
          <p className="text-white">Menu</p>
        </div>
      </div>
      <div className="menu-overlay h-screen w-screen flex z-20 justify-between items-center p-8 text-black  bg-[#c5fb45] ">
        <div className="menu-overlay-bar flex z-20 justify-between items-center p-8">
          <div className="menu-logo">
            <Link href="/">Archishman</Link>
          </div>
          <div
            className="menu-close cursor-pointer text-black"
            onClick={toggleMenu}
          >
            <p>Close</p>
          </div>
        </div>
        <div className="menu-close-icon flex items-end cursor-pointer flex-[2]">
          <p onClick={toggleMenu} >&#x2715;</p>
        </div>
        <div className="menu-copy flex h-full pt-10 justify-between flex-col flex-[4]">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div
                  className="menu-link-item-holder relative"
                  onClick={toggleMenu}
                >
                  <Link href={link.path} className="menu-link">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info flex  justify-between">
            <div className="menu-info-col flex-[1] flex-col justify-end">
              <Link href="#">Instagram</Link>
            </div>
            <div className="menu-info-col flex-[1] flex-col justify-end">
              <p>riju.archishman@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="menu-preview flex flex-[4] justify-end items-end"></div>
      </div>
    </div>
  );
};

export default Menu;
