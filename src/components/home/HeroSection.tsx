import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onDownloadClick: () => void;
}

// ── Phone mockup (app real) ────────────────────────────────────────────────

const PhoneMockup: React.FC = () => (
  <div className="relative w-[280px] md:w-[300px]">
    {/* Outer glow */}
    <div className="absolute -inset-12 bg-primary-container/20 blur-[80px] rounded-full pointer-events-none" />

    {/* Phone frame */}
    <div className="relative bg-[#0A0A0C] rounded-[2.6rem] p-2 shadow-[0_50px_120px_-20px_rgba(253,108,0,0.35),0_30px_60px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
      {/* Side highlight */}
      <div className="absolute inset-0 rounded-[2.6rem] ring-1 ring-white/5 pointer-events-none" />

      <div className="bg-background rounded-[2.2rem] overflow-hidden relative" style={{ height: '600px' }}>
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#0A0A0C] rounded-b-2xl z-20" />

        {/* Status bar */}
        <div className="flex justify-between items-center px-6 pt-3 pb-2 text-[10px] font-bold text-on-surface-variant">
          <span>9:41</span>
          <div className="flex gap-1.5 items-center">
            <span className="material-symbols-outlined fill-1" style={{ fontSize: '12px' }}>signal_cellular_alt</span>
            <span className="material-symbols-outlined fill-1" style={{ fontSize: '12px' }}>wifi</span>
            <span className="material-symbols-outlined fill-1" style={{ fontSize: '12px' }}>battery_5_bar</span>
          </div>
        </div>

        <div className="px-5">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-[10px] font-semibold text-on-surface-variant">Hola,</p>
              <p className="text-base font-extrabold text-on-surface tracking-tight">Diego García</p>
              <p className="text-[10px] text-on-surface-muted font-medium">India Palace · Apt 401</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-container to-secondary-container flex items-center justify-center ring-2 ring-primary-container/30">
              <span className="material-symbols-outlined fill-1 text-white" style={{ fontSize: '18px' }}>person</span>
            </div>
          </div>

          {/* Balance card */}
          <div className="relative bg-gradient-to-br from-primary-container to-[#E65100] rounded-2xl p-4 mb-4 overflow-hidden">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full" />
            <div className="absolute -right-2 -bottom-8 w-32 h-32 bg-white/5 rounded-full" />
            <p className="text-[10px] font-bold text-white/80 uppercase tracking-widest mb-1.5">Deuda actual</p>
            <p className="text-3xl font-black text-white mb-2 tracking-tight">$1,250<span className="text-lg text-white/70">.00</span></p>
            <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-status-warning" />
              <p className="text-[9px] text-white font-bold">2 facturas pendientes</p>
            </div>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            {[
              { icon: 'payments',                 label: 'Pagar',       bg: 'bg-secondary-fixed', fg: 'text-secondary' },
              { icon: 'history',                  label: 'Historial',   bg: 'bg-tertiary-container/60', fg: 'text-tertiary' },
              { icon: 'account_balance_wallet',   label: 'Presupuesto', bg: 'bg-[#1E3A8A]/40', fg: 'text-[#93C5FD]' },
              { icon: 'campaign',                 label: 'Cartelera',   bg: 'bg-[#064E3B]/40', fg: 'text-[#6EE7B7]' },
            ].map((a) => (
              <div key={a.label} className="flex flex-col items-center gap-1">
                <div className={`w-10 h-10 rounded-xl ${a.bg} flex items-center justify-center`}>
                  <span className={`material-symbols-outlined fill-1 ${a.fg}`} style={{ fontSize: '18px' }}>{a.icon}</span>
                </div>
                <span className="text-[8px] font-bold text-on-surface-variant text-center leading-tight">{a.label}</span>
              </div>
            ))}
          </div>

          {/* Recent activity */}
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-extrabold text-on-surface uppercase tracking-widest">Recientes</p>
            <span className="text-[9px] text-primary-container font-bold">Ver todo</span>
          </div>
          <div className="space-y-1.5">
            {[
              { icon: 'check_circle', title: 'Mantenimiento · Jul', amount: '$350', status: 'Pagado', ok: true },
              { icon: 'pending',      title: 'Agua · Ago',          amount: '$180', status: 'Pendiente', ok: false },
              { icon: 'check_circle', title: 'Administración',      amount: '$220', status: 'Pagado', ok: true },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-2.5 bg-surface-container-low rounded-xl p-2.5 border border-white/[0.04]">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${t.ok ? 'bg-status-success/15' : 'bg-status-warning/15'}`}>
                  <span className={`material-symbols-outlined fill-1 ${t.ok ? 'text-status-success' : 'text-status-warning'}`} style={{ fontSize: '14px' }}>{t.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold text-on-surface truncate">{t.title}</p>
                  <p className={`text-[8px] font-semibold ${t.ok ? 'text-status-success' : 'text-status-warning'}`}>{t.status}</p>
                </div>
                <span className="text-[10px] font-extrabold text-on-surface">${t.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Floating chip — Presupuesto */}
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute -left-16 top-32 card px-3 py-2.5 flex items-center gap-2 z-10"
    >
      <div className="w-8 h-8 bg-[#1E3A8A]/50 rounded-lg flex items-center justify-center ring-1 ring-[#3B82F6]/30">
        <span className="material-symbols-outlined fill-1 text-[#93C5FD]" style={{ fontSize: '16px' }}>account_balance_wallet</span>
      </div>
      <div className="pr-1">
        <p className="text-[10px] font-bold text-on-surface leading-tight">Presupuesto</p>
        <p className="text-[8px] text-status-warning font-bold">1 en votación</p>
      </div>
    </motion.div>

    {/* Floating chip — Cartelera */}
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
      className="absolute -right-14 bottom-40 card px-3 py-2.5 flex items-center gap-2 z-10"
    >
      <div className="w-8 h-8 bg-[#064E3B]/50 rounded-lg flex items-center justify-center ring-1 ring-[#10B981]/30">
        <span className="material-symbols-outlined fill-1 text-[#6EE7B7]" style={{ fontSize: '16px' }}>campaign</span>
      </div>
      <div className="pr-1">
        <p className="text-[10px] font-bold text-on-surface leading-tight">Cartelera</p>
        <p className="text-[8px] text-status-info font-bold">3 nuevos avisos</p>
      </div>
    </motion.div>

    {/* Floating chip — Pago confirmado */}
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
      className="absolute -right-8 -top-6 card px-3 py-2 flex items-center gap-2 z-10"
    >
      <div className="w-7 h-7 bg-status-success/15 rounded-full flex items-center justify-center">
        <span className="material-symbols-outlined fill-1 text-status-success" style={{ fontSize: '14px' }}>check_circle</span>
      </div>
      <p className="text-[10px] font-bold text-on-surface pr-1">Pago confirmado</p>
    </motion.div>
  </div>
);

// ── HeroSection ────────────────────────────────────────────────────────────

const HeroSection: React.FC<HeroSectionProps> = ({ onDownloadClick }) => {
  return (
    <section id="hero" className="relative max-w-7xl mx-auto px-6 md:px-8 pt-12 md:pt-20 pb-20">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Pill */}
          <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-full text-xs font-medium text-on-surface-variant mb-7 backdrop-blur-sm">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-status-success animate-ping opacity-60" />
              <span className="relative rounded-full w-2 h-2 bg-status-success" />
            </span>
            <span className="text-on-surface">APK disponible</span>
            <span className="text-on-surface-muted">· Android 8.0+</span>
          </div>

          {/* Headline */}
          <h1 className="text-[44px] md:text-[64px] lg:text-[72px] font-extrabold tracking-[-0.04em] leading-[0.98] text-on-surface mb-6">
            Tu condominio,<br />
            <span className="text-shimmer">sin papeleos.</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            Facturas, presupuestos, cartelera y pagos.
            <span className="text-on-surface"> Todo desde una sola app.</span>
            <br />Diseñada para residentes y juntas directivas.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onDownloadClick}
              className="btn-primary px-7 py-4 rounded-xl font-bold text-base inline-flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined fill-1">download</span>
              Descargar APK gratis
            </button>
            <a
              href="#features"
              className="btn-ghost px-7 py-4 rounded-xl font-semibold text-base inline-flex items-center justify-center gap-2"
            >
              Ver funcionalidades
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_downward</span>
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-12 pt-6 border-t border-white/[0.06]">
            {[
              { icon: 'verified',   label: 'Facturación real' },
              { icon: 'lock',       label: 'Datos cifrados' },
              { icon: 'bolt',       label: 'Instalación en 1 min' },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined fill-1 text-on-surface-muted" style={{ fontSize: '16px' }}>{t.icon}</span>
                <span className="font-medium">{t.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="relative flex justify-center items-center py-8 lg:py-0"
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
