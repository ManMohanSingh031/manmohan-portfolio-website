import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants.js';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });


  return (
    <section className="py-24 px-4 bg-slate-100/50 dark:bg-slate-900/50 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl mb-4 text-slate-800 dark:text-slate-100 "
            whileHover={{ scale: 1.05 }}
          >
            {EXPERIENCE_DATA.title}
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
            {EXPERIENCE_DATA.subtitle}
          </p>
        </motion.div>

        {/* Tree Structure */}
        <div className="relative">
          {/* Main Trunk */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-amber-700 via-amber-600 to-amber-500 rounded-full transform -translate-x-1/2 hidden md:block"
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{ boxShadow: '0 0 20px rgba(217, 119, 6, 0.3)' }}
          />

          {/* Tree Roots at Bottom */}
          <motion.div
            className="absolute left-1/2 bottom-0 transform -translate-x-1/2 hidden md:block"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 2 }}
          >
            <svg width="200" height="100" viewBox="0 0 200 100" className="opacity-50">
              <motion.path
                d="M100,0 Q80,50 60,100"
                stroke="currentColor"
                className="text-amber-700 "
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 2.2 }}
              />
              <motion.path
                d="M100,0 Q100,50 100,100"
                stroke="currentColor"
                className="text-amber-700 "
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 2.3 }}
              />
              <motion.path
                d="M100,0 Q120,50 140,100"
                stroke="currentColor"
                className="text-amber-700 "
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 2.4 }}
              />
            </svg>
          </motion.div>

          {EXPERIENCE_DATA.experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <div key={exp.title + exp.company} className="relative mb-24 md:mb-32">
                {/* Branch Line */}
                <motion.div
                  className={`absolute top-12 ${isLeft ? 'left-1/2 right-0' : 'left-0 right-1/2'} h-0.5 bg-gradient-to-r ${isLeft ? 'from-amber-600 to-transparent' : 'from-transparent to-amber-600'} hidden md:block`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '50%' } : {}}
                  transition={{ duration: 1, delay: index * 0.3 }}
                />

                {/* Leaves Animation around the branch */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute ${isLeft ? 'left-[55%]' : 'right-[55%]'} top-8 text-2xl hidden md:block`}
                    initial={{ opacity: 0, y: -20, x: 0 }}
                    animate={isInView ? {
                      opacity: [0, 1, 1, 0],
                      y: [0, 10, 20, 30],
                      x: isLeft ? [0, 10, 5, 15] : [0, -10, -5, -15],
                      rotate: [0, 10, -10, 0]
                    } : {}}
                    transition={{
                      duration: 3,
                      delay: index * 0.3 + i * 0.5 + 1,
                      repeat: Infinity,
                      repeatDelay: 5
                    }}
                  >
                    🍃
                  </motion.div>
                ))}

                {/* Node/Fruit on the trunk */}
                <motion.div
                  className="absolute left-1/2 top-12 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={isInView ? { scale: 1, rotate: 360 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.3 + 0.5, type: "spring" }}
                >
                  <motion.div
                    className="relative"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                      <Briefcase className="text-white" size={24} />
                    </div>
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-green-400 rounded-full opacity-50 blur-md"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.2, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  className={`md:w-[45%] ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100, rotateY: isLeft ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  whileHover={{ 
                    scale: 1.03,
                    y: -10,
                    rotateY: isLeft ? 5 : -5,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
                  }}
                >
                  <div className="relative bg-white dark:bg-slate-800 backdrop-blur-sm rounded-2xl p-6 border-2 border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden group">
                    {/* Decorative Corner */}
                    <motion.div
                      className={`absolute top-0 ${isLeft ? 'right-0' : 'left-0'} w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 ${isLeft ? 'rounded-bl-full' : 'rounded-br-full'}`}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.3 + 0.8 }}
                    />

                    {/* Hover Effect Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-3">
                          <motion.div 
                            className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Briefcase size={24} className="text-blue-600 dark:text-blue-400 " />
                          </motion.div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-xl text-slate-800 dark:text-slate-100 ">{exp.title}</h3>
                            </div>
                            <p className="text-lg text-blue-600 dark:text-blue-400 mb-1">{exp.company}</p>
                          </div>
                        </div>
                        <motion.span 
                          className="px-3 py-1 text-xs bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-white rounded-full shadow-md whitespace-nowrap"
                          whileHover={{ scale: 1.1 }}
                        >
                          {exp.type}
                        </motion.span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-slate-600 dark:text-slate-400 text-sm mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm text-slate-600 dark:text-slate-400 mb-3">{EXPERIENCE_DATA.achievementsLabel}</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li 
                              key={i} 
                              className="text-slate-700 dark:text-slate-300 text-sm flex items-start gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: index * 0.3 + i * 0.1 + 0.8 }}
                            >
                              <span className="text-green-600 mt-1">✓</span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.3 + i * 0.05 + 1 }}
                            whileHover={{ 
                              scale: 1.15, 
                              backgroundColor: "rgba(59, 130, 246, 0.2)",
                              y: -2
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Tree Crown/Top decoration */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <motion.div
            className="inline-block text-6xl"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🌳
          </motion.div>
          <p className="text-slate-600 dark:text-slate-400 mt-4">
            {EXPERIENCE_DATA.footer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
