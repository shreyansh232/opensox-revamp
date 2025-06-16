"use client";
import { FiArrowRight } from "react-icons/fi";
import { useMotionTemplate, motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  const color = "#5D2DE6";
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="absolute inset-0 -z-20 h-full w-full pointer-events-none"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000 40%, #5D2DE6 100%)",
        }}
      />
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="max-w-5xl bg-gradient-to-b from-gray-200 to-gray-500 bg-clip-text text-center text-2xl font-semibold leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          <motion.h1
            className="bg-gradient-to-b from-gray-200 via-gray-300 to-gray-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Find Your Perfect
          </motion.h1>
          <motion.h1
            className="bg-gradient-to-b from-gray-200 via-gray-300 to-gray-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Open Source Project
          </motion.h1>
        </div>
        <motion.p
          className="lg:my-5 my-3 lg:max-w-2xl text-center text-xs text-gray-400 leading-relaxed md:text-lg md:leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Discover open source projects that match your skills and interests.
          Start contributing and grow your expertise today
        </motion.p>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full cursor-pointer bg-gray-950/10 text-xs lg:text-lg lg:px-5 lg:py-2 px-2 py-1 text-gray-50 transition-colors hover:bg-gray-950/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          Explore Projects
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
        <motion.div
          className="mt-10 p-2 bg-gray-700/50 rounded-xl w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Image
            src={"/hero-image.png"}
            alt="hero-image"
            width={1400}
            height={1200}
            className="rounded-xl"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
