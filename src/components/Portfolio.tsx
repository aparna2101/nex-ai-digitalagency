import { motion } from "framer-motion";

const projects = [
  {
    title: "Al Majid Group — SEO Overhaul",
    category: "SEO Case Study",
    image: "/almazid.png",
  },
  {
    title: "LuxeCart — E-Commerce Platform",
    category: "E-commerce Website",
    image: "/luxecart.png",
  },
  {
    title: "Dubai Eats — Social Media Growth",
    category: "Social Media Campaign",
    image: "/dubaieats.png",
  },
  {
    title: "PropVista — Lead Generation",
    category: "Lead Generation Campaign",
    image: "/propvista.png",
  },
  {
    title: "GulfTech Solutions — Brand Revamp",
    category: "Branding & Identity",
    image: "/gulftech.png",
  },
  {
    title: "Desert Rose Spa — Google Ads",
    category: "PPC Campaign",
    image: "/desert.png",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-dark py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(180,70%,50%)] mb-3">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 leading-relaxed">
            A selection of successful campaigns and projects we've delivered for clients across the UAE.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* DARK OVERLAY ON HOVER */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(180,70%,50%)] mb-2">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>
              </div>

              {/* CATEGORY BADGE DEFAULT */}
              <div className="absolute bottom-4 left-4 right-4 group-hover:opacity-0 transition-opacity">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs text-white font-medium">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
