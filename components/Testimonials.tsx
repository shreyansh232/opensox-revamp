"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from "framer-motion";
import tweets from "@/data/tweets.json";

export const Testimonials = () => {
  return (
    <motion.section
      className="py-12 min-h-screen relative overflow-hidden grid place-content-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="absolute inset-0 -z-10 h-full w-full pointer-events-none"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000 40%, #5D2DE6 100%)",
        }}
      />
      <div className="container mx-auto p-20 text-gray-200">
        <motion.h2
          className="text-6xl font-semibold text-center mb-2 bg-gradient-to-b from-gray-200 to-gray-500 bg-clip-text text-transparent"
          style={{ lineHeight: "1.2" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          What People Are Saying?
        </motion.h2>
        <motion.p
          className="text-gray-400 text-lg text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          See what others are saying about OpenSox
        </motion.p>
        <InfiniteMovingCards items={tweets} direction="left" speed="normal" />
        <div className="mt-8">
          <InfiniteMovingCards
            items={tweets.slice().reverse()} // Reverse the array for variety
            direction="right"
            speed="normal"
          />
        </div>
      </div>
    </motion.section>
  );
};
