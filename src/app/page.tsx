"use client" 
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";
import { WavyBackground } from "@/components/backgroud-wavy";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";
import React from 'react';
import { FlipWords } from "@/components/flip-words";
const words = ["technology", "product", "art", "music", "nature"];
import Pictures2 from "@/components/Pictures2";
import { socials } from "@/constants/socials";
import { Navlink } from "@/types/navlink";
import { twMerge } from "tailwind-merge";
import Link from "next/link";


export default function Home() {
  return (
    <Container>
      <WavyBackground>
      <span className="text-4xl">🌊</span>
      {/* <Heading>🌊</Heading> */}
      <Paragraph className="max-w-xl mt-4">
        I'm modern digital craftsman{" "}
     <Highlight>years of experience</Highlight> creating  images, identities, products and communities to make a <Highlight>little splash</Highlight> in this world. </Paragraph>
        
        
        <Heading as="h2" className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4">
                                          let's talk about <FlipWords words={words} />  
        </Heading>
        <div className="text-4xl flex">
      {socials.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
            link.href && "text-sky-500"
            )}
          />
          <span>{link.label}</span>

        </Link>

      ))}
      </div>
      {/* <Products/> */}
      
      {/* <TechStack /> */}
      <Pictures2 />
      
  </WavyBackground>
    </Container>
 
 
  );
}
