import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";

// IMPORTANT: you already have style.css, so we use that
import "./style.css";

function App() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 6],
        fov: 40,
      }}
    >
      {/* 3D Scene */}
      <Scene />

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
      />
    </Canvas>
  );
}

export default App;
