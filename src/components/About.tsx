import { motion } from "framer-motion";
import { Target, BarChart3, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Data-Driven Strategies",
    description: "Every campaign is backed by in-depth market research and real-time analytics to ensure maximum impact.",
  },
  {
    icon: BarChart3,
    title: "Measurable ROI",
    description: "We focus on results you can see — from lead generation to revenue growth, every dirham is accounted for.",
  },
  {
    icon: Lightbulb,
    title: "Creativity + Performance",
    description: "We blend creative storytelling with performance marketing to build brands that convert and grow.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-light py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(262,80%,55%)] mb-3">About Us</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "hsl(220,20%,10%)" }}>
            Your Growth Partner in the <span className="gradient-text">Digital Era</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: "hsl(220,10%,45%)" }}>
            Dizi Digital Agency is a Dubai-based digital marketing agency focused on helping brands scale with data-driven strategies and measurable ROI. We combine creativity with performance marketing to deliver real business growth across the UAE and beyond.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              className="p-8 rounded-2xl border border-[hsl(220,15%,90%)] bg-[hsl(220,15%,97%)] hover:shadow-xl transition-shadow duration-300 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="w-14 h-14 rounded-xl gradient-btn flex items-center justify-center mx-auto mb-5"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <item.icon className="text-white" size={26} />
              </motion.div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "hsl(220,20%,10%)" }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(220,10%,45%)" }}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
