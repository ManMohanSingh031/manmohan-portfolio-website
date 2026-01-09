import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { EDUCATION } from '../constants.js';

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });


  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl mb-4 text-slate-800 dark:text-slate-100 "
            whileHover={{ scale: 1.05 }}
          >
            Education
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="space-y-8">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.degree + edu.institution}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white dark:bg-slate-800 backdrop-blur-sm rounded-xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                    <GraduationCap size={32} className="text-blue-600 dark:text-blue-400 " />
                  </div>
                </motion.div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl text-slate-800 dark:text-slate-100 mb-1">{edu.degree}</h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 mb-1">{edu.field}</p>
                      <p className="text-slate-600 dark:text-slate-400 mb-2">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <motion.span 
                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        <BookOpen size={16} />
                        {edu.period}
                      </motion.span>
                      <motion.span 
                        className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Award size={16} />
                        {edu.grade}
                      </motion.span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <motion.li 
                        key={i} 
                        className="text-slate-700 dark:text-slate-300 flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + i * 0.1 + 0.5 }}
                      >
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
