"use client";
import { motion } from "framer-motion";
import { Github, Twitter, Mail, Code, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <motion.footer
      className="relative bg-black/50 backdrop-blur-md border-t border-white/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-[#5D2DE6]/20 backdrop-blur-sm border border-[#5D2DE6]/30">
                <Code className="w-6 h-6 text-[#5D2DE6]" />
              </div>
              <h3 className="text-xl font-semibold text-white">Opensox</h3>
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Discover and contribute to open source projects that match your
              skills and interests.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-medium mb-4">Platform</h4>
            <ul className="space-y-2">
              {[
                "Browse Projects",
                "Filter by Tech",
                "Difficulty Levels",
                "Submit Project",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-medium mb-4">Community</h4>
            <ul className="space-y-2">
              {["Guidelines", "Contributing", "Documentation", "Support"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>for the open source community</span>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Mail, href: "#" },
            ].map(({ icon: Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                className="p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#5D2DE6]/50 hover:bg-[#5D2DE6]/10 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4 text-gray-400 group-hover:text-[#5D2DE6] transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};
