import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How much does a digital marketing agency cost in Dubai?",
    answer:
      "Pricing varies depending on services and goals. Monthly packages typically range between AED 3,000 to AED 25,000 based on competition .",
  },
  {
    question: "How do you measure campaign success?",
    answer:
      "We track KPIs like traffic growth, conversion rates, ROAS, lead quality, and engagement metrics to ensure measurable ROI.",
  },
  {
    question: "How quickly can I see results?",
    answer:
      "SEO results may take 3–6 months. Paid ads and social media campaigns can start generating results within weeks.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We provide SEO, PPC, social media marketing, branding, web development, and performance marketing solutions.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
  <section className="relative py-24 lg:py-32 
bg-gradient-to-br 
from-[hsl(230,25%,8%)] 
via-[hsl(235,30%,12%)] 
to-[hsl(220,35%,10%)] 
border-t border-white/10">

  <div className="container mx-auto px-6">

    {/* SECTION HEADING */}
    <div className="text-center mb-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(180,70%,50%)] mb-3">
        FAQ
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        Frequently Asked <span className="gradient-text">Questions</span>
      </h2>
    </div>

    {/* GRID */}
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT IMAGE */}
      <div>
        <img
          src="/faq.png"
          alt="FAQ Illustration"
          className="w-full max-w-md mx-auto"
        />
      </div>

      {/* RIGHT ACCORDION */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center p-5 text-left text-white font-medium"
            >
              {faq.question}
              {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
            </button>

            {openIndex === index && (
              <div className="px-5 pb-5 text-white/70 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

  );
};

export default FAQ;
