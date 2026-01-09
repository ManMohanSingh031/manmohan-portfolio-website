import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Palette, Database, Terminal, Cpu, TrendingUp, Globe, Wrench } from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      category: "Web Development",
      icon: Globe,
      description: "Solid foundation in front-end and back-end development",
      skills: [
        { name: "Next.js/React.js", level: 75 },
        { name: "JavaScript ES6", level: 78 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Material UI", level: 80 },
      ]
    },
    {
      category: "Coding",
      icon: Code,
      description: "Proficient in C/C++, data structures and algorithms",
      skills: [
        { name: "C/C++", level: 85 },
        { name: "Java", level: 70 },
        { name: "Python", level: 60 },
        { name: "DSA", level: 75 },
      ]
    },
    {
      category: "UI/UX Design",
      icon: Palette,
      description: "Designing intuitive and engaging user interfaces",
      skills: [
        { name: "Figma", level: 70 },
        { name: "User Experience", level: 75 },
        { name: "Responsive Design", level: 85 },
        { name: "Prototyping", level: 65 },
      ]
    },
    {
      category: "Tools",
      icon: Wrench,
      description: "Version control, IDEs, and development tools",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Linux", level: 60 },
        { name: "Docker", level: 55 },
      ]
    },
    {
      category: "Database",
      icon: Database,
      description: "SQL and NoSQL database management",
      skills: [
        { name: "MySQL", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "PostgreSQL", level: 65 },
        { name: "Redis", level: 60 },
      ]
    },
    {
      category: "AI/ML",
      icon: Cpu,
      description: "Enthusiastic learner in ML and AI technologies",
      skills: [
        { name: "Machine Learning", level: 50 },
        { name: "TensorFlow", level: 45 },
        { name: "Data Analysis", level: 55 },
        { name: "Neural Networks", level: 40 },
      ]
    },
    {
      category: "Linux",
      icon: Terminal,
      description: "Command-line operations and system administration",
      skills: [
        { name: "Shell Scripting", level: 55 },
        { name: "Command Line", level: 65 },
        { name: "System Admin", level: 50 },
        { name: "Package Management", level: 60 },
      ]
    },
    {
      category: "Stock Market",
      icon: TrendingUp,
      description: "Learning chart patterns and market analysis",
      skills: [
        { name: "Chart Patterns", level: 45 },
        { name: "Candlestick", level: 50 },
        { name: "Market Trends", level: 40 },
        { name: "Technical Analysis", level: 45 },
      ]
    }
  ];

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl mb-4 text-slate-800 dark:text-slate-100"
            whileHover={{ scale: 1.05 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
              className="bg-white dark:bg-slate-800 backdrop-blur-sm rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <category.icon size={24} className="text-blue-600 dark:text-blue-400" />
                </motion.div>
                <h3 className="text-xl text-slate-800 dark:text-slate-100">{category.category}</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">{category.description}</p>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <motion.span 
                        className="text-sm text-slate-600 dark:text-slate-400"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full relative"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5,
                          ease: "easeOut"
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/30"
                          animate={{
                            x: ['-100%', '100%']
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
