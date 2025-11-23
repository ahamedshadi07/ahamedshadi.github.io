import { motion } from "framer-motion";
import { Brain, BarChart3, Code, Database } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Model Development",
      description: "Design and deploy production-ready machine learning models with optimized inference performance and scalability.",
      gradient: "from-primary to-primary/70",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights using advanced analytics techniques and visualization tools.",
      gradient: "from-secondary to-secondary/70",
    },
    {
      icon: Code,
      title: "Backend Development",
      description: "Build robust Python APIs and backend services with a focus on performance, scalability, and clean architecture.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Database,
      title: "Power BI Dashboards",
      description: "Create interactive dashboards and reports that enable data-driven decision making for your business.",
      gradient: "from-secondary to-primary",
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient-cyan">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer a range of services to help transform your vision into reality. 
            Let me make your digital presence stand out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-semibold">Learn More</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
