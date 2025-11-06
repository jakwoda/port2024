"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { Highlight } from "./Highlight";
import { motion } from "framer-motion";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";

export default function Pictures() {
const images = [
    "/images/me/marks.png",
    "/images/me/marks2.png",
    "/images/me/marks3.png",
    "/images/me/marks4.png",
    "/images/me/marks5.png",
    "/images/me/marks6.png",
    "/images/me/me2.png",
    ];

  return (
    <div  className="fixed">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: index % 2 === 0 ? 200 : -200,
              rotate: index % 2 === 0 ? 30 : -30,
            }}
            animate={{
              opacity: 1,
              y: Math.random()*(window.innerHeight-800),
              x: Math.random()*(window.innerWidth-100),
              rotate: index % 2 === 0 ? Math.random()*13 : -Math.random()*13,
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            
           <Resizable> <Draggable >
<Image src={image} alt="marks on paper screenshot"  className="position-absolute" width={100} height={100} draggable={false}/>
</Draggable>
</Resizable>
          </motion.div>
        ))}
       
      </div>
  );
}