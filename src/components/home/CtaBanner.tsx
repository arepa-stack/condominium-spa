import React from 'react';
import { motion } from 'framer-motion';

interface CtaBannerProps {
  onDownloadClick: () => void;
}

const CtaBanner: React.FC<CtaBannerProps> = ({ onDownloadClick }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 pb-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-white/10"
        style={{
          background:
            'radial-gradient(80% 80% at 50% 0%, rgba(253, 108, 0, 0.18) 0%, transparent 60%), linear-gradient(180deg, #0E0E11 0%, #08080A 100%)',
        }}
      >
        {/* Dot pattern */}
        <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

        {/* Top gradient line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary-container/60 to-transparent" />

        <div className="relative px-8 md:px-14 py-16 md:py-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-full text-xs font-medium text-on-surface-variant mb-6">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-status-success animate-ping opacity-60" />
              <span className="relative rounded-full w-2 h-2 bg-status-success" />
            </span>
            APK disponible ahora
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-on-surface leading-[1.05] mb-5 max-w-2xl">
            Lleva tu edificio al<br />
            <span className="text-shimmer">siguiente nivel.</span>
          </h2>

          <p className="text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed mb-9">
            Únete a los condominios que ya gestionan todo desde Apto.
            Solicita tu acceso y recibe la APK en minutos.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onDownloadClick}
              className="btn-primary px-8 py-4 rounded-xl font-bold text-base inline-flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined fill-1">download</span>
              Solicitar APK gratis
            </button>
            <a
              href="#features"
              className="btn-ghost px-8 py-4 rounded-xl font-semibold text-base inline-flex items-center justify-center gap-2"
            >
              Ver funcionalidades
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaBanner;
