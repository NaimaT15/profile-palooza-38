import { motion } from "framer-motion";

const stats = [
  { value: "200+", label: "Clients Worldwide" },
  { value: "15+", label: "Years of Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50M+", label: "Users Powered" },
];

const StatsSection = () => (
  <section className="py-16 bg-primary">
    <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="text-center"
        >
          <p className="text-3xl md:text-4xl font-extrabold text-highlight">{stat.value}</p>
          <p className="mt-2 text-sm text-primary-foreground/70">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default StatsSection;
