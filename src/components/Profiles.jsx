import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Github, Linkedin, Code2, Award, Terminal, ExternalLink, Star } from 'lucide-react';

export function Profiles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const profiles = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/manmohansingh",
      description: "Professional network & career updates",
      color: "from-blue-600 to-blue-400",
      bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      stats: "500+ Connections"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/manmohansingh8422",
      description: "Open source contributions & projects",
      color: "from-slate-700 to-slate-500 dark:from-slate-300 dark:to-slate-400",
      bgColor: "bg-slate-500/10 dark:bg-slate-500/20",
      iconColor: "text-slate-700 dark:text-slate-300",
      stats: "50+ Repositories"
    },
    {
      name: "LeetCode",
      icon: Code2,
      url: "https://leetcode.com/manmohansingh",
      description: "Coding challenges & problem solving",
      color: "from-orange-600 to-orange-400",
      bgColor: "bg-orange-500/10 dark:bg-orange-500/20",
      iconColor: "text-orange-600 dark:text-orange-400",
      stats: "500+ Problems Solved"
    },
    {
      name: "CodeChef",
      icon: Terminal,
      url: "https://codechef.com/users/manmohansingh",
      description: "Competitive programming contests",
      color: "from-amber-700 to-amber-500",
      bgColor: "bg-amber-500/10 dark:bg-amber-500/20",
      iconColor: "text-amber-600 dark:text-amber-400",
      stats: "3★ Rating"
    },
    {
      name: "HackerRank",
      icon: Award,
      url: "https://hackerrank.com/manmohansingh",
      description: "Skills verification & certifications",
      color: "from-green-600 to-green-400",
      bgColor: "bg-green-500/10 dark:bg-green-500/20",
      iconColor: "text-green-600 dark:text-green-400",
      stats: "Gold Badges"
    }
  ];

  return (
    <section className="py-24 px-4 bg-slate-100/50 dark:bg-slate-900/50" ref={ref}>
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
            Online Profiles
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
            Connect with me on various platforms to see my work, contributions, and professional journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-slate-800 backdrop-blur-sm rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg group"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div 
                  className={`p-3 ${profile.bgColor} rounded-xl`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <profile.icon
                    size={32}
                    className={profile.iconColor}
                    style={{
                      filter: `drop-shadow(0 0 6px currentColor)`,
                      opacity: 0.9
                    }}
                  />
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-xl bg-gradient-to-r ${profile.color} bg-clip-text text-transparent font-semibold`}>
                      {profile.name}
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink size={16} className="text-slate-400 dark:text-slate-500" />
                    </motion.div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    {profile.description}
                  </p>
                  <div className={`inline-flex items-center gap-2 px-2 py-1 ${profile.bgColor} rounded-full`}>
                    <Star size={12} className="text-yellow-500 dark:text-yellow-400" />
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      {profile.stats}
                    </span>
                  </div>
                </div>
              </div>

              <motion.div
                className={`mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-sm`}
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                <span className={`bg-gradient-to-r ${profile.color} bg-clip-text text-transparent font-medium`}>
                  Visit Profile
                </span>
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className={`bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}
                >
                  →
                </motion.span>
              </motion.div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-white dark:bg-slate-800 backdrop-blur-sm rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg">
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              📊 <span className="text-blue-600 dark:text-blue-400 ">Active</span> on coding platforms with{' '}
              <span className="text-purple-600 dark:text-purple-400 ">consistent contributions</span>
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 ">
              Solving problems daily and participating in coding contests
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
