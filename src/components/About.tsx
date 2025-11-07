"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { Highlight } from "./Highlight";
import { motion } from "framer-motion";
import { withBasePath } from "@/lib/utils";

export default function About() {
  const images = [
// withBasePath("/images/me/1.jpg"),
withBasePath("/images/me/2.jpg"),
withBasePath("/images/me/me.jpg"),
// withBasePath("/images/me/5.jpg"),
withBasePath("/images/me/6.jpg"),
withBasePath("/images/me/9.jpg"),

  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
       
      </div>

      <div className="max-w-4xl">

       <Paragraph className=" mt-4">
          Hey there, I&apos;m Jak Woda - a passionate CertifiedMultimediaDesigner™, skater and artist. I&apos;m a digital native as well as analog enthusiast.
      
        </Paragraph>
        <Paragraph className=" mt-4">
        My practice evolves around technology, water, communication, rainbows, pastels and skateboarding

Water, MultiMedia and Communication

whose everyday practice evolves around pastels, skateboarding, communication and water. Trying to find something new on the intersection of art and technology.
</Paragraph>

      </div>
    </div>
  );
}
