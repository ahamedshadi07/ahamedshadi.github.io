import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experience = {
    title: "AI Engineer Intern",
    company: "Workcohol Solutions",
    period: "Jan 2025 – March 2025",
    description: [
      "Worked on a production-ready generative AI system with end-to-end ML pipeline design",
      "Optimized backend services for improved inference performance and scalability",
      "Achieved high availability and sub-second response times using lightweight deployment strategies",
      "Implemented performance optimizations under resource constraints",
      "Designed scalable architecture for AI model serving and inference",
    ],
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Work <span className="text-gradient-cyan">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden group hover:shadow-xl transition-shadow duration-300"
          >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground">
                      {experience.title}
                    </h3>
                    <p className="text-lg text-primary font-semibold">{experience.company}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="h-5 w-5" />
                  <span>{experience.period}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                {experience.description.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
