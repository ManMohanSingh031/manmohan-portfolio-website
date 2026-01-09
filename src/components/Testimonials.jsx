import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../constants.js';

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);


  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...TESTIMONIALS_DATA.testimonials, ...TESTIMONIALS_DATA.testimonials, ...TESTIMONIALS_DATA.testimonials];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let scrollInterval;
    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    scrollInterval = setInterval(scroll, 20);

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  return (
    <section className="py-24 px-4 overflow-hidden" ref={ref}>
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
            {TESTIMONIALS_DATA.title}
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
            {TESTIMONIALS_DATA.subtitle}
          </p>
        </motion.div>

        {/* Auto-scrolling testimonials row */}
        <div className="relative mb-16">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
          
          <motion.div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden py-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-96 bg-white dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50 shadow-xl"
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Quote icon */}
                <motion.div
                  className="mb-4 opacity-20"
                  initial={{ rotate: -180, scale: 0 }}
                  animate={isInView ? { rotate: 0, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  <Quote size={40} className="text-blue-600 dark:text-blue-400" />
                </motion.div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                      transition={{ delay: 0.6 + i * 0.05 }}
                    >
                      <Star className="text-amber-500 fill-amber-500" size={20} />
                    </motion.div>
                  ))}
                </div>

                {/* Review text */}
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed line-clamp-4">
                  "{testimonial.text}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <motion.div
                    className="text-4xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <h4 className="text-slate-800 dark:text-slate-100">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          {TESTIMONIALS_DATA.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-xl p-6 text-center border border-slate-200 dark:border-slate-700/50"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 + index * 0.1 }}
            >
              <motion.div 
                className="text-4xl mb-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-3xl text-blue-600 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
