import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      "title": "Uber Taxi Data Pipeline And Analytics",
      "description": "Developed an end-to-end data engineering pipeline leveraging Mage AI for ETL, ingesting Uber taxi data from Google Cloud Storage, transforming it on Google Compute Engine, and storing it in BigQuery using optimized fact and dimension tables.",
      "technologies": ["Mage AI", "Google Compute Engine", "SQL", "BigQuery", "Looker"],
      "github": "https://github.com/Rohit131313/Uber-Data--Engineering-Pipeline.git",
      "live": "",
      "image": "https://ik.imagekit.io/yektos0qe/Architechture%20of%20project.png?updatedAt=1741105424723"
    },
    {
      "title": "MediSense-AI",
      "description": "Built an Agentic AI for medical knowledge retrieval using LangGraph, integrating vector databases and web services with Adaptive RAG to dynamically route queries based on complexity.",
      "technologies": ["LangGraph", "PyPDF", "Gemini-2.0", "Pinecone"],
      "github": "https://github.com/Rohit131313/MediSense-AI.git",
      "live": "",
      "image": "https://ik.imagekit.io/yektos0qe/langgraph_adaptive_rag.png?updatedAt=1741105471661"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-light mb-4">Featured Projects</h2>
          <p className="text-gray-400">Some of my recent work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-dark-light rounded-lg shadow-xl overflow-hidden border border-dark-lighter"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-light mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-dark-lighter text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-primary transition-colors"
                  >
                    <FaGithub className="mr-2" /> Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-primary transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
