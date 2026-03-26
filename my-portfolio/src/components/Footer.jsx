export default function Footer() {
  return (
    <footer className="border-t border-(--border) mt-20 py-8 text-center text-sm">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-6">
        <p className="opacity-70">© {new Date().getFullYear()} Teerapat Ngamkana. All rights reserved.</p>
        <div className="flex gap-6 font-medium">
          <a href="https://github.com/Ballbon" target="_blank" rel="noopener noreferrer" className="text-(--text-h) hover:text-(--accent) transition">
            GitHub
          </a>
          {/* Add your actual LinkedIn URL later if you have one */}
          <a href="#" className="text-(--text-h) hover:text-(--accent) transition">
            LinkedIn
          </a>
          <a href="mailto:teerapat@example.com" className="text-(--text-h) hover:text-(--accent) transition">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
