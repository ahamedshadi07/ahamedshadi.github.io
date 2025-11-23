import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Real-time Face Recognition & Attendance System",
      description: "Built a full multi-camera real-time system with face detection, tracking, recognition, auto-registration, and attendance logging using FaceNet, PCA, DeepSort, DBSCAN, and cosine similarity.",
      tags: ["Python", "Computer Vision", "FaceNet", "DeepSort", "Real-time"],
      gradient: "from-primary to-primary/70",
      summary: "Detects, tracks, recognizes faces and auto-registers new identities with real-time logging.",
    },
    {
      title: "AI Story Generator Web App",
      description: "Built with Flask + Mistral (Ollama), enabling prompt-based story generation with live frontend display, PDF export, and copy features.",
      tags: ["Flask", "Mistral", "Ollama", "AI", "Web App"],
      gradient: "from-secondary to-secondary/70",
      summary: "Generate creative stories using AI with an intuitive web interface.",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-gradient-coral">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my expertise in AI/ML and backend development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              {/* Project header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Summary badge */}
                <div className="glass-card p-4 rounded-lg mb-4 border-l-4 border-primary">
                  <p className="text-sm font-semibold text-primary mb-1">⭐ Summary</p>
                  <p className="text-sm text-muted-foreground">{project.summary}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted rounded-full text-xs font-medium hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground group/btn"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    View Project
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground group/btn"
                  >
                    <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    Source Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
