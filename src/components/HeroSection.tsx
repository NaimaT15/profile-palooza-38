import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => (
  <section
    className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
    <div className="relative z-10 container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="mb-8"
      >
        <div className="inline-block bg-white/95 rounded-2xl px-6 py-4 shadow-xl backdrop-blur-sm">
          <img src={logo} alt="Estimar Alard" className="h-20 md:h-28 mx-auto" />
        </div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/80 mb-4"
      >
        Building What Lasts
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight max-w-4xl mx-auto"
      >
        Building the Future of{" "}
        <span className="text-highlight">Digital Innovation</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto"
      >
        We deliver enterprise-grade technology solutions that empower businesses
        to scale, innovate, and lead in their markets.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#services"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          Our Services <ArrowRight size={18} />
        </a>
        <a
          href="#about"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
        >
          Learn More
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
