import { motion } from 'framer-motion';
import { Video } from 'lucide-react';
import { useRef } from 'react';

function VideoTuLieu() {
  const duong_dan_video = "video/videotulieu.mp4"; 
  const thoi_gian_cho_ref = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hanh_dong_phat_video = () => {
    if (thoi_gian_cho_ref.current) {
      clearTimeout(thoi_gian_cho_ref.current);
    }
    window.dispatchEvent(new CustomEvent('su_kien_nhac_nen', { detail: 'tat' }));
  };

  const hanh_dong_dung_video = () => {
    if (thoi_gian_cho_ref.current) {
      clearTimeout(thoi_gian_cho_ref.current);
    }
    thoi_gian_cho_ref.current = setTimeout(() => {
      window.dispatchEvent(new CustomEvent('su_kien_nhac_nen', { detail: 'bat' }));
    }, 2000);
  };

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        // Chỉnh px-1 (padding-left và padding-right = 4px ~ 1mm) để video tràn sát lề viền ngoài
        className="bg-[#121212]/60 backdrop-blur-md rounded-[2.5rem] border border-white/10 py-6 px-1 sm:py-10 sm:px-1 shadow-2xl flex flex-col items-center text-center"
      >
        {/* Tiêu đề phần xem video */}
        <div className="flex items-center gap-2 text-amber-500/90 mb-4">
          <Video size={18} />
          <span className="text-xs font-semibold tracking-widest uppercase">Video kỉ niệm</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 tracking-tight">
          Mời mọi người xem video ở dưới
        </h2>

        {/* Khung chứa trình phát video player: w-[calc(100%-8px)] đảm bảo luôn cách đều viền đúng 1mm */}
        <div className="relative w-[calc(100%-8px)] max-w-3xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black">
          <video 
            src={duong_dan_video}
            controls
            className="w-full h-full object-contain"
            poster="images/poster_video.jpg"
            onPlay={hanh_dong_phat_video}
            onPause={hanh_dong_dung_video}
            onEnded={hanh_dong_dung_video}
          >
            Trình duyệt của bạn không hỗ trợ phát video này.
          </video>
        </div>

        {/* Dòng ghi công (Credit) nằm ngay phía dưới video */}
        <div className="mt-4 text-gray-500 text-xs tracking-wide italic font-mono">
          Credit: _nt.dhuwng29
        </div>

      </motion.div>
    </section>
  );
}

export default VideoTuLieu;