import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: 'Email',
      value: 'motwani.rohit2510@gmail.com',
      link: 'mailto:motwani.rohit2510@gmail.com'
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: 'Phone',
      value: '+91 9669681137',
      link: 'tel:+91 9669681137'
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/rohit-motwani1313/',
      link: 'https://www.linkedin.com/in/rohit-motwani1313/'
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: 'GitHub',
      value: 'github.com/Rohit131313',
      link: 'https://github.com/Rohit131313'
    }
  ];

  return (
    <section className="py-20 bg-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-light mb-4">Get in Touch</h2>
          <p className="text-gray-400">Feel free to reach out to me</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark rounded-lg shadow-xl p-6 flex flex-col items-center justify-center hover:transform hover:scale-105 transition-transform border border-dark-lighter"
            >
              <div className="text-primary mb-3">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold text-light mb-2">{info.label}</h3>
              <p className="text-gray-400 text-center">{info.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;