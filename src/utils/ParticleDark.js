import { useCallback } from "react";
import Particles from 'react-tsparticles';
import particlesDarkConfig from "./particlesDarkConfig";
import { loadFull } from "tsparticles";

const ParticleDark = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);
  return (
        <Particles 
          init={particlesInit} 
          options={particlesDarkConfig}
        />
  )
}

export default ParticleDark;