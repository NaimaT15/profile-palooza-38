import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="py-16 bg-primary">
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center gap-8">
        <a href="#" className="group">
          <img src={logo} alt="Estimar Alard" className="h-16 drop-shadow-lg transition-transform duration-300 group-hover:scale-105" />
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
