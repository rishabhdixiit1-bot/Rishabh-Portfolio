import { Player } from "@lottiefiles/react-lottie-player";
import flameAnimation from "./flame.json"; // Get flame JSON from lottiefiles.com

export default function IconWithFlame() {
  return (
    <div className="relative w-24 h-24">
      <Player
        autoplay
        loop
        src={flameAnimation}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <img src="/your-icon.png" alt="icon" className="relative z-10" />
    </div>
  );
}
