import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

const page = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default page;
