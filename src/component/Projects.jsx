import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const projects = [
  { video: "/assets/1ST VDO .mp4" },
  { video: "/assets/2ND VDO.mp4" },
  { video: "/assets/3RD VDO.mp4" },
  { video: "/assets/4RTH VDO.mp4" },
  { video: "/assets/5TH VDO.mp4" },
  { video: "/assets/VIP 2 (1).mp4" },
];

const Projects = () => {
  const videoRefs = useRef([]);

  const handleSlideChange = (swiper) => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === swiper.realIndex) {
        video.muted = true; // 🔇 Always muted in slider
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
        video.muted = true; // 🔇 Keep others muted
      }
    });
  };

  const handleVideoClick = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    video.controls = true;
    video.style.objectFit = "contain";

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  };

  const handleFullscreenChange = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (document.fullscreenElement) {
      video.muted = false; // 🔊 Sound ON only in fullscreen
      video.play();
    } else {
      video.muted = true; // 🔇 Sound OFF when exit fullscreen
      video.controls = false;
      video.style.objectFit = "cover";
    }
  };

  return (
    <section
      id="projects"
      className="relative py-24 bg-[#050c0f] overflow-hidden"
    >
      <div className="relative max-w-[950px] mx-auto z-10">
        <Swiper
          modules={[EffectCoverflow, Navigation, Autoplay]}
          effect="coverflow"
          centeredSlides
          loop
          slidesPerView={3}
          spaceBetween={-20}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 10,
            depth: 140,
            modifier: 1,
            slideShadows: false,
          }}
          navigation
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => handleSlideChange(swiper)}
        >
          {projects.map((p, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <div className="relative w-[230px] aspect-[9/16] cursor-pointer overflow-hidden rounded-xl">
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  src={p.video}
                  muted
                  loop
                  playsInline
                  onClick={() => handleVideoClick(i)}
                  onFullscreenChange={() => handleFullscreenChange(i)}
                  className="absolute inset-0 w-full h-full object-cover"
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