import { motion } from "framer-motion";
import { Shield, Zap, Target } from "lucide-react";

const values = [
  { icon: Shield, title: "Reliability", desc: "Enterprise-grade solutions built on robust architectures that scale with your needs." },
  { icon: Zap, title: "Innovation", desc: "Cutting-edge technologies and methodologies to keep you ahead of the curve." },
  { icon: Target, title: "Results-Driven", desc: "We measure success by the impact we create for your business growth." },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-widest text-highlight mb-3"
        >
          About Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-foreground"
        >
          A Decade of Delivering Excellence
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-muted-foreground text-lg"
        >
          Estimar Alard is a leading technology company specializing in cloud infrastructure,
          enterprise software, and digital transformation. We partner with organizations
          to solve their most complex challenges.
        </motion.p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
              <v.icon className="text-accent" size={24} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
