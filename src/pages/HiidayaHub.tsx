import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Globe, Shield, Clock, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hiidaya-hero.jpg";
import logo from "@/assets/hiidaya-logo.png";

const features = [
  { icon: BookOpen, title: "Verified Tutors", desc: "Every tutor is carefully vetted for Qur'an knowledge, teaching ability, and Islamic credentials." },
  { icon: Globe, title: "Learn Anywhere", desc: "Connect with expert tutors from around the world through flexible online live sessions." },
  { icon: Users, title: "Personalized Learning", desc: "One-on-one sessions tailored to your level — from beginners to advanced Tajweed and Hifz." },
  { icon: Shield, title: "Safe & Trusted", desc: "A secure platform built with trust, ensuring a respectful and enriching learning environment." },
];

const steps = [
  { step: "01", title: "Create Account", desc: "Sign up as a student or tutor in minutes." },
  { step: "02", title: "Find Your Tutor", desc: "Browse verified tutors by subject, language, and availability." },
  { step: "03", title: "Book a Session", desc: "Schedule flexible live sessions that fit your routine." },
  { step: "04", title: "Start Learning", desc: "Begin your personalized Qur'an and Islamic learning journey." },
];

const stats = [
  { value: "500+", label: "Verified Tutors" },
  { value: "30+", label: "Countries" },
  { value: "10K+", label: "Students" },
  { value: "4.9", label: "Average Rating" },
];

const HiidayaHub = () => (
  <div className="min-h-screen" style={{ "--h-primary": "153 50% 15%", "--h-gold": "38 70% 50%", "--h-cream": "38 40% 95%" } as React.CSSProperties}>
    {/* Navbar */}
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(38,40%,95%)]/90 backdrop-blur-xl border-b border-[hsl(38,30%,85%)] shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <a href="#" className="flex items-center group">
          <img src={logo} alt="Hiidaya Hub" className="h-14 drop-shadow-md transition-transform duration-300 group-hover:scale-105" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["Features", "How It Works", "Why Us"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-medium text-[hsl(153,30%,30%)] hover:text-[hsl(38,70%,45%)] transition-colors"
            >
              {label}
            </a>
          ))}
          <Link
            to="/"
            className="text-sm font-medium text-[hsl(153,30%,30%)] hover:text-[hsl(38,70%,45%)] transition-colors"
          >
            Estimar Alard
          </Link>
          <a
            href="#cta"
            className="px-5 py-2 rounded-lg bg-[hsl(153,50%,15%)] text-[hsl(38,40%,95%)] text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>

    {/* Hero */}
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(38,40%,95%)]/60 via-[hsl(38,40%,95%)]/30 to-[hsl(38,40%,95%)]/70" />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <img src={logo} alt="HiidayaHub" className="h-24 md:h-32 mx-auto drop-shadow-xl" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm font-semibold uppercase tracking-[0.3em] text-[hsl(38,70%,40%)] mb-4"
        >
          Your Gateway to Qur'anic Learning
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[hsl(153,50%,12%)] leading-tight max-w-4xl mx-auto"
        >
          Learn the Qur'an with{" "}
          <span className="text-[hsl(38,70%,45%)]">Trusted Tutors</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-6 text-lg md:text-xl text-[hsl(153,30%,25%)] max-w-2xl mx-auto"
        >
          A global online platform connecting students with verified Qur'an and Islamic tutors
          for flexible, personalized live learning.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[hsl(153,50%,15%)] text-[hsl(38,40%,95%)] font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            Start Learning <ArrowRight size={18} />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border-2 border-[hsl(153,50%,15%)] text-[hsl(153,50%,15%)] font-semibold hover:bg-[hsl(153,50%,15%)]/10 transition-colors"
          >
            Explore Features
          </a>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-[hsl(153,50%,15%)]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-extrabold text-[hsl(38,70%,50%)]">{s.value}</p>
              <p className="text-sm text-[hsl(38,40%,90%)] mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section id="features" className="py-24 bg-[hsl(38,40%,95%)]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-[hsl(38,70%,45%)] mb-3"
          >
            Why HiidayaHub
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-[hsl(153,50%,12%)]"
          >
            A Better Way to Learn
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl p-8 border border-[hsl(38,30%,88%)] shadow-sm hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-[hsl(153,50%,15%)]/10 flex items-center justify-center mb-5">
                <f.icon className="text-[hsl(153,50%,20%)]" size={26} />
              </div>
              <h3 className="text-lg font-bold text-[hsl(153,50%,12%)] mb-2">{f.title}</h3>
              <p className="text-[hsl(153,15%,40%)] text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-[hsl(38,70%,45%)] mb-3"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-[hsl(153,50%,12%)]"
          >
            Start in 4 Simple Steps
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[hsl(38,70%,50%)] to-[hsl(38,60%,40%)] flex items-center justify-center mb-4 shadow-lg">
                <span className="text-xl font-extrabold text-white">{s.step}</span>
              </div>
              <h3 className="text-lg font-bold text-[hsl(153,50%,12%)] mb-2">{s.title}</h3>
              <p className="text-[hsl(153,15%,40%)] text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Us */}
    <section id="why-us" className="py-24 bg-[hsl(38,40%,95%)]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(38,70%,45%)] mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[hsl(153,50%,12%)] mb-6">
              Guidance You Can Trust
            </h2>
            <div className="space-y-4">
              {[
                "Certified & verified Qur'an teachers",
                "Flexible scheduling across all time zones",
                "Personalized curriculum for every student",
                "Progress tracking & parent dashboard",
                "Affordable pricing with free trial sessions",
                "Secure, private one-on-one sessions",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="text-[hsl(38,70%,45%)] shrink-0 mt-0.5" size={20} />
                  <p className="text-[hsl(153,30%,25%)] text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-[hsl(38,30%,88%)] shadow-lg"
          >
            <div className="text-center mb-6">
              <Star className="text-[hsl(38,70%,50%)] mx-auto mb-2" size={40} />
              <h3 className="text-xl font-bold text-[hsl(153,50%,12%)]">What Students Say</h3>
            </div>
            <blockquote className="text-[hsl(153,20%,35%)] text-sm leading-relaxed italic mb-4">
              "HiidayaHub transformed my Qur'an learning journey. My tutor is patient, knowledgeable,
              and truly cares about my progress. I can learn from the comfort of my home at times that
              suit me best."
            </blockquote>
            <p className="text-sm font-semibold text-[hsl(153,50%,12%)]">— Amina K., UK</p>
            <div className="flex gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="text-[hsl(38,70%,50%)] fill-[hsl(38,70%,50%)]" size={16} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section id="cta" className="py-24 bg-[hsl(153,50%,15%)]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-[hsl(38,40%,95%)] mb-6">
            Begin Your Journey Today
          </h2>
          <p className="text-lg text-[hsl(38,40%,85%)] mb-10 max-w-xl mx-auto">
            Join thousands of students worldwide learning the Qur'an with expert guidance.
            Your first session is free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[hsl(38,70%,50%)] text-[hsl(153,50%,10%)] font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
            >
              Start Free Trial <ArrowRight size={20} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-[hsl(38,40%,90%)] text-[hsl(38,40%,90%)] font-semibold text-lg hover:bg-[hsl(38,40%,90%)]/10 transition-colors"
            >
              Become a Tutor
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Footer */}
    <footer className="py-12 bg-[hsl(153,50%,10%)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <img src={logo} alt="HiidayaHub" className="h-12" />
          <div className="flex gap-6">
            {["Features", "How It Works", "Why Us"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-[hsl(38,40%,70%)] hover:text-[hsl(38,40%,90%)] transition-colors"
              >
                {l}
              </a>
            ))}
            <Link to="/" className="text-sm text-[hsl(38,40%,70%)] hover:text-[hsl(38,40%,90%)] transition-colors">
              Estimar Alard
            </Link>
          </div>
          <p className="text-sm text-[hsl(38,40%,50%)]">
            © {new Date().getFullYear()} HiidayaHub by Estimar Alard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
);

export default HiidayaHub;
