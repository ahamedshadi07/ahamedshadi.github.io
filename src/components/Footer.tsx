import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-glass-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="text-2xl font-display font-bold mb-2">
              <span className="text-primary">AS</span>
              <span className="text-foreground">.</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Ahamed Shadi M. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/ahamedshadi07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass-card rounded-lg hover:bg-primary/20 transition-all duration-300"
            >
              <Github className="h-5 w-5 text-foreground" />
            </a>
            <a
              href="https://linkedin.com/in/ahamedshadi/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass-card rounded-lg hover:bg-primary/20 transition-all duration-300"
            >
              <Linkedin className="h-5 w-5 text-foreground" />
            </a>
            <a
              href="mailto:ahamedshadi07@gmail.com"
              className="p-2 glass-card rounded-lg hover:bg-primary/20 transition-all duration-300"
            >
              <Mail className="h-5 w-5 text-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
