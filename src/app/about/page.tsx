"use client";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";
import { BackgroundGradientAnimation } from "@/components/background-gradient-animationColor";
import { WavyBackground } from "@/components/backgroud-wavy";
import { motion } from "framer-motion";
import About from "@/components/About";
// import Draggable from "react-draggable";
import Pictures2 from "@/components/Pictures2";

// export const metadata: Metadata = {
//   title: "Jak Woda",
//   description:
//     "Hi, I'm Jak Woda. I'm a slow pioneer, CertifiedMultimediaDesigner, skater and artist. I'm a digital native as well as analog enthusiast.",
// };

export default function AboutPage() {
  const images = [
    ];
  return (
    <BackgroundGradientAnimation>
    <Container>
   <WavyBackground>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">About Me</Heading>
      <About />


      </WavyBackground>
      <Pictures2 />
     
      
    </Container>
    </BackgroundGradientAnimation>
  );
}
