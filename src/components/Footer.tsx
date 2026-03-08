import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="py-16 bg-primary">
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center gap-8">
        <a href="#" className="group">
          <div className="bg-white/95 rounded-xl px-4 py-2 shadow-md">
            <img src={logo} alt="Estimar Alard" className="h-14 transition-transform duration-300 group-hover:scale-105" />
          </div>
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
