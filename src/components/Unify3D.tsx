"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import { Suspense } from 'react';

function FancyShapes() {
  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh castShadow receiveShadow position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial color="#6d28d9" metalness={0.6} roughness={0.2} />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh castShadow receiveShadow position={[-2, 1, -1]}>
          <torusKnotGeometry args={[0.5, 0.18, 100, 16]} />
          <meshStandardMaterial color="#14b8a6" metalness={0.7} roughness={0.3} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh castShadow receiveShadow position={[2, -1, 1]}>
          <octahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial color="#f59e42" metalness={0.5} roughness={0.4} />
        </mesh>
      </Float>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      <Environment preset="city" />
    </>
  );
}

export default function Unify3D() {
  return (
    <div className="w-full h-[320px] md:h-[400px] rounded-2xl overflow-hidden" style={{background: 'transparent'}}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} shadows gl={{ alpha: true }}>
        <Suspense fallback={null}>
          <FancyShapes />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
        </Suspense>
      </Canvas>
    </div>
  );
} 