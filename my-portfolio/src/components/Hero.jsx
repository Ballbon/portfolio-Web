import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="about" className="text-left mb-28 flex flex-col md:flex-row items-center gap-12 mt-8">
      <motion.div 
        className="flex-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 bg-(--accent-bg) border border-(--accent-border) rounded-full text-(--accent) text-xs font-bold mb-6 tracking-wide">
          OPEN FOR INTERNSHIP 2026
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-(--text-h) leading-tight mb-6 font-bold text-5xl md:text-6xl tracking-tight">
          Hi, I'm a <span className="text-(--accent)">Frontend Developer</span> 
          <br /> Studying at Maejo University.
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-lg max-w-2xl leading-relaxed mb-8 opacity-90 text-(--text)">
          นักศึกษาคณะวิทยาศาสตร์ ชั้นปีที่ 4 ที่หลงใหลในการเขียน Code และการทำ Automated Testing 
          ผมเน้นการสร้าง Interface ที่ใช้งานง่ายและมีคุณภาพด้วย React และ Robot Framework
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
          {['React', 'Tailwind CSS', 'Robot Framework', 'Spring MVC'].map((skill) => (
            <code key={skill} className="bg-(--code-bg) px-4 py-1.5 rounded-lg text-sm font-medium border border-(--border) text-(--text-h) shadow-sm hover:border-(--accent) transition-colors">
              {skill}
            </code>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className="hidden md:flex flex-1 justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-(--accent-bg) to-(--accent) shadow-2xl p-2 relative">
          <div className="w-full h-full rounded-full bg-(--bg) overflow-hidden border-4 border-(--bg) flex items-center justify-center relative">
            {/* You can replace this gradient div with a real image tag next time: <img src="/profile.jpg" alt="Profile" className="object-cover w-full h-full" /> */}
            <div className="absolute inset-0 bg-gradient-to-br from-(--accent-bg) to-transparent opacity-50"></div>
            <span className="text-6xl">💻</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}