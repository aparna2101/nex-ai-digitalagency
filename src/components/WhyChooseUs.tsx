import { motion } from "framer-motion";
import { TrendingUp, FileText, Users, Settings, MapPin } from "lucide-react";

const reasons = [
  { icon: TrendingUp, title: "ROI-Focused Strategies", description: "Every campaign is designed with measurable returns in mind." },
  { icon: FileText, title: "Transparent Reporting", description: "Real-time dashboards and detailed monthly performance reports." },
  { icon: Users, title: "Experienced Digital Experts", description: "A team of seasoned marketers with 10+ years in the industry." },
  { icon: Settings, title: "Customized Growth Plans", description: "Tailored strategies that align with your unique business goals." },
  { icon: MapPin, title: "UAE Market Expertise", description: "Deep understanding of the local market, culture, and consumer behavior." },
];

const WhyChooseUs = () => {
  return (
    <section className="section-light py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(262,80%,55%)] mb-3">Why Choose Us</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "hsl(220,20%,10%)" }}>
            Why Brands <span className="gradient-text">Trust Us</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              className="flex items-start gap-4 p-6 rounded-xl hover:bg-[hsl(220,15%,97%)] transition-colors"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ x: 6, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="w-11 h-11 rounded-lg gradient-btn flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.1 }}
              >
                <reason.icon className="text-white" size={20} />
              </motion.div>
              <div>
                <h3 className="font-bold mb-1" style={{ color: "hsl(220,20%,10%)" }}>{reason.title}</h3>
                <p className="text-sm" style={{ color: "hsl(220,10%,45%)" }}>{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
