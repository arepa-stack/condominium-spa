import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    icon: 'app_registration',
    title: 'Solicita tu acceso',
    description: 'Completa el formulario con los datos de tu edificio. Activamos tu cuenta en menos de 24 horas.',
    iconBg: 'bg-secondary-fixed',
    iconColor: 'text-secondary-container',
  },
  {
    number: '02',
    icon: 'download',
    title: 'Descarga la app',
    description: 'Instala el APK directamente en Android 8.0+. Sin pasar por Play Store, sin configuraciones complicadas.',
    iconBg: 'bg-[#1E3A8A]/50',
    iconColor: 'text-[#93C5FD]',
  },
  {
    number: '03',
    icon: 'rocket_launch',
    title: 'Gestiona tu edificio',
    description: 'Paga facturas, revisa la cartelera, vota presupuestos y consulta tu historial desde un único lugar.',
    iconBg: 'bg-[#064E3B]/50',
    iconColor: 'text-[#6EE7B7]',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="relative max-w-7xl mx-auto px-6 md:px-8 py-24">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-full text-xs font-medium text-on-surface-variant mb-6">
          <span className="material-symbols-outlined fill-1 text-primary-container" style={{ fontSize: '14px' }}>route</span>
          Proceso simple
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-on-surface leading-[1.05] mb-5">
          Empieza en <span className="text-shimmer">3 pasos.</span>
        </h2>
        <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
          Sin instalaciones complejas. Sin migraciones. Solo descargar y empezar.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-[44px] left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="card p-7 relative"
          >
            {/* Big number watermark */}
            <span className="absolute top-5 right-6 text-7xl font-black text-white/[0.04] tracking-tighter select-none">
              {step.number}
            </span>

            {/* Icon */}
            <div className={`relative w-14 h-14 ${step.iconBg} rounded-2xl flex items-center justify-center ring-1 ring-white/10 mb-5`}>
              <span className={`material-symbols-outlined fill-1 ${step.iconColor}`} style={{ fontSize: '26px' }}>{step.icon}</span>
            </div>

            {/* Step number small label */}
            <p className="text-[10px] font-bold text-primary-container uppercase tracking-widest mb-2">Paso {step.number}</p>
            <h3 className="text-xl font-bold text-on-surface mb-2 tracking-tight">{step.title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
