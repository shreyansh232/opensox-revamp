"use client";
import { motion } from "framer-motion";
import {
  FaCode,
  FaPalette,
  FaFilter,
  FaStar,
  FaUsers,
  FaBolt,
  FaBullseye,
} from "react-icons/fa";

const filters = [
  {
    id: 1,
    title: "Tech Stack Filter",
    description:
      "Find projects built with React, Python, JavaScript, Go, and more",
    icon: FaCode,
    className: "md:col-span-2 md:row-span-1",
    gradient: "from-blue-500/20 to-purple-500/20",
    tags: ["React", "Python", "TypeScript"],
  },
  {
    id: 2,
    title: "Difficulty Level",
    description: "From beginner-friendly to expert-level challenges",
    icon: FaBullseye,
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-green-500/20 to-teal-500/20",
    tags: ["Beginner", "Intermediate"],
  },
  {
    id: 3,
    title: "Project Type",
    description: "Web apps, libraries, tools, games, and more",
    icon: FaPalette,
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-pink-500/20 to-rose-500/20",
    tags: ["Web App", "CLI Tool"],
  },
  {
    id: 4,
    title: "Active Community",
    description: "Projects with engaged maintainers and regular updates",
    icon: FaUsers,
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-orange-500/20 to-red-500/20",
    tags: ["Active", "Mentorship"],
  },
  {
    id: 5,
    title: "Popular Projects",
    description: "Trending repositories with high star counts",
    icon: FaStar,
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-yellow-500/20 to-orange-500/20",
    tags: ["Trending", "Popular"],
  },
];

export const Features = () => {
  return (
    <section className="min-h-screen bg-black px-4 py-20 grid place-content-center">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-gray-200 to-gray-500 bg-clip-text text-transparent mb-6">
            Discover Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Use our advanced filtering system to find open source projects that
            match your skills, interests, and goals
          </p>
        </motion.div>

        <motion.div
          className="relative rounded-3xl bg-white/5 backdrop-blur-md border border-[#5D2DE6]/50 shadow-lg p-6 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
            {filters.map((filter, index) => (
              <motion.div
                key={filter.id}
                className={`group relative overflow-hidden rounded-2xl bg-[#5D2DE6]/50 backdrop-blur-md border border-white/10 transition-all duration-300 cursor-pointer ${filter.className}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(93, 45, 230, 0.1)",
                  backgroundColor: "rgba(93, 45, 230, 0.05)",
                  border: "1px solid #5D2DE6",
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                />

                <div className="relative h-full p-6 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                      <filter.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex gap-1">
                      {filter.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#5D2DE6] transition-colors">
                      {filter.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {filter.description}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
