import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowRight, Download } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="text-primary text-6xl md:text-7xl font-display font-bold">
                  Hello,{" "}
                </span>
                <span className="text-foreground text-5xl md:text-6xl font-display font-bold">
                  I'm Ahamed Shadi M
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl font-display font-semibold"
              >
                Python Backend Developer &{" "}
                <span className="text-gradient-cyan">AI/ML Engineer</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground text-lg leading-relaxed max-w-xl"
              >
                Passionate about building scalable systems and real-world machine learning solutions. 
                Focused on backend pipelines, inference optimization, and performance-focused engineering.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-coral transition-all duration-300 group"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                Hire Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 items-center"
            >
              <a
                href="https://linkedin.com/in/ahamedshadi/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-lg hover:bg-secondary/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6 text-secondary" />
              </a>
              <a
                href="https://github.com/ahamedshadi07"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-lg hover:bg-secondary/20 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6 text-secondary" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30 animate-glow" />
              
              {/* Profile image container */}
              <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
                <div className="absolute inset-0 rounded-full border-4 border-primary/50 animate-pulse" />
                <div className="absolute inset-2 glass-card rounded-full p-2 overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Ahamed Shadi M"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/30 rounded-full blur-xl animate-float" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary/30 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
