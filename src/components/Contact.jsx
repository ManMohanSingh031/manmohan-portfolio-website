import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { CONTACT_DATA } from '../constants.js';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'singhmanmohan1810@gmail.com',
      };

      // Send main email to you
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Send auto-reply to visitor
      const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
      if (autoReplyTemplateId) {
        const autoReplyParams = {
          to_name: formData.name,
          to_email: formData.email,
          from_name: 'Man Mohan Singh',
          reply_message: `Thank you for reaching out! I've received your message and will get back to you within 24 hours.\n\nBest regards,\nMan Mohan Singh\nSoftware Engineer`
        };

        try {
          await emailjs.send(serviceId, autoReplyTemplateId, autoReplyParams, publicKey);
        } catch (autoReplyError) {
          console.warn('Auto-reply failed:', autoReplyError);
          // Don't show error to user for auto-reply failure
        }
      }

      setIsSubmitted(true);
      setShowSuccessPopup(true);
      setFormData({ name: '', email: '', message: '' });

      // Hide success message after 7 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setShowSuccessPopup(false);
      }, 7000);
    } catch (err) {
      setError('Failed to send message. Please try again or email me directly.');
      console.error('EmailJS error:', err);
    } finally {
      setIsLoading(false);
    }
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
            {CONTACT_DATA.title}
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
            {CONTACT_DATA.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl mb-6 text-slate-800 dark:text-slate-100 ">{CONTACT_DATA.contactInfo.title}</h3>
            
            <div className="space-y-6">
              <motion.a
                href={CONTACT_DATA.contactInfo.email.href}
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
                  <h4 className="text-slate-800 dark:text-slate-100 mb-1">{CONTACT_DATA.contactInfo.email.label}</h4>
                  <p className="text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:text-blue-400 transition-colors">
                    {CONTACT_DATA.contactInfo.email.value}
                  </p>
                </div>
              </motion.a>

              <motion.a
                href={CONTACT_DATA.contactInfo.phone.href}
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
                  <h4 className="text-slate-800 dark:text-slate-100 mb-1">{CONTACT_DATA.contactInfo.phone.label}</h4>
                  <p className="text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:text-blue-400 transition-colors">
                    {CONTACT_DATA.contactInfo.phone.value}
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
                  <h4 className="text-slate-800 dark:text-slate-100 mb-1">{CONTACT_DATA.contactInfo.location.label}</h4>
                  <p className="text-slate-600 dark:text-slate-400 ">{CONTACT_DATA.contactInfo.location.value}</p>
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
              <p className="text-slate-700 dark:text-slate-300 " dangerouslySetInnerHTML={{
                __html: CONTACT_DATA.callToAction.replace('MyGate', '<span class="text-blue-600 dark:text-blue-400">MyGate</span>')
              }} />
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
                {CONTACT_DATA.form.fields.name.label}
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 rounded-lg text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-600 transition-colors"
                placeholder={CONTACT_DATA.form.fields.name.placeholder}
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-slate-700 dark:text-slate-300 mb-2">
                {CONTACT_DATA.form.fields.email.label}
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 rounded-lg text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-600 transition-colors"
                placeholder={CONTACT_DATA.form.fields.email.placeholder}
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-slate-700 dark:text-slate-300 mb-2">
                {CONTACT_DATA.form.fields.message.label}
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 rounded-lg text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                placeholder={CONTACT_DATA.form.fields.message.placeholder}
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg text-red-700 dark:text-red-400"
              >
                <AlertCircle size={20} />
                <span>{error}</span>
              </motion.div>
            )}

            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-white rounded-lg flex items-center justify-center gap-2 hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isLoading || isSubmitted ? 1 : 1.02, y: isLoading || isSubmitted ? 0 : -2 }}
              whileTap={{ scale: isLoading || isSubmitted ? 1 : 0.98 }}
              disabled={isSubmitted || isLoading}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle size={20} />
                  {CONTACT_DATA.form.button.success}
                </>
              ) : isLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  {CONTACT_DATA.form.button.default}
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
            {CONTACT_DATA.footer.copyright}
          </p>
          <p className="text-slate-500 text-sm mt-2">
            {CONTACT_DATA.footer.tagline}
          </p>
        </motion.div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowSuccessPopup(false)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4"
              >
                Message Sent Successfully! 🎉
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-3 text-slate-600 dark:text-slate-400 mb-6"
              >
                <p className="text-lg">
                  Thank you for reaching out!
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                  <p className="text-blue-800 dark:text-blue-300 font-medium">
                    📧 Check your email for a confirmation message
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 text-sm mt-1">
                    I'll respond within 24 hours
                  </p>
                </div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setShowSuccessPopup(false)}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Got it!
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
