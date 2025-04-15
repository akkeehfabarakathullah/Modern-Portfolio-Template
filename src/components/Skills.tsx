import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Layout, Server, Smartphone } from 'lucide-react';
import { skillCategories } from '../config/portfolio';

const iconMap: { [key: string]: any } = {
  Layout,
  Server,
  Database,
  Smartphone,
  Globe,
  Code2,
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I work with a variety of technologies and tools to create exceptional digital experiences.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((skill, index) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center mb-6">
                  <Icon className={`w-8 h-8 mb-4 mx-auto ${skill.color}`} />
                  <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;