import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
          <img
            src="images/LacoVn.png"
            alt="Cờ Việt Nam"
            className="h-30 w-auto object-contain drop-shadow-[0_0_40px_rgba(218,37,29,0.8)]"
          />
        </div>

        <p className="text-white/80 font-lora text-lg md:text-xl italic mb-4">
          "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh"
        </p>

        <div className="w-12 h-0.5 bg-vn-gold mx-auto mb-8" />

        <p className="text-white/30 text-xs font-vietnam uppercase tracking-widest">
          &copy; {new Date().getFullYear()} - KỶ NIỆM 136 NĂM NGÀY SINH CHỦ TỊCH HỒ CHÍ MINH (19/5/1890 – 19/5/2026)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
