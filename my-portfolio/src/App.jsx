import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './pages/ProjectDetail';
import Footer from './components/Footer';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

function HomePage() {
  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto px-6 py-12 md:py-20"
    >
      <Hero />
      
      <div className="mb-10 mt-16 flex items-center gap-4">
        <h2 className="text-3xl font-bold text-(--text-h) tracking-tight">Featured Projects</h2>
        <div className="h-px bg-(--border) flex-1 ml-4 hidden sm:block"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <ProjectCard 
            id="pos-system"
            emoji="🏪" 
            title="POS System Project" 
            description="โปรเจกต์ระบบขายหน้าร้านที่ช่วยให้การจัดการร้านค้าของคุณง่ายขึ้นและมีประสิทธิภาพมากขึ้น" 
          />
        <ProjectCard 
          id="robot-autotest" 
          emoji="🤖" 
          title="Autotest Robot" 
          description="โปรเจกต์ทดสอบระบบอัตโนมัติที่ช่วยลดเวลาและเพิ่มความแม่นยำ" 
        />
      </div>
    </motion.main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-(--bg) text-(--text) transition-colors duration-300 flex flex-col font-sans selection:bg-(--accent) selection:text-white">
        <Navbar />
        <div className="flex-1 w-full">
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;