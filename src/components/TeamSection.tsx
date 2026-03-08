import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const team = [
  { name: "Nanati Oumer", role: "UI/UX Designer", initials: "NO" },
  { name: "Rawda Hassen", role: "Full Stack Developer", initials: "RH" },
  { name: "Hindu Abduletif", role: "Graphic & Digital Marketer", initials: "HA" },
  { name: "Ala Ali", role: "Full Stack Developer", initials: "AA" },
  { name: "Naima Tilahun", role: "Full Stack Developer", initials: "NT" },
];

const TeamSection = () => (
  <section id="team" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-widest text-highlight mb-3"
        >
          Our Team
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-foreground"
        >
          Meet the Leadership
        </motion.h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-md transition-shadow"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-primary flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-primary-foreground">{m.initials}</span>
            </div>
            <h3 className="text-lg font-bold text-foreground">{m.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{m.role}</p>
            <button className="mt-4 text-muted-foreground hover:text-accent transition-colors">
              <Linkedin size={18} />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
