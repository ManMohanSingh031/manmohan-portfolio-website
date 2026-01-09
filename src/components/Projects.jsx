import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { PROJECTS_DATA } from '../constants.js';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });


  return (
    <section className="py-24 px-4 bg-slate-100/50 dark:bg-slate-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
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
            {PROJECTS_DATA.title}
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
            {PROJECTS_DATA.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white dark:bg-slate-800 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg group relative"
            >
              {project.featured && (
                <motion.div 
                  className="absolute top-4 right-4 z-10"
                  initial={{ rotate: -45, scale: 0 }}
                  animate={isInView ? { rotate: 0, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                >
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-white text-xs rounded-full shadow-lg">
                    Featured
                  </span>
                </motion.div>
              )}
              
              <div className="p-6">
                <motion.div 
                  className="mb-4 inline-block p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Folder size={32} className="text-blue-600 dark:text-blue-400 " />
                </motion.div>
                
                <h3 className="text-xl mb-3 text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 min-h-[60px]">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + i * 0.05 + 0.3 }}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:text-blue-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Github size={20} />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:text-blue-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink size={20} />
                    <span className="text-sm">Demo</span>
                  </motion.a>
                </div>
              </div>

              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
