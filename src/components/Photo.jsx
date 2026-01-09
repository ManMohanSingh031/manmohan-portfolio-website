import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Photo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 px-4 relative overflow-hidden" ref={ref}>
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
            Professional Profile
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Main Photo Container */}
            <motion.div
              className="relative max-w-md mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Outer glowing ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-1"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="w-full h-full rounded-2xl bg-slate-100 dark:bg-slate-900" />
              </motion.div>

              {/* Photo */}
              <motion.div
                className="relative m-2 rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img
                  src="/my_photo.png"
                  alt="Man Mohan Singh - Professional Photo"
                  className="w-full h-auto object-cover rounded-xl"
                />

                {/* Overlay with subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent rounded-xl" />
              </motion.div>

              {/* Floating elements */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-blue-400 dark:bg-blue-300 rounded-full"
                  style={{
                    top: `${20 + i * 30}%`,
                    right: `${-5 + i * 2}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-3xl mb-4 text-slate-800 dark:text-slate-100">
                Meet the Developer
              </h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                Passionate about creating beautiful, functional, and user-centered digital experiences.
                With a strong foundation in computer science and hands-on experience in modern web development,
                I bring creativity and technical expertise to every project.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg border border-slate-200 dark:border-slate-700"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
              </motion.div>
              <motion.div
                className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg border border-slate-200 dark:border-slate-700"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">15+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
              </motion.div>
              <motion.div
                className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg border border-slate-200 dark:border-slate-700"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">IIIT</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Nagpur Graduate</div>
              </motion.div>
              <motion.div
                className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg border border-slate-200 dark:border-slate-700"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">React</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Specialist</div>
              </motion.div>
            </motion.div>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
            >
              <blockquote className="italic text-slate-600 dark:text-slate-400 border-l-4 border-blue-500 pl-4">
                "Code is like humor. When you have to explain it, it's bad."
                <footer className="text-sm mt-2 text-slate-500 dark:text-slate-500">- Cory House</footer>
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}