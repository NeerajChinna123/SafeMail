import { motion } from "framer-motion";
import React from "react";

import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from "react-particle-image";

const animationVariants = {
  initial: { opacity: 0 }, // Starting position off-screen (above)
  animate: { opacity: 1 }, // Ending position (on-screen)
};

const animationTransition = {
  duration: 1.8, // Duration of the animation
  delay: 5, // Delay before the animation starts (in seconds)
};

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "black",
  // color: ({ x, y, image }) => "orange",
  radius: () => Math.random() * 1.2 + 0.5,
  mass: () => 30,
  friction: () => 2,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 10);
};

export function HumanParticle() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={animationVariants}
      transition={animationTransition}
    >
      <ParticleImage
        className="md:w-[35rem] md:h-[35rem] lg:mt-[-1rem] opacity-80 mt-6 md:mt-8"
        src={"/image.png"}
        scale={0.45}
        entropy={6}
        maxParticles={10000}
        particleOptions={particleOptions}
        mouseMoveForce={motionForce}
        touchMoveForce={motionForce}
        backgroundColor="transparent"
      />
    </motion.div>
  );
}
