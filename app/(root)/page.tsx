import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { Features } from "@/components/Features";

import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
};

export default page;
