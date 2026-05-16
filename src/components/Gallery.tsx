import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { url: 'images/Anh1.png', title: 'Bác Hồ đọc tuyên ngôn độc lập', desc: 'Khoảnh khắc lịch sử tại Quảng trường Ba Đình ngày 2/9/1945.', size: 'md:col-span-2 md:row-span-2' },
  { url: 'images/AnhBacdanglamviectaiBacBo.jpg', title: 'Bác Hồ làm việc', desc: 'Bác Hồ làm việc trong hang đá ở Việt Bắc năm 1951.', size: 'md:col-span-1 md:row-span-1' },
  { url: 'images/Bacvoithieunhi.png', title: 'Bác Hồ với thiếu nhi', desc: 'Hình ảnh Bác Hồ với thiếu niên, nhi đồng Việt Nam.', size: 'md:col-span-1 md:row-span-1' },
  { url: 'images/LoidaycuaBacvecaytrong.png', title: 'Bác Hồ giữa thiên nhiên', desc: 'Lối sống giản dị, thanh cao và tình yêu thiên nhiên của Bác.', size: 'md:col-span-2 md:row-span-1' },
  { url: 'images/AnhBac6.jpg', title: 'Chủ tịch Hồ Chí Minh về thăm quê hương Nghệ An lần thứ hai (1961)', desc: 'Khoảnh khắc xúc động này thể hiện tình cảm gắn bó máu thịt, sâu nặng của vị Lãnh tụ dành cho quê hương xứ Nghệ.', size: 'md:col-span-1 md:row-span-2' },
  { url: 'images/AnhBac2.jpg', title: 'Bác Hồ thăm đơn vị pháo cao xạ bảo vệ vùng trời Bắc Bộ (1964)', desc: 'Chủ tịch Hồ Chí Minh đến thăm và động viên các chiến sĩ trận địa pháo cao xạ bảo vệ vùng trời Thái Nguyên năm 1964.', size: 'md:col-span-1 md:row-span-1' },
  { url: 'images/AnhBac.jpg', title: 'Bác Hồ trong Chiến dịch Biên giới Thu Đông 1950', desc: 'Chủ tịch Hồ Chí Minh trực tiếp quan sát và chỉ đạo trận đánh Đông Khê trong Chiến dịch Biên giới Thu Đông năm 1950.', size: 'md:col-span-1 md:row-span-1' },
  { url: 'images/AnhBac3.jpg', title: 'Tình yêu thương bao la của Bác Hồ dành cho thiếu niên, nhi đồng', desc: 'Hình ảnh Chủ tịch Hồ Chí Minh ôm hôn em bé tại chiến khu Việt Bắc thể hiện sự giản dị, gần gũi và tình cảm nồng ấm của Người.', size: 'md:col-span-1 md:row-span-2' },
  { url: 'images/HinhanhBacchupcungcacnhanvatnoitieng.jpg', title: 'Ảnh lưu niệm', desc: 'Bác chụp cùng các lãnh đạo và sĩ quan quân đội.', size: 'md:col-span-2 md:row-span-1' },
  { url: 'images/AnhBac4.jpg', title: 'Bác Hồ với thiếu nhi các dân tộc tại Chiến khu Việt Bắc (1954)', desc: 'Chủ tịch Hồ Chí Minh đeo khăn quàng đỏ, nở nụ cười hiền hậu giữa niềm vui tươi, phấn khởi của các em nhỏ vùng cao.', size: 'md:col-span-1 md:row-span-1' },
  { url: 'images/AnhBac5.jpg', title: 'Bác Hồ với các đại biểu quốc tế tại Thủ đô Hà Nội', desc: 'Chủ tịch Hồ Chí Minh giản dị, phong thái ung dung tự tại khi đón tiếp và trò chuyện cùng những người bạn quốc tế.', size: 'md:col-span-1 md:row-span-1' },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-vn-gold font-dancing text-4xl mb-2">Khoảnh khắc quý giá</h3>
          <h2 className="text-3xl md:text-5xl font-vietnam font-bold text-white uppercase tracking-tight">Hình ảnh tư liệu</h2>
          <div className="w-24 h-1 bg-vn-red mx-auto mt-4 rounded-full" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 5) * 0.1 }}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer shadow-xl ${img.size}`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <h4 className="text-vn-gold font-bold text-lg mb-1">{img.title}</h4>
                <p className="text-white/80 text-xs font-inter line-clamp-2">{img.desc}</p>
              </div>

              <div className="absolute inset-0 border-2 border-vn-gold/0 group-hover:border-vn-gold/30 rounded-2xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
