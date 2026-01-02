import { Html, RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import axios from "axios";
import FloatingText from "./FloatingText";

function GlassCard() {
  const cardRef = useRef();

  const [marks, setMarks] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Smooth rotation
  useFrame(() => {
    if (cardRef.current) {
      cardRef.current.rotation.y += 0.002;
    }
  });

  // ✅ CONNECT TO RENDER BACKEND USING ENV VARIABLE
  const checkGrade = async () => {
    if (marks === "") return;

    try {
      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/grade`,
        {
          marks: Number(marks)
        }
      );

      setResult(response.data);
    } catch (error) {
      console.error("Backend error:", error);
      alert("Backend not reachable");
    } finally {
      setLoading(false);
    }
  };

  const floatingText = result ? result.grade : "GRADE CHECKER";

  const floatingColor =
    result?.grade === "A+" || result?.grade === "A"
      ? "#00ffcc"
      : result?.grade === "B"
      ? "#4facfe"
      : result?.grade === "C"
      ? "#facc15"
      : result?.grade === "F"
      ? "#ff4d4d"
      : "#00eaff";

  return (
    <>
      <FloatingText text={floatingText} color={floatingColor} />

      <RoundedBox
        ref={cardRef}
        args={[3.6, 2.2, 0.15]}
        radius={0.15}
        smoothness={4}
      >
        <meshPhysicalMaterial
          transmission={1}
          roughness={0.1}
          thickness={0.6}
          ior={1.5}
          clearcoat={1}
          color={floatingColor}
        />

        <Html center>
          <div className="glass-ui">
            <h2>Student Grade</h2>

            <input
              type="number"
              placeholder="Enter marks"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
            />

            <button onClick={checkGrade} disabled={loading}>
              {loading ? "Checking..." : "Check Grade"}
            </button>

            {result && (
              <>
                <p>
                  Grade: <b>{result.grade}</b>
                </p>
                <p>
                  Status: <b>{result.result}</b>
                </p>
              </>
            )}
          </div>
        </Html>
      </RoundedBox>
    </>
  );
}

export default GlassCard;
