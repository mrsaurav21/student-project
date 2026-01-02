import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function FloatingText({ text, color }) {
  const textRef = useRef();

  // Floating animation (up & down)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (textRef.current) {
      textRef.current.position.y = 1.6 + Math.sin(t) * 0.15;
    }
  });

  return (
    <Text
      ref={textRef}
      position={[0, 1.6, 0]}
      fontSize={0.7}
      color={color}
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  );
}

export default FloatingText;
