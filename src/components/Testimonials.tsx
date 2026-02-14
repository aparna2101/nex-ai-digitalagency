import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Al Maktoum",
    company: "Al Maktoum Properties",
    role: "CEO",
    quote: "Dizi Digital Agency transformed our online presence completely. Within 6 months, our organic traffic increased by 320% and we saw a significant boost in qualified leads from Google.",
    rating: 5,
  },
  {
    name: "Fatima Al Hashimi",
    company: "Luxe Beauty UAE",
    role: "Marketing Director",
    quote: "Their social media team is exceptional. They grew our Instagram following from 5K to 85K in under a year, and our e-commerce sales doubled through their targeted campaigns.",
    rating: 5,
  },
  {
    name: "Omar Khalid",
    company: "Gulf Ventures Capital",
    role: "Managing Partner",
    quote: "The ROI from our Google Ads campaigns managed by Dizi Digital has been outstanding. They reduced our cost per acquisition by 45% while increasing our conversion rate.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-light py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(262,80%,55%)] mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "hsl(220,20%,10%)" }}>
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="p-8 rounded-2xl border border-[hsl(220,15%,90%)] bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.15 + j * 0.08 }}
                  >
                    <Star size={16} className="fill-[hsl(45,95%,55%)] text-[hsl(45,95%,55%)]" />
                  </motion.div>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "hsl(220,10%,35%)" }}>
                "{t.quote}"
              </p>
              <div>
                <p className="font-bold text-sm" style={{ color: "hsl(220,20%,10%)" }}>{t.name}</p>
                <p className="text-xs" style={{ color: "hsl(220,10%,45%)" }}>
                  {t.role}, {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
