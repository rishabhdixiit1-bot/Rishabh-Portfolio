import React from "react";

export default function Loader() {
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      background: "#050505",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
    }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap');

        .l-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,210,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,210,255,0.06) 1px, transparent 1px);
          background-size: 48px 48px;
          -webkit-mask-image: radial-gradient(ellipse 75% 75% at 50% 50%, black 40%, transparent 100%);
          mask-image: radial-gradient(ellipse 75% 75% at 50% 50%, black 40%, transparent 100%);
          pointer-events: none;
        }

        @keyframes dropAndShift {
          0%     { transform: translate(0px,   15px); }
          16.67% { transform: translate(80px,  13px); }
          33.34% { transform: translate(40px,  10px); }
          50.01% { transform: translate(40px, -30px); }
          66.68% { transform: translate(40px,  55px); }
          83.35% { transform: translate(40px,  10px); }
          100%   { transform: translate(0px,   15px); }
        }

        @keyframes bubbleGlint {
          0%      { top: 3px; left: 4px; opacity: 0; }
          8.335%  { top: 6px; left: 6px; opacity: 0.5; }
          16.67%  { top: 3px; left: 4px; opacity: 0; }
          33.34%  { top: 3px; left: 4px; opacity: 0.5; }
          50.01%  { top: 3px; left: 4px; opacity: 0; }
          58.345% { top: 6px; left: 6px; opacity: 0.5; }
          66.68%  { top: 3px; left: 4px; opacity: 0; }
          83.35%  { top: 6px; left: 6px; opacity: 0.5; }
          100%    { top: 3px; left: 4px; opacity: 0; }
        }

        @keyframes rGlow {
          0%, 100% { text-shadow: 0 0 10px #00d2ff, 0 0 25px rgba(0,210,255,0.7), 0 0 50px rgba(0,210,255,0.4); }
          50%       { text-shadow: 0 0 20px #00d2ff, 0 0 45px rgba(0,210,255,1),   0 0 80px rgba(0,210,255,0.6); }
        }

        .Strich1 {
          position: absolute;
          width: 130px; height: 50px;
          background: #050505;
          border-radius: 25px;
          transform: rotate(45deg);
          box-shadow: 0 4px 10px rgba(0,0,0,0.6);
          z-index: 0;
        }
        .Strich2 {
          position: absolute;
          width: 130px; height: 50px;
          background: #050505;
          border-radius: 25px;
          transform: rotate(-90deg);
          box-shadow: 0 4px 10px rgba(0,0,0,0.6);
          z-index: 0;
        }

        .bubble {
          position: absolute;
          top: 0; left: 15px;
          width: 20px; height: 20px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #ffb3c1, #e64980, #ff8787);
          animation: dropAndShift 5s ease-in-out infinite;
          z-index: 1;
          box-shadow: 0 0 14px rgba(230,73,128,0.9), 0 0 28px rgba(230,73,128,0.5);
        }
        .bubble1 {
          position: absolute;
          top: 0; left: 8px;
          width: 20px; height: 20px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #edb3ff, #ac49e6, #fb87ff);
          animation: dropAndShift 6s ease-in-out infinite;
          z-index: 2;
          box-shadow: 0 0 14px rgba(172,73,230,0.9), 0 0 28px rgba(172,73,230,0.5);
        }
        .bubble2 {
          position: absolute;
          top: 0; left: 12px;
          width: 20px; height: 20px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #b3d8ff, #4963e6, #87a7ff);
          animation: dropAndShift 4s ease-in-out infinite;
          z-index: 3;
          box-shadow: 0 0 14px rgba(73,99,230,0.9), 0 0 28px rgba(73,99,230,0.5);
        }
        .bubble3 {
          position: absolute;
          top: 0; left: 10px;
          width: 20px; height: 20px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #b3ffbc, #35a32f, #75ba61);
          animation: dropAndShift 7s ease-in-out infinite;
          z-index: 4;
          box-shadow: 0 0 14px rgba(53,163,47,0.9), 0 0 28px rgba(53,163,47,0.5);
        }
      `}</style>

      {/* Ambient glow */}
      <div style={{
        position: "absolute",
        width: 400, height: 400,
        background: "rgba(0,210,255,0.04)",
        borderRadius: "50%",
        filter: "blur(120px)",
        pointerEvents: "none",
      }} />

      {/* Grid */}
      <div className="l-grid" />

      {/* R + Bubbles */}
      <div style={{
        position: "relative",
        width: 160, height: 160,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
      }}>

        {/* R */}
        <span style={{
          fontFamily: "'Orbitron', monospace",
          fontSize: 90,
          fontWeight: 900,
          color: "transparent",
          WebkitTextStroke: "2.5px #00d2ff",
          animation: "rGlow 2s ease-in-out infinite",
          userSelect: "none",
          position: "relative",
          zIndex: 0,
          letterSpacing: "-4px",
        }}>R</span>

        {/* Bubbles */}
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 5,
        }}>
          <div className="Strich1">
            <div className="Strich2">
              <div className="bubble" />
              <div className="bubble1" />
              <div className="bubble2" />
              <div className="bubble3" />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}