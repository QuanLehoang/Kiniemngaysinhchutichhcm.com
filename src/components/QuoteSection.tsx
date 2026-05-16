import React from 'react';
import { motion } from 'framer-motion';

const QuoteSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-vn-gold/0 via-vn-gold/50 to-vn-gold/0" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Large Quote Icon or Motif */}
          <div className="absolute -top-10 -left-4 text-vn-gold/10 text-8xl font-serif">"</div>

          <p className="text-xl md:text-3xl font-lora text-white/90 italic leading-relaxed md:leading-loose drop-shadow-sm">
            "Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các cháu."
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="h-0.5 bg-vn-gold mx-auto mt-8 mb-4"
          />

          <p className="text-vn-gold font-vietnam font-bold uppercase tracking-widest text-sm md:text-base">
            - Hồ Chí Minh -
          </p>

          <div className="absolute -bottom-10 -right-4 text-vn-gold/10 text-8xl font-serif">"</div>
        </motion.div>
      </div>

      {/* Background motif */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[500px] border border-vn-gold rounded-full" />
        <div className="absolute w-[400px] h-[400px] border border-vn-gold rounded-full" />
      </div>
    </section>
  );
};

export default QuoteSection;
