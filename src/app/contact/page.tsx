import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { FlipWords } from "@/components/flip-words";
const words = ["better", "cute", "beautiful", "modern"];
const words2 = ["design", "product", "nature"];
export function FlipWordsDemo() {

 
  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with Aceternity UI
      </div>
    </div>
  );
}

import { BackgroundGradientAnimation } from "@/components/background-gradient-animationColor";
export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Gradients X Animations
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
 

export const metadata: Metadata = {
  title: "Jak Woda",
  description:
    "Hi, I'm Jak Woda. I'm a slow pioneer, CertifiedMultimediaDesigner, skater and artist. I'm a digital native as well as analog enthusiast.",
};

export default function Projects() {
  return (
    <BackgroundGradientAnimation>
    <Container>

      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">let's talk about <FlipWords words={words} /><FlipWords words={words2} /></Heading>
      <Paragraph className="mb-10 max-w-xl">
        Reach out to me over email or dm on social media.{" "}
      </Paragraph>
      

   
    </Container>
    </BackgroundGradientAnimation>
  );
}
