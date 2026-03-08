import { motion } from "framer-motion";
import { Cloud, Code, Database, Lock, BarChart3, Headphones } from "lucide-react";

const services = [
  { icon: Cloud, title: "Cloud Solutions", desc: "Scalable cloud infrastructure and migration services for modern enterprises." },
  { icon: Code, title: "Custom Development", desc: "Bespoke software solutions tailored to your unique business requirements." },
  { icon: Database, title: "Data Engineering", desc: "End-to-end data pipelines, warehousing, and analytics platforms." },
  { icon: Lock, title: "Cybersecurity", desc: "Comprehensive security audits, monitoring, and threat protection." },
  { icon: BarChart3, title: "Business Intelligence", desc: "Actionable insights through advanced analytics and reporting dashboards." },
  { icon: Headphones, title: "Managed Services", desc: "24/7 monitoring, support, and infrastructure management." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 section-alt">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-widest text-highlight mb-3"
        >
          What We Do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-foreground"
        >
          Comprehensive Technology Services
        </motion.h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md hover:border-accent/40 transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-5 group-hover:bg-accent transition-colors">
              <s.icon className="text-primary-foreground" size={24} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
