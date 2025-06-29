"use client";
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Html } from '@react-three/drei';
import { Suspense, useRef } from 'react';

function FloatingBox() {
  const ref = useRef<any>(null);
  // Subtle floating animation
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.2) * 0.15;
    }
  });
  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#38bdf8" />
    </mesh>
  );
}

export default function Unify3DHeader() {
  return (
    <div className="w-full h-[60px] md:h-[80px] sticky top-0 left-0 z-30 bg-transparent flex items-center justify-center" style={{background: 'transparent'}}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} gl={{ alpha: true }} shadows className="w-full h-full">
        <Suspense fallback={<Html center>Loading...</Html>}>
          <FloatingBox />
          <ambientLight intensity={0.7} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
} 