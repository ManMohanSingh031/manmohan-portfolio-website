import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { SKILLS_DATA } from '../constants.js';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section className="py-24 px-4 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {SKILLS_DATA.title}
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            {SKILLS_DATA.subtitle}
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS_DATA.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                />

                {/* Icon Header */}
                <motion.div
                  className="flex items-center gap-4 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className={`p-4 bg-gradient-to-r ${category.gradient} rounded-2xl shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <category.icon size={28} className="text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
                      {category.category}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </motion.div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3
                      }}
                      whileHover={{
                        scale: 1.1,
                        y: -2,
                      }}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="relative group/skill cursor-default"
                    >
                      <div className="px-4 py-2 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full border border-white/30 dark:border-white/20 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-white/30 dark:hover:bg-white/15 transition-all duration-300">
                        {skill}

                        {/* Glowing Effect on Hover */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-full opacity-0 group-hover/skill:opacity-20 transition-opacity duration-300`}
                        />
                      </div>

                      {/* Floating Sparkle Effect */}
                      {hoveredSkill === skill && (
                        <motion.div
                          className="absolute -top-1 -right-1"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                        >
                          <Sparkles size={16} className="text-yellow-400" />
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-20 h-20 opacity-5"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <category.icon size={80} className="text-slate-400" />
                </motion.div>

                {/* Floating Particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/40 rounded-full"
                    style={{
                      top: `${20 + i * 25}%`,
                      right: `${10 + i * 5}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: categoryIndex * 0.3 + i * 0.5,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
