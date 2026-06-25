import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, TorusKnot } from '@react-three/drei';

function AnimatedTorusKnot() {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15;
      meshRef.current.rotation.y = t * 0.2;
      meshRef.current.rotation.z = t * 0.05;
    }
  });

  return (
    <TorusKnot ref={meshRef} args={[1.2, 0.4, 150, 20, 2, 3]} scale={1.3}>
      <MeshDistortMaterial
        color="#8b5cf6" // Primary Electric Violet
        distort={0.3}
        speed={1.5}
        roughness={0.1}
        metalness={0.8}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </TorusKnot>
  );
}

function ThreeScene() {
  return (
    <div className="h-[380px] w-full max-w-[450px] mx-auto relative cursor-grab active:cursor-grabbing">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none transform scale-75"></div>
      
      <Suspense fallback={
        <div className="h-full w-full flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/30 border-t-transparent animate-spin mb-4"></div>
            <p className="text-sm text-slate-400 font-light">Loading 3D Canvas...</p>
          </div>
        </div>
      }>
        <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
          <ambientLight intensity={0.7} />
          {/* Main direction light */}
          <directionalLight position={[10, 10, 10]} intensity={1.5} color="#8b5cf6" />
          {/* Fill lights */}
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#06b6d4" />
          <pointLight position={[10, -10, 10]} intensity={0.5} color="#ffffff" />
          <AnimatedTorusKnot />
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={1.8} 
            maxPolarAngle={Math.PI / 2 + 0.3}
            minPolarAngle={Math.PI / 2 - 0.3}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default ThreeScene;