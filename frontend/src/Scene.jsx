import { Environment } from "@react-three/drei";
import GlassCard from "./GlassCard";

function Scene() {
  return (
    <>
      {/* Soft ambient light for base visibility */}
      <ambientLight intensity={0.6} />

      {/* Key light for highlights */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
      />

      {/* Fill light for depth */}
      <pointLight
        position={[-5, -5, 5]}
        intensity={0.8}
      />

      {/* Main 3D UI */}
      <GlassCard />

      {/* Environment lighting for glass effect */}
      <Environment preset="city" />
    </>
  );
}

export default Scene;
