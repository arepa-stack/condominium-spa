import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
  iconColor?: string;
  showLearnMore?: boolean;
  largeIcon?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  className = "",
  iconColor = "text-primary-container",
  showLearnMore = false,
  largeIcon = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className={className} style={{ perspective: '1000px' }}>
      <motion.div 
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="bg-surface-container-high rounded-2xl p-8 relative overflow-hidden group border border-tertiary-container/5 hover:border-tertiary-container/30 transition-colors h-full w-full"
      >
        <div className="relative z-10 flex flex-col h-full justify-between" style={{ transform: "translateZ(40px)" }}>
          <div>
            <div className={`mb-6 inline-flex p-4 rounded-2xl bg-surface-container-highest neon-glow-blue w-fit`}>
              <span className={`material-symbols-outlined ${largeIcon ? 'text-4xl' : 'text-3xl'} ${iconColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                {icon}
              </span>
            </div>
            <h3 className={`${largeIcon ? 'text-2xl' : 'text-xl'} font-black mb-4`}>{title}</h3>
            <p className="text-on-surface-variant text-sm flex-grow">{description}</p>
          </div>
          {showLearnMore && (
            <div className="mt-8 flex items-center gap-2 text-tertiary font-bold text-sm uppercase">
              Saber Más <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          )}
        </div>
        {largeIcon && (
          <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:opacity-20 transition-opacity" style={{ transform: "translateZ(10px)" }}>
            <span className="material-symbols-outlined text-[160px]">payments</span>
          </div>
        )}
      </motion.div>
    </div>
  );
};

const FeatureGrid: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-8">
      <h2 className="text-4xl font-black mb-16 tracking-tight flex items-center gap-4">
        <span className="w-12 h-1.5 bg-tertiary-container rounded-full"></span>
        Funcionalidades Premium
      </h2>
      <div className="bento-grid">
        {/* Caja Chica */}
        <FeatureCard
          title="Caja Chica"
          description="Control total de gastos comunes y fondos de reserva. Visualiza cada centavo en tiempo real."
          icon="database"
          className="col-span-6 md:col-span-3 lg:col-span-4"
          showLearnMore={true}
          largeIcon={true}
        />
        {/* Registrar Pago */}
        <FeatureCard
          title="Registrar Pago"
          description="Sube tu comprobante en segundos desde la cámara de tu celular."
          icon="qr_code_scanner"
          className="col-span-6 md:col-span-3 lg:col-span-2"
          iconColor="text-tertiary-container"
        />
        {/* Facturación */}
        <FeatureCard
          title="Facturación"
          description="Generación automática de facturas legales y reportes en PDF."
          icon="description"
          className="col-span-6 md:col-span-2"
          iconColor="text-primary"
        />
        {/* Recibos */}
        <FeatureCard
          title="Recibos"
          description="Historial de recibos digitales siempre disponible para descarga."
          icon="cloud_download"
          className="col-span-6 md:col-span-2"
          iconColor="text-tertiary"
        />
        {/* Historial */}
        <FeatureCard
          title="Historial"
          description="Consulta estados de cuenta pasados sin buscar carpetas físicas."
          icon="history"
          className="col-span-6 md:col-span-2"
        />
      </div>
    </section>
  );
};

export default FeatureGrid;
