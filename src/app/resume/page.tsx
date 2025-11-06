import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";
import React from "react";
import { render } from "react-dom";
import Pictures from "@/components/Pictures";
import { socials } from "@/constants/socials";
import { Navlink } from "@/types/navlink";
import { twMerge } from "tailwind-merge";
import Link from "next/link";



// ES6
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import { Resizable } from 're-resizable';

export default function Home() {
  return (

    <Container>
          <Pictures />
      <span className="text-4xl">🛹</span>
      
      <Heading className="font-black">practice</Heading>
      {/* <Paragraph className="max-w-xl mt-4">
        I&apos;m a <Highlight>creative technologist</Highlight> that loves  new ideas, 
        <Highlight> scientific research </Highlight>and <Highlight>product development</Highlight>.
        I have a background in  design    and   photography, music , and  skateboarding. 
      </Paragraph> */}
      <WorkHistory />
      <Pictures />
     
    </Container>

  );
}


