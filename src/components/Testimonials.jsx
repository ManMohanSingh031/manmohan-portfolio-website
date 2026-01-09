import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Senior Developer at MyGate",
      company: "MyGate",
      rating: 5,
      text: "Man Mohan is an exceptional frontend developer with a keen eye for detail. His work on our ERP system has been outstanding. He consistently delivers high-quality code and is always eager to learn new technologies.",
      avatar: "👨‍💼"
    },
    {
      name: "Priya Sharma",
      role: "Team Lead at BharatTech",
      company: "BharatTech Pvt. Ltd",
      rating: 5,
      text: "Working with Man Mohan was a pleasure. He quickly adapted to our Next.js project and made significant contributions. His ability to create reusable components and fix complex bugs impressed the entire team.",
      avatar: "👩‍💼"
    },
    {
      name: "Amit Patel",
      role: "Project Manager at InternPixel",
      company: "InternPixel Pvt. Ltd",
      rating: 5,
      text: "Man Mohan demonstrated excellent skills in creating responsive web designs. His attention to cross-device compatibility and pixel-perfect implementation was remarkable. He's a quick learner and delivered all tasks ahead of schedule.",
      avatar: "👨‍💻"
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Computer Science Professor",
      company: "IIIT Nagpur",
      rating: 5,
      text: "As Man Mohan's professor, I've watched him grow into a skilled developer. His dedication to learning and problem-solving abilities are exceptional. He actively participates in projects and helps his peers.",
      avatar: "👩‍🏫"
    },
    {
      name: "Vikram Singh",
      role: "Mentor at Chegg",
      company: "Chegg India",
      rating: 5,
      text: "Man Mohan's expertise in Data Structures and Algorithms is impressive. His 82% accuracy rate and ability to guide over 200 students shows his deep understanding and teaching skills.",
      avatar: "👨‍🎓"
    },
    {
      name: "Neha Gupta",
      role: "Frontend Developer",
      company: "Tech Corp",
      rating: 5,
      text: "Collaborating with Man Mohan on various projects has been a great experience. His coding standards and attention to UI/UX details are commendable. A true team player!",
      avatar: "👩‍💻"
    },
    {
      name: "Arjun Reddy",
      role: "Software Architect",
      company: "Digital Solutions",
      rating: 5,
      text: "Man Mohan brings fresh perspectives and innovative solutions to every challenge. His passion for learning and adapting to new technologies makes him stand out among his peers.",
      avatar: "👨‍💼"
    },
    {
      name: "Kavya Iyer",
      role: "UX Designer",
      company: "Design Studio",
      rating: 5,
      text: "Working with Man Mohan on UI implementation was seamless. He perfectly translates designs into code while maintaining pixel-perfect accuracy and smooth animations.",
      avatar: "👩‍🎨"
    }
  ];

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

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
            Testimonials & Reviews
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
            What colleagues, mentors, and team members say about working with me
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
          {[
            { value: "5.0", label: "Average Rating", icon: "⭐" },
            { value: "200+", label: "Students Helped", icon: "🎓" },
            { value: "82%", label: "Accuracy Rate", icon: "✓" },
            { value: "4+", label: "Companies", icon: "🏢" }
          ].map((stat, index) => (
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
