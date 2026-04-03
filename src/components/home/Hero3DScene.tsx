import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PresentationControls, Float, RoundedBox, Html, ContactShadows, Environment } from '@react-three/drei';

const PhoneModel = () => {
  return (
    <group>
      {/* Phone Body - Changed to a titanium/slate color to contrast with the dark background */}
      <RoundedBox args={[3.2, 6.2, 0.4]} radius={0.15} smoothness={4}>
        <meshPhysicalMaterial 
          color="#475569" 
          metalness={0.8}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.2}
        />
        {/* Screen Bezel (Slightly raised inside) */}
        <RoundedBox args={[3.0, 6.0, 0.41]} radius={0.1} smoothness={4}>
           <meshBasicMaterial color="#000000" />
        </RoundedBox>

        {/* DOM HTML screen overlaying the 3D screen using R3F Html */}
        <Html transform wrapperClass="htmlScreen" distanceFactor={1.5} position={[0, 0, 0.21]} 
          style={{ width: '300px', height: '600px', borderRadius: '2rem', overflow: 'hidden', padding: '1.5rem', backgroundColor: '#09151a', boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)', backfaceVisibility: 'hidden' }}>
          
          <div className="flex justify-between items-center mb-8">
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center border border-white/5">
              <span className="material-symbols-outlined text-tertiary text-sm">person</span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
          </div>
          <div className="mb-8">
            <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mb-1">Balance Actual</p>
            <h3 className="text-3xl font-black text-white">$12,450.00</h3>
          </div>
          {/* Chart Mockup */}
          <div className="bg-surface-container-high rounded-2xl p-4 mb-6 border border-white/5">
            <p className="text-xs font-bold text-white mb-4">Historial de Pagos</p>
            <div className="flex items-end justify-between h-24 gap-2">
              <div className="w-full bg-tertiary/40 rounded-t-md" style={{ height: '60%' }}></div>
              <div className="w-full bg-primary-container rounded-t-md" style={{ height: '85%' }}></div>
              <div className="w-full bg-tertiary/40 rounded-t-md" style={{ height: '45%' }}></div>
              <div className="w-full bg-tertiary/60 rounded-t-md" style={{ height: '70%' }}></div>
              <div className="w-full bg-[#ff6d00]/80 rounded-t-md shadow-[0_0_10px_#ff6d00]" style={{ height: '95%' }}></div>
            </div>
          </div>
          {/* List Items */}
          <div className="space-y-4">
            <div className="bg-surface-container rounded-xl p-3 flex items-center gap-3 border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
              </div>
              <div>
                <p className="text-xs font-bold text-white">Mantenimiento Ago</p>
                <p className="text-[10px] text-on-surface-variant">Completado</p>
              </div>
            </div>
            <div className="bg-surface-container rounded-xl p-3 flex items-center gap-3 border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-container text-sm">pending</span>
              </div>
              <div>
                <p className="text-xs font-bold text-white">Reserva Piscina</p>
                <p className="text-[10px] text-on-surface-variant">Pendiente</p>
              </div>
            </div>
          </div>
        </Html>
      </RoundedBox>
    </group>
  );
};

const Hero3DScene = () => {
  return (
    <div className="w-full h-full min-h-[600px] cursor-grab active:cursor-grabbing" style={{ touchAction: 'none' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Environment preset="city" />
        
        {/* Adds fluid interaction to rotate the 3D model */}
        <PresentationControls 
          global 
          rotation={[0.13, -0.4, 0]} 
          polar={[-0.4, 0.2]} 
          azimuth={[-1, 0.75]} 
          config={{ mass: 2, tension: 400 }} 
          snap={{ mass: 4, tension: 400 }}
        >
          {/* Adds a breathing floating effect */}
          <Float rotationIntensity={0.5} floatIntensity={2} speed={2}>
            <PhoneModel />
          </Float>
        </PresentationControls>
        
        {/* Nice blurry shadow underneath */}
        <ContactShadows position={[0, -4.5, 0]} opacity={0.5} scale={20} blur={2.5} far={4.5} color="#000000" />
      </Canvas>
    </div>
  );
};

export default Hero3DScene;
