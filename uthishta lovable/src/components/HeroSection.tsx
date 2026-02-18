import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSchools = () => {
    document.getElementById("schools-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-block text-sm md:text-base uppercase tracking-[0.3em] text-primary font-medium mb-6"
        >
          Uthishta Initiative
        </motion.span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-gold leading-tight">
          Empowering Karnataka's
          <br />
          Junior Technical Schools
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Transforming technical education across 6 government schools — building skills,
          shaping futures, and empowering communities through quality vocational training.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10 flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-foreground">6</span>
              <span>Schools</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-foreground">1,550+</span>
              <span>Students</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-foreground">60+</span>
              <span>Years Legacy</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={scrollToSchools}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to schools"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
