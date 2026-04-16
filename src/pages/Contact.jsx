import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Linkedin, Github, MessageCircle } from "lucide-react";
import { useState } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const contactInfo = [
  {
    icon: <Mail size={14} />,
    label: "Email",
    value: "feroz.developer@gmail.com",
    href: "mailto:feroz.developer@gmail.com",
  },
  {
    icon: <Phone size={14} />,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: <MapPin size={14} />,
    label: "Location",
    value: "Bangalore, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: <Linkedin size={14} />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/feroz-developer",
  },
  {
    icon: <Github size={14} />,
    label: "GitHub",
    href: "https://github.com/feroz-developer",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="py-12 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="text-center mb-8"
        >
          <motion.h2
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto"
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </motion.div>

        {/* Content - Equal Height Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
          {/* Contact Form */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-800 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-md bg-gray-900 dark:bg-white flex items-center justify-center">
                  <MessageCircle className="w-3 h-3 text-white dark:text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-gray-900 dark:text-white">
                    Send a Message
                  </h3>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-2.5 flex-1 flex flex-col">
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[10px] font-medium text-gray-700 dark:text-gray-300 mb-0.5">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-2 py-1.5 text-xs rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-1 focus:ring-gray-900 dark:focus:ring-white outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-medium text-gray-700 dark:text-gray-300 mb-0.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-2 py-1.5 text-xs rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-1 focus:ring-gray-900 dark:focus:ring-white outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-medium text-gray-700 dark:text-gray-300 mb-0.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-2 py-1.5 text-xs rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-1 focus:ring-gray-900 dark:focus:ring-white outline-none transition-all"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-[10px] font-medium text-gray-700 dark:text-gray-300 mb-0.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full min-h-[60px] px-2 py-1.5 text-xs rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-1 focus:ring-gray-900 dark:focus:ring-white outline-none transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-3 py-1.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-medium rounded hover:bg-gray-800 dark:hover:bg-gray-100 transition-all flex items-center justify-center gap-1 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : <><Send size={10} /> Send Message</>}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-800 h-full flex flex-col">
              {/* Contact Information */}
              <div className="flex-1">
                <h3 className="text-xs font-semibold text-gray-900 dark:text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-[10px] text-gray-600 dark:text-gray-400 mb-3">
                  Feel free to reach out through any of these channels.
                </p>
                
                <div className="space-y-2">
                  {contactInfo.map((info) => (
                    <motion.div 
                      key={info.label} 
                      className="flex items-center gap-2 p-2 rounded bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      <div className="w-7 h-7 rounded bg-gray-900 dark:bg-white flex items-center justify-center text-white dark:text-gray-900 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[9px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-[11px] font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors truncate block"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-[11px] font-medium text-gray-900 dark:text-white truncate">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-[9px] font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">
                  Connect With Me
                </h4>
                <div className="flex gap-2">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Badge */}
              <div className="mt-3 p-2 rounded bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                  </span>
                  <p className="text-[10px] font-medium text-green-800 dark:text-green-300">
                    Available for freelance projects
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
