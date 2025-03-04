import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';

const Skills = () => {
  const skillCategories = [
      {
        "name": "Programming Languages",
        "skills": [
          { "name": "Python", "level": 90 },
          { "name": "Java", "level": 80 }
        ]
      },
      {
        "name": "Data Storage & Databases",
        "skills": [
          { "name": "SQL (MySQL)", "level": 85 },
          { "name": "NoSQL (MongoDB, Cassandra)", "level": 80 },
          { "name": "BigQuery", "level": 75 }
        ]
      },
      {
        "name": "Cloud Technologies",
        "skills": [
          { "name": "Google Cloud Services (GCP)", "level": 85 },
          { "name": "AWS", "level": 75 }
        ]
      },
      {
        "name": "Machine Learning & AI",
        "skills": [
          { "name": "Scikit-Learn", "level": 85 },
          { "name": "TensorFlow", "level": 80 },
          { "name": "PyTorch", "level": 80 },
          { "name": "Hugging Face Transformers (NLP)", "level": 75 },
          { "name": "LangChain", "level": 75 },
          { "name": "LangGraph", "level": 75 },
          { "name": "NLTK", "level": 70 }
        ]
      },
      {
        "name": "Computer Vision & Deep Learning",
        "skills": [
          { "name": "OpenCV", "level": 80 },
          { "name": "MediaPipe", "level": 75 }
        ]
      },
      {
        "name": "Data Visualization",
        "skills": [
          { "name": "Matplotlib", "level": 85 },
          { "name": "Seaborn", "level": 80 },
          { "name": "Power BI", "level": 75 },
          { "name": "Looker", "level": 75 }
        ]
      },
      {
        "name": "ML Model Deployment & MLOps",
        "skills": [
          { "name": "Flask API", "level": 80 },
          { "name": "Docker", "level": 75 },
          { "name": "Streamlit (for interactive ML interface)", "level": 75 }
        ]
      },
      {
        "name": "Frontend Development",
        "skills": [
          { "name": "HTML", "level": 90 },
          { "name": "CSS", "level": 85 },
          { "name": "JavaScript", "level": 85 }
        ]
      },
      {
        "name": "Version Control",
        "skills": [
          { "name": "Git", "level": 85 },
          { "name": "GitHub", "level": 85 }
        ]
      },
      {
        "name": "Soft Skills",
        "skills": [
          { "name": "Time Management", "level": 85 },
          { "name": "Teamwork", "level": 80 }
        ]
      }   
  ];

  const getChartOptions = (skills) => ({
    backgroundColor: 'transparent',
    radar: {
      indicator: skills.map(skill => ({
        name: skill.name,
        max: 100
      })),
      splitNumber: 4,
      axisName: {
        color: '#9ca3af'
      },
      splitLine: {
        lineStyle: {
          color: '#374151'
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['rgba(31, 41, 55, 0.2)', 'rgba(31, 41, 55, 0.4)']
        }
      }
    },
    series: [{
      type: 'radar',
      data: [{
        value: skills.map(skill => skill.level),
        name: 'Skill Level',
        areaStyle: {
          color: 'rgba(59, 130, 246, 0.2)'
        },
        lineStyle: {
          color: '#3b82f6'
        },
        itemStyle: {
          color: '#3b82f6'
        }
      }]
    }]
  });

  return (
    <section className="py-20 bg-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-light mb-4">Technical Skills</h2>
          <p className="text-gray-400">My technical expertise and competencies</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-dark rounded-lg shadow-xl border border-dark-lighter p-6"
            >
              <h3 className="text-xl font-bold text-light mb-6 text-center">
                {category.name}
              </h3>
              <div className="h-[300px]">
                <ReactECharts
                  option={getChartOptions(category.skills)}
                  style={{ height: '100%', width: '100%' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;