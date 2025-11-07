"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { Highlight } from "./Highlight";
import { motion } from "framer-motion";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";
import { withBasePath } from "@/lib/utils";

export default function Pictures2() {
  const images = [
    withBasePath("/images/me/marks.png"),
    withBasePath("/images/me/marks2.png"),
    withBasePath("/images/me/marks3.png"),
    withBasePath("/images/me/marks4.png"),
    withBasePath("/images/me/marks5.png"),
    withBasePath("/images/me/marks6.png"),
    withBasePath("/images/me/me2.png"),
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
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
              y: Math.random() > 0.5 ? 10*index : -10*index,
              x: Math.random() > 0.5 ? 10*index : -10*index,
              rotate: index % 2 === 0 ? Math.random()*13 : -Math.random()*13,
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            
           <Resizable> <Draggable >
<Image src={image} alt="marks on paper screenshot"  width={600} height={600} draggable={false}/>
</Draggable>
</Resizable>
          </motion.div>
        ))}
       
      </div>
    </div>
  );
}