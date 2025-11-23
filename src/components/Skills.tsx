import { motion } from "framer-motion";
import { Code2, Database, Brain, BarChart3, Cloud, Workflow } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "Python", icon: Code2, level: 95, color: "from-primary to-primary/70" },
    { name: "SQL", icon: Database, level: 90, color: "from-secondary to-secondary/70" },
    { name: "Machine Learning", icon: Brain, level: 92, color: "from-primary to-secondary" },
    { name: "Data Analytics", icon: BarChart3, level: 88, color: "from-secondary to-primary" },
    { name: "Backend APIs", icon: Cloud, level: 90, color: "from-primary to-primary/70" },
    { name: "Data Processing", icon: Workflow, level: 93, color: "from-secondary to-secondary/70" },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient-coral">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${skill.color} rounded-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.level}%</p>
                  </div>
                </div>
                
                {/* Progress bar */}
                <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="glass-card p-6 rounded-2xl inline-block">
            <p className="text-muted-foreground mb-4">Also experienced with:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Power BI", "Model Deployment", "Flask", "FastAPI", "Docker", "Git"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
