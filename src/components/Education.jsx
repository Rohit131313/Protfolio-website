import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology',
      institution: 'Indian Institute of Information Technology Bhopal',
      period: '2022 - Present',
      gpa: '8.74',
      achievements: [
        'Strong Academic Performance – Maintaining a GPA of 8.74 in Information Technology.',
        'Open Source Contribution – Participated in GSSoC (GirlScript Summer of Code), contributing to open-source projects.',
        'Problem Solving – Active on LeetCode, showcasing strong DSA problem-solving skills.'
      ]
    },
    {
      degree: 'Senior Secondary Education (Class 12th)',
      institution: 'Deepak Memorial Academy',
      period: '2020-2021',
      gpa: '91.3%',
      achievements: [
        'Academic Excellence – Secured 91.33% in Class 12th and 90% in Class 10th.',
        'JEE Rank – Achieved an All India Rank (AIR) of 26,717 in JEE.',
        'Olympiad Participation – Competed in Mathematics and Science Olympiads, showcasing analytical and problem-solving skills.'
      ]
    }
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-light mb-4">Education</h2>
          <p className="text-gray-400">My academic background and achievements</p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-dark-light rounded-lg shadow-xl p-6 border-l-4 border-primary"
            >
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-primary text-2xl mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-light">{edu.degree}</h3>
                  <p className="text-gray-400">{edu.institution}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400">{edu.period}</span>
                <span className="text-primary font-semibold">GPA: {edu.gpa}</span>
              </div>

              <div>
                <h4 className="font-semibold text-light mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;