
import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, Torus, Float, Stars, Sparkles, Cloud } from '@react-three/drei';
import * as THREE from 'three';

// Augment the JSX namespace to recognize Three.js intrinsic elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      meshStandardMaterial: any;
      pointLight: any;
      ambientLight: any;
      directionalLight: any;
      spotLight: any;
      fog: any;
    }
  }
}

const AvatarModel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const planetRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Group>(null);
  
  const { viewport, mouse } = useThree();
  
  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Calculate scroll progress directly in the frame loop
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
    
    // Smooth scroll interpolation
    const targetY = -scrollProgress * (viewport.height * 0.5); 
    
    // Complex Movement Logic based on Scroll sections
    let targetX = 2.5; // Default Hero position
    let targetZ = 0;
    
    // Gestures based on section
    let gestureRotationZ = 0;
    let gestureRotationX = 0;

    if (scrollProgress > 0.1 && scrollProgress <= 0.4) {
      targetX = -2.5; // Move Left (Skills)
      targetZ = 1;
    } else if (scrollProgress > 0.4 && scrollProgress <= 0.7) {
      targetX = 2.5; // Move Right (Projects)
      gestureRotationZ = -0.5; // Tilt to look at projects
    } else if (scrollProgress > 0.7) {
      targetX = 0; // Center (Contact)
      targetZ = 2.5; // Come closer
      gestureRotationX = Math.sin(state.clock.elapsedTime * 8) * 0.1; // Nodding
    }

    // Linear interpolation for smooth transition between positions
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, 0.05);
    
    // Slight floating bob independent of scroll
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, Math.sin(state.clock.elapsedTime * 0.8) * 0.2, 0.1);

    // Apply gestures
    if (planetRef.current) {
        planetRef.current.rotation.y += 0.002; // Spin
        planetRef.current.rotation.z = THREE.MathUtils.lerp(planetRef.current.rotation.z, gestureRotationZ, 0.05);
        planetRef.current.rotation.x = THREE.MathUtils.lerp(planetRef.current.rotation.x, gestureRotationX, 0.05);
    }

    // Atmosphere moves slightly differently for depth
    if (atmosphereRef.current) {
        atmosphereRef.current.rotation.y += 0.001;
    }

    // Rings rotation (Dynamic)
    if (ringsRef.current) {
      ringsRef.current.rotation.z += 0.002;
      ringsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1 + (Math.PI / 2.5);
      ringsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef} position={[2.5, 0, 0]}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
        
        {/* 1. THE PLANET SURFACE (Smooth Sphere) */}
        <Sphere ref={planetRef} args={[1.2, 64, 64]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color="#1f2048" // Void Navy Base
            roughness={0.7} 
            metalness={0.2} 
            emissive="#31326f" // Deep Indigo Glow
            emissiveIntensity={0.2}
          />
        </Sphere>
        
        {/* 2. TECH GRID OVERLAY (Wireframe) */}
        <Sphere args={[1.22, 32, 32]} position={[0, 0, 0]}>
           <meshStandardMaterial 
            color="#00f3ff" 
            wireframe={true} 
            transparent 
            opacity={0.1} 
            side={THREE.DoubleSide}
           />
        </Sphere>

        {/* 3. ATMOSPHERE GLOW (Outer Halo) */}
        <Sphere ref={atmosphereRef} args={[1.4, 64, 64]} position={[0, 0, 0]}>
            <meshStandardMaterial 
                color="#7c3aed"
                transparent
                opacity={0.15}
                side={THREE.BackSide} // Render on inside of sphere to create depth
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </Sphere>

        {/* HALO RINGS */}
        <group ref={ringsRef} rotation={[Math.PI / 3, 0, 0]}>
          {/* Main Ring */}
          <Torus args={[2.2, 0.02, 64, 100]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color="#7c3aed" emissive="#7c3aed" emissiveIntensity={2} toneMapped={false} transparent opacity={0.8} />
          </Torus>
          
          {/* Secondary Ring */}
          <Torus args={[2.8, 0.01, 64, 100]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={2} toneMapped={false} transparent opacity={0.5} />
          </Torus>

          {/* Faint Dust Ring */}
          <Torus args={[2.5, 0.3, 16, 100]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 0.05, 1]}>
              <meshStandardMaterial color="#ffffff" transparent opacity={0.05} blending={THREE.AdditiveBlending} />
          </Torus>
        </group>

        {/* LOCAL LIGHTING */}
        <pointLight position={[-2, 1, 2]} intensity={2} color="#00f3ff" distance={5} />
        <pointLight position={[2, -1, -2]} intensity={2} color="#7c3aed" distance={5} />
      </Float>
    </group>
  );
};

export const AvatarScene: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none h-screen w-full bg-obsidian">
      <React.Suspense fallback={null}>
        {/* R3F Canvas */}
        <Canvas style={{ background: '#030305' }} camera={{ position: [0, 0, 8], fov: 40 }} dpr={[1, 2]}>
            <fog attach="fog" args={['#030305', 5, 30]} />
            
            <ambientLight intensity={0.1} color="#ffffff" />
            {/* Main Sun/Star Light Source */}
            <directionalLight position={[10, 5, 10]} intensity={1.5} color="#ffffff" />
            <spotLight position={[-5, 5, 5]} intensity={2} color="#7c3aed" angle={0.5} penumbra={1} />
            
            {/* STARS AND NEBULA EFFECT */}
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={0.5} />
            <Sparkles count={150} scale={12} size={1.5} speed={0.2} opacity={0.5} color="#00f3ff" />
            
            {/* Nebula Clouds - Subtle colored clouds in background */}
            <Cloud opacity={0.08} speed={0.2} bounds={[20, 2, 1.5]} segments={10} position={[-5, 0, -10]} color="#7c3aed" />
            <Cloud opacity={0.08} speed={0.2} bounds={[20, 2, 1.5]} segments={10} position={[5, 2, -10]} color="#00f3ff" />

            <AvatarModel />
        </Canvas>
      </React.Suspense>
    </div>
  );
};
