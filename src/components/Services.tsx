import { motion } from "framer-motion";
import { Search, MousePointerClick, Share2, Globe, ShoppingCart, Palette } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Dominate search results with our proven SEO strategies. We optimize your website for higher rankings, more traffic, and increased conversions.",
  },
  {
    icon: MousePointerClick,
    title: "PPC Advertising",
    description: "Maximize your ad spend with targeted Google Ads and Meta campaigns that deliver high-quality leads and measurable results.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build a powerful social presence across Instagram, LinkedIn, TikTok, and more with engaging content and community management.",
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "From stunning landing pages to full-scale web applications, we build fast, responsive, and conversion-optimized websites.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Launch and scale your online store with end-to-end e-commerce solutions including Shopify, WooCommerce, and custom builds.",
  },
  {
    icon: Palette,
    title: "Branding & Content Marketing",
    description: "Craft a compelling brand identity and content strategy that resonates with your audience and sets you apart from the competition.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const Services = () => {
  return (
    <section id="services" className="section-dark py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(180,70%,50%)] mb-3">Our Services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything You Need to <span className="gradient-text">Grow Online</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 leading-relaxed">
            We offer a comprehensive suite of digital marketing services tailored for the UAE market.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[hsl(262,80%,55%)]/40 hover:bg-white/10 transition-colors duration-300"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="w-12 h-12 rounded-lg bg-[hsl(262,80%,55%)]/20 flex items-center justify-center mb-5 group-hover:bg-[hsl(262,80%,55%)]/30 transition-colors"
                whileHover={{ scale: 1.15, rotate: -5 }}
              >
                <service.icon className="text-[hsl(180,70%,50%)]" size={24} />
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
