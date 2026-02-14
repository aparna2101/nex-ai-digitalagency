import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "400+", label: "Clients Served" },
  { value: "10+", label: "Years Experience" },
  { value: "98%", label: "Retention Rate" },
  { value: "1200+", label: "Projects Delivered" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-dark overflow-hidden"
    >
      {/* Animated background orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[hsl(262,80%,55%)]/10 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[hsl(180,70%,50%)]/10 blur-[120px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[hsl(180,70%,50%)]/30"
          style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [-20, 20, -20], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/70 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-[hsl(180,70%,50%)] animate-pulse" />
            Dubai's Leading Digital Marketing Agency
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Results-Driven{" "}
            <span className="gradient-text">Digital Marketing</span>{" "}
            Agency in Dubai
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            We help businesses grow online with SEO, PPC, Social Media Marketing, and high-converting websites that deliver measurable ROI.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a href="#contact">
              <Button size="lg" className="gradient-btn text-white border-0 px-8 py-6 text-base hover:opacity-90 hover:scale-105 transition-all duration-300">
                Get Free Consultation <ArrowRight className="ml-2" size={18} />
              </Button>
            </a>
            <a href="#services">
              <Button size="lg" variant="outline" className="border-white/20 text-white bg-transparent hover:bg-white/5 px-8 py-6 text-base hover:scale-105 transition-all duration-300">
                View Our Services <ChevronRight className="ml-1" size={18} />
              </Button>
            </a>
          </motion.div>

          {/* Stats with stagger */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 hover:bg-white/10 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.15 }}
                whileHover={{ y: -4 }}
              >
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/50 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
