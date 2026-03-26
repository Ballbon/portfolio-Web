import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectDetail() {
  const { id } = useParams(); 
  const projectData = {
    "pos-system": { 
      title: "POS System", 
      detail: "โปรเจกต์ระบบขายหน้าร้าน (Point of Sale) ที่ช่วยให้การจัดการร้านค้าและสต็อกสินค้าของคุณง่ายและมีประสิทธิภาพมากขึ้น สร้างขึ้นสำหรับร้านอาหารชาบูบุฟเฟต์ โดยมีการจัดการโต๊ะและการสั่งอาหารผ่านระบบ", 
      URL: "https://github.com/Ballbon/ShabuProject.git",
      emoji: "🏪",
      tags: ["React", "Spring Boot", "MySQL"]
    },
    "robot-autotest": { 
      title: "Autotest Robot", 
      detail: "โปรเจกต์ทดสอบระบบอัตโนมัติ เขียนด้วย Python และ Robot Framework เพื่อช่วยลดเวลาและเพิ่มความแม่นยำในการทดสอบระบบซอฟต์แวร์ พร้อมรองรับการออก Report", 
      URL: "https://github.com/Ballbon/ProjectAutomate-Test",
      emoji: "🤖",
      tags: ["Python", "Robot Framework", "Selenium"]
    }
  };

  const project = projectData[id];  

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto px-6 py-12"
    >
      <Link to="/" className="inline-flex items-center gap-2 text-(--text) hover:text-(--accent) transition font-medium mb-10">
        <span className="text-xl">←</span> Back to Home
      </Link>
      
      <div className="flex items-center gap-6 mb-8">
        <div className="text-6xl bg-(--accent-bg) p-4 rounded-3xl border border-(--accent-border) shadow-inner shadow-(--accent)/10">
          {project.emoji}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-(--text-h) tracking-tight">
          {project.title}
        </h1>
      </div>

      {project.tags && (
        <div className="flex gap-2 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-(--code-bg) border border-(--border) rounded-md text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="bg-(--code-bg) p-8 md:p-10 rounded-3xl border border-(--border) shadow-sm leading-relaxed text-lg">
        <p className="mb-8">{project.detail}</p>
        
        {project.URL && (
          <div className="flex items-center gap-3">
            <span className="font-semibold text-(--text-h)">Repository:</span> 
            <a 
              href={project.URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-(--accent) font-medium hover:underline inline-flex items-center gap-1 bg-(--accent-bg) px-3 py-1 rounded-full text-sm"
            >
              GitHub Link ↗
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}