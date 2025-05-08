import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A1531] text-white py-10 px-4 mt-auto relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-sm opacity-80">© 2025. All Rights Reserved</span>
        <div className="flex gap-8 text-sm">
          <a href="/privacy" className="opacity-70 hover:underline transition">Privacy Policy</a>
          <a href="/terms" className="opacity-70 hover:underline transition">Terms Of Service</a>
        </div>
      </div>
    </footer>
  );
} 