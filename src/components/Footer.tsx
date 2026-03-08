const Footer = () => (
  <footer className="py-12 bg-primary">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="text-xl font-extrabold text-primary-foreground">
          Estimar AlardAlard<span className="text-highlight">.</span>
        </a>
        <div className="flex gap-8">
          {["About", "Services", "Team", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
        <p className="text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} Estimar Alard. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
