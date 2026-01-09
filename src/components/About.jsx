import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Users, Lightbulb, Rocket, Calendar, GraduationCap } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code with modern best practices"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Excellent collaboration skills working with cross-functional teams"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Creative approach to solving complex technical challenges"
    },
    {
      icon: Rocket,
      title: "Quick Learner",
      description: "Fast adaptation to new technologies and frameworks"
    }
  ];

  const stats = [
    { icon: Calendar, label: "Birth Date", value: "18 Oct 2003" },
    { icon: GraduationCap, label: "Degree", value: "B.Tech, CS" },
  ];

  return (
    <section id="about" className="py-24 px-4 relative bg-slate-100/50 dark:bg-slate-900/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl mb-4 text-slate-800 dark:text-slate-100"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-start mb-16">
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h3 
              className="text-2xl mb-4 text-slate-800 dark:text-slate-100"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Hello Everyone! 👋
            </motion.h3>
            <motion.p 
              className="text-slate-700 dark:text-slate-300 text-lg mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              My name is <span className="text-blue-600 dark:text-blue-400">Man Mohan Singh</span>. I am pursuing a Bachelor of Technology (B.Tech) degree in Computer Science at the <span className="text-purple-600 dark:text-purple-400">Indian Institute of Information Technology, Nagpur (IIITN)</span>, with an expected graduation in 2024.
            </motion.p>
            <motion.p 
              className="text-slate-700 dark:text-slate-300 text-lg mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              Born and raised in <span className="text-blue-600 dark:text-blue-400">Raebareli, Uttar Pradesh</span>, I developed a strong passion for technology early on, which led me to pursue a career in this field. Currently working as an Associate Software Engineer at MyGate, I specialize in Frontend Development with expertise in React.js, Next.js, and modern web technologies.
            </motion.p>
            <motion.p 
              className="text-slate-700 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              I am committed to leveraging the knowledge and skills gained during my studies and professional experience to solve real-world challenges and contribute meaningfully to society. A creative problem solver, I thrive on exploring new technologies and embracing challenges.
            </motion.p>
          </motion.div>

          <motion.div
            className="md:col-span-2 space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
                    <stat.icon size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
                    <div className="text-slate-800 dark:text-slate-100">{stat.value}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white dark:bg-slate-800 backdrop-blur-sm rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg"
            >
              <motion.div 
                className="mb-4 inline-block p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <item.icon size={32} className="text-blue-600 dark:text-blue-400" />
              </motion.div>
              <h3 className="text-xl mb-3 text-slate-800 dark:text-slate-100">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
