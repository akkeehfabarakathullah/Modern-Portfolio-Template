import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Download Resume</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Get a detailed overview of my experience, skills, and qualifications.
          </p>
          <a
            href="/path-to-your-resume.pdf"
            download
            className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            <Download size={20} />
            <span>Download CV</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;