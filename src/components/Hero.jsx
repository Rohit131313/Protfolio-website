import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark to-dark-lighter pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-light mb-6">
              Hi, I'm <span className="text-primary">Rohit Motwani</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
            Software Engineering Student | Full-Stack Developer | AI & Data Science Enthusiast
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <a href="https://github.com/Rohit131313" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/rohit-motwani1313/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <FaLinkedin size={28} />
            </a>
            <a href="mailto:motwani.rohit2510@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
              <FaEnvelope size={28} />
            </a>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="#projects"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors"
            >
              View My Projects
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;