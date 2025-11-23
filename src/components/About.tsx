import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, GraduationCap } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient-coral">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="glass-card p-8 rounded-3xl">
                <img
                  src={profileImage}
                  alt="Ahamed Shadi M"
                  className="w-full max-w-md rounded-2xl"
                />
                <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">350+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">B.Tech Computer Science Engineering</span>
                    <br />
                    Karunya Institute of Technology and Sciences
                    <br />
                    Graduating 2025
                  </p>
                </div>
              </div>

              <div className="border-t border-glass-border pt-6">
                <h3 className="text-xl font-display font-semibold mb-4">Professional Summary</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate Python Backend Developer and AI/ML Engineer with a strong focus on building 
                  scalable systems and production-ready machine learning solutions. My expertise lies in designing 
                  end-to-end ML pipelines, optimizing backend services, and improving inference performance.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  I specialize in scalable AI systems, backend pipelines, inference optimization, and 
                  performance-focused engineering. I'm dedicated to creating efficient, high-availability 
                  solutions that deliver sub-second response times even under resource constraints.
                </p>
              </div>

              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
