import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";
import { BackgroundGradientAnimation } from "@/components/background-gradient-animationColor";
import { WavyBackground } from "@/components/backgroud-wavy";
export const metadata: Metadata = {
  title: "Jak Woda",
  description:
    "Hi, I'm Jak Woda. I'm a slow pioneer, CertifiedMultimediaDesigner, skater and artist. I'm a digital native as well as analog enthusiast.",
};

export default function Projects() {
  return (  
    
    <Container>
  
      <WavyBackground>
  
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        {" "}
        What I&apos;ve been working on
      </Heading>

      <Products />
      </WavyBackground>
  

    </Container>
   
  
  );
}
