import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectCard({ id, emoji, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, type: "spring" }}
      className="group border border-(--border) rounded-3xl p-8 hover:border-(--accent-border) bg-(--code-bg) hover:bg-(--accent-bg)/50 transition-colors duration-500 text-left shadow-sm relative overflow-hidden h-full flex flex-col justify-between"
    >
      {/* Decorative gradient blur in background */}
      <div className="absolute -right-20 -top-20 w-40 h-40 bg-(--accent) opacity-5 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500"></div>

      <div>
        <div className="text-4xl mb-5">{emoji}</div>
        <h3 className="text-2xl font-bold text-(--text-h) mb-3 tracking-tight">{title}</h3>
        <p className="text-base leading-relaxed opacity-80 mb-8">{description}</p>
      </div>

      <Link
        to={`/project/${id}`}
        className="text-(--accent) font-bold text-sm cursor-pointer hover:underline inline-flex items-center gap-2 w-max"
      >
        <span>View Details</span>
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          className="inline-block"
        >→</motion.span>
      </Link>
    </motion.div>
  );
}