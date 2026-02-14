import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  businessType: z.string().min(1, "Please select a business type"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const contactInfo = [
  { icon: MapPin, label: "Visit Us", value: "Business Bay, Dubai, UAE" },
  { icon: Phone, label: "Call Us", value: "+971 4 123 4567" },
  { icon: Mail, label: "Email Us", value: "hello@dizidigital.ae" },
];

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", businessType: "", message: "" },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="section-dark py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(180,70%,50%)] mb-3">Contact Us</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's <span className="gradient-text">Grow Together</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 leading-relaxed">
            Ready to take your digital presence to the next level? Get in touch for a free consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/70">Full Name</FormLabel>
                      <FormControl><Input placeholder="John Doe" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[hsl(262,80%,55%)] transition-colors" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/70">Email</FormLabel>
                      <FormControl><Input placeholder="john@company.com" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[hsl(262,80%,55%)] transition-colors" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/70">Phone</FormLabel>
                      <FormControl><Input placeholder="+971 50 123 4567" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[hsl(262,80%,55%)] transition-colors" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="businessType" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/70">Business Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/5 border-white/10 text-white"><SelectValue placeholder="Select type" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ecommerce">E-Commerce</SelectItem>
                          <SelectItem value="realestate">Real Estate</SelectItem>
                          <SelectItem value="hospitality">Hospitality</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/70">Message</FormLabel>
                    <FormControl><Textarea placeholder="Tell us about your project..." rows={4} className="bg-white/5 border-white/10 text-white placeholder:text-white/30 resize-none focus:border-[hsl(262,80%,55%)] transition-colors" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <Button type="submit" size="lg" className="w-full gradient-btn text-white border-0 hover:opacity-90 hover:scale-[1.02] transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>

          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-colors duration-300"
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-lg gradient-btn flex items-center justify-center flex-shrink-0">
                  <info.icon className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{info.label}</p>
                  <p className="text-sm text-white/50">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
