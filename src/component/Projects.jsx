import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const projects = [
  { id: 1, video: "https://res.cloudinary.com/ddomtfwea/video/upload/v1772383352/2ND_VDO_1_js7yko.mp4" },
  { id: 2, video: "https://res.cloudinary.com/ddomtfwea/video/upload/v1772384956/3RD_VDO_gjwstt.mp4" },
  { id: 3, video: "https://res.cloudinary.com/ddomtfwea/video/upload/v1772385835/1ST_VDO_ymtr55.mp4" },
  { id: 4, video: "https://res.cloudinary.com/ddomtfwea/video/upload/v1772385902/5TH_VDO_1_wopfsu.mp4" },
  { id: 5, video: "https://res.cloudinary.com/ddomtfwea/video/upload/v1772385935/4RTH_VDO_jsfb6e.mp4" },
  { id: 6, video: "https://res.cloudinary.com/ddomtfwea/video/upload/v1772386238/1_1_yf5gm1.mp4" },
  { id: 7, video: "https://res.cloudinary.com/ddomtfwea/video/upload/v1772386458/Freya_s_Procreate_fbqvqr.mp4" },
  { id: 8, video: "https://res.cloudinary.com/ddomtfwea/video/upload/v1772386471/1_lyosxx.mp4" },
  { id: 9, video: "https://res.cloudinary.com/ddomtfwea/video/upload/v1772386506/3_oabwum.mp4" },
  { id: 10, video: "https://res.cloudinary.com/ddomtfwea/video/upload/v1772386448/The_Grill_father_mgwcml.mp4" },
];

const Projects = () => {
  const videoRefs = useRef([]);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);

    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === swiper.realIndex) {
        video.muted = true;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
        video.controls = false;
      }
    });
  };

  const handleVideoClick = async (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    // Stop slider autoplay
    swiperRef.current?.autoplay.stop();

    video.muted = false;
    video.controls = true;

    try {
      await video.requestFullscreen();
    } catch (err) {}

    video.play();

    // When fullscreen exits
    const exitHandler = () => {
      if (!document.fullscreenElement) {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
        video.controls = false;
        swiperRef.current?.autoplay.start();
        document.removeEventListener("fullscreenchange", exitHandler);
      }
    };

    document.addEventListener("fullscreenchange", exitHandler);
  };

  return (
    <section
      id="projects"
      className="relative py-20 bg-[#050c0f] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold uppercase tracking-wider
            bg-gradient-to-r from-cyan-400 to-blue-500
            bg-clip-text text-transparent text-center mb-20">
          Projects
        </h2>

        <Swiper
          modules={[EffectCoverflow, Navigation, Autoplay]}
          effect="coverflow"
          centeredSlides
          loop
          slidesPerView={5}
          spaceBetween={30}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            handleSlideChange(swiper);
          }}
          onSlideChange={handleSlideChange}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
        >
          {projects.map((p, i) => (
            <SwiperSlide key={p.id} className="flex justify-center">
              <div className="relative w-full max-w-[350px] aspect-[9/16] rounded-xl overflow-hidden bg-black border border-[#1f2937] shadow-lg">
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  src={p.video}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onClick={() => handleVideoClick(i)}
                  className={`w-full h-full object-cover cursor-pointer transition-all duration-300 ${
                    activeIndex === i ? "scale-105" : "scale-95 opacity-70"
                  }`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Projects;