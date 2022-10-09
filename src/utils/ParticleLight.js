import { useCallback } from "react";
import Particles from 'react-tsparticles';
import particlesLightConfig from "./particlesLightConfig";
import { loadFull } from "tsparticles";

const ParticleLight = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);
  return (
        <Particles 
          options={particlesLightConfig}
          init={particlesInit} 
        />
  )
}

export default ParticleLight;