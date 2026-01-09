import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send, Phone, CheckCircle } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            Get In Touch
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl mb-6 text-slate-800 dark:text-slate-100 ">Contact Information</h3>
            
            <div className="space-y-6">
              <motion.a
                href="mailto:manmohansingh8422@gmail.com"
                className="flex items-start gap-4 group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Mail className="text-blue-600 dark:text-blue-400 " size={24} />
                </motion.div>
                <div>
                  <h4 className="text-slate-800 dark:text-slate-100 mb-1">Email</h4>
                  <p className="text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:text-blue-400 transition-colors">
                    manmohansingh8422@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+918433376122"
                className="flex items-start gap-4 group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Phone className="text-blue-600 dark:text-blue-400 " size={24} />
                </motion.div>
                <div>
                  <h4 className="text-slate-800 dark:text-slate-100 mb-1">Phone</h4>
                  <p className="text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:text-blue-400 transition-colors">
                    +91 8433376122
                  </p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <MapPin className="text-blue-600 dark:text-blue-400 " size={24} />
                </motion.div>
                <div>
                  <h4 className="text-slate-800 dark:text-slate-100 mb-1">Location</h4>
                  <p className="text-slate-600 dark:text-slate-400 ">Rae Bareli, Uttar Pradesh</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-12 p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-slate-200 dark:border-slate-700 "
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-slate-700 dark:text-slate-300 ">
                🚀 Currently working at <span className="text-blue-600 dark:text-blue-400 ">MyGate</span> and open to freelance opportunities. Let's create something amazing together!
              </p>
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-slate-700 dark:text-slate-300 mb-2">
                Name
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 rounded-lg text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-600 transition-colors"
                placeholder="Your name"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-slate-700 dark:text-slate-300 mb-2">
                Email
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 rounded-lg text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-600 transition-colors"
                placeholder="your.email@example.com"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-slate-700 dark:text-slate-300 mb-2">
                Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 rounded-lg text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                placeholder="Tell me about your project..."
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-white rounded-lg flex items-center justify-center gap-2 hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle size={20} />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-slate-300 "
        >
          <p className="text-slate-600 dark:text-slate-400 ">
            © 2025 Man Mohan Singh. Built with React, Motion & Tailwind CSS
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Made with 💙 for the web development community
          </p>
        </motion.div>
      </div>
    </section>
  );
}
