import React from 'react';
import { motion } from 'framer-motion';

// ── Types ────────────────────────────────────────────────────────────────────

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  className?: string;
  tag?: string;
  visual?: React.ReactNode;
  index: number;
}

// ── FeatureCard ──────────────────────────────────────────────────────────────

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  iconBg,
  iconColor,
  className = '',
  tag,
  visual,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
      className={`card card-glow group p-7 flex flex-col ${className}`}
    >
      <div className="flex items-start gap-4 mb-5">
        <div className={`shrink-0 inline-flex p-2.5 rounded-xl ${iconBg} ring-1 ring-white/10`}>
          <span className={`material-symbols-outlined fill-1 ${iconColor}`} style={{ fontSize: '22px' }}>{icon}</span>
        </div>
        {tag && (
          <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-muted px-2 py-0.5 rounded-full border border-white/10 mt-1">
            {tag}
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-on-surface mb-2 tracking-tight">{title}</h3>
      <p className="text-sm text-on-surface-variant leading-relaxed mb-5 flex-grow">{description}</p>

      {/* Optional visual area */}
      {visual && (
        <div className="mt-auto -mb-1">
          {visual}
        </div>
      )}
    </motion.div>
  );
};

// ── Mini-visuals embedded in cards ───────────────────────────────────────────

const InvoiceVisual: React.FC = () => (
  <div className="space-y-2">
    {[
      { label: 'Mantenimiento · Ago', state: 'Pagado',     ok: true,  amount: '350' },
      { label: 'Agua · Ago',          state: 'Pendiente',  ok: false, amount: '180' },
    ].map((row, i) => (
      <div key={i} className="flex items-center gap-2.5 bg-black/30 border border-white/[0.05] rounded-lg px-3 py-2">
        <div className={`w-6 h-6 rounded-md flex items-center justify-center ${row.ok ? 'bg-status-success/15' : 'bg-status-warning/15'}`}>
          <span className={`material-symbols-outlined fill-1 ${row.ok ? 'text-status-success' : 'text-status-warning'}`} style={{ fontSize: '12px' }}>
            {row.ok ? 'check_circle' : 'pending'}
          </span>
        </div>
        <span className="flex-1 text-[11px] font-semibold text-on-surface truncate">{row.label}</span>
        <span className="text-[11px] font-bold text-on-surface-variant">${row.amount}</span>
      </div>
    ))}
  </div>
);

const BillboardVisual: React.FC = () => (
  <div className="bg-black/30 border border-white/[0.05] rounded-lg p-3 space-y-2">
    <div className="flex items-center gap-2">
      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-status-error/15 text-status-error uppercase tracking-wider">Urgente</span>
      <span className="text-[10px] text-on-surface-muted font-medium">hace 2 h</span>
    </div>
    <p className="text-[11px] font-semibold text-on-surface leading-snug">Corte de agua programado para mañana 9:00 AM</p>
  </div>
);

const BudgetVisual: React.FC = () => (
  <div className="space-y-1.5">
    {[
      { name: 'Proveedor A',   pct: 60, color: 'bg-gradient-to-r from-primary-container to-secondary-container' },
      { name: 'Proveedor B',   pct: 30, color: 'bg-status-info/70' },
      { name: 'Proveedor C',   pct: 10, color: 'bg-on-surface-muted/40' },
    ].map((row, i) => (
      <div key={i} className="flex items-center gap-2">
        <span className="text-[10px] font-bold text-on-surface-variant w-20 truncate">{row.name}</span>
        <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${row.pct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
            className={`h-full ${row.color} rounded-full`}
          />
        </div>
        <span className="text-[10px] font-bold text-on-surface w-7 text-right">{row.pct}%</span>
      </div>
    ))}
  </div>
);

const PettyCashVisual: React.FC = () => (
  <div className="bg-black/30 border border-white/[0.05] rounded-lg p-3 flex items-center justify-between">
    <div>
      <p className="text-[9px] font-bold text-on-surface-muted uppercase tracking-wider mb-0.5">Saldo</p>
      <p className="text-xl font-black text-on-surface tracking-tight">$ 8,420<span className="text-sm text-on-surface-variant">.50</span></p>
    </div>
    <div className="flex flex-col items-end gap-0.5">
      <span className="text-[10px] font-bold text-status-success flex items-center gap-0.5">
        <span className="material-symbols-outlined fill-1" style={{ fontSize: '12px' }}>arrow_upward</span>
        +$420
      </span>
      <span className="text-[9px] text-on-surface-muted">vs mes anterior</span>
    </div>
  </div>
);

// ── FeatureGrid ──────────────────────────────────────────────────────────────

const FeatureGrid: React.FC = () => {
  return (
    <section id="features" className="relative max-w-7xl mx-auto px-6 md:px-8 py-24">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-full text-xs font-medium text-on-surface-variant mb-6">
          <span className="material-symbols-outlined fill-1 text-primary-container" style={{ fontSize: '14px' }}>auto_awesome</span>
          Módulos del sistema
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-on-surface leading-[1.05] mb-5">
          Todo lo que tu edificio<br />
          <span className="text-on-surface-variant">necesita, en un solo lugar.</span>
        </h2>
        <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
          Seis módulos integrados que reemplazan correos, hojas de cálculo y grupos de WhatsApp.
        </p>
      </motion.div>

      {/* Bento grid */}
      <div className="bento-grid">

        {/* Mis Facturas — destacada (col-span-4) */}
        <FeatureCard
          index={0}
          className="col-span-6 md:col-span-3 lg:col-span-4"
          title="Mis Facturas"
          description="Consulta, descarga y paga las facturas de mantenimiento directamente desde la app. Recibe alertas antes del vencimiento y mantén tu estado de cuenta al día."
          icon="receipt_long"
          iconBg="bg-secondary-fixed"
          iconColor="text-secondary"
          tag="Principal"
          visual={<InvoiceVisual />}
        />

        {/* Cartelera (col-span-2) */}
        <FeatureCard
          index={1}
          className="col-span-6 md:col-span-3 lg:col-span-2"
          title="Cartelera"
          description="Comunicados de la junta directiva por categoría: urgente, financiero o mantenimiento."
          icon="campaign"
          iconBg="bg-[#064E3B]/50"
          iconColor="text-[#6EE7B7]"
          visual={<BillboardVisual />}
        />

        {/* Presupuesto (col-span-3) */}
        <FeatureCard
          index={2}
          className="col-span-6 md:col-span-3 lg:col-span-3"
          title="Presupuesto"
          description="Revisa cotizaciones de proveedores y vota por la mejor propuesta para obras y servicios del edificio."
          icon="account_balance_wallet"
          iconBg="bg-[#1E3A8A]/50"
          iconColor="text-[#93C5FD]"
          visual={<BudgetVisual />}
        />

        {/* Caja Chica (col-span-3) */}
        <FeatureCard
          index={3}
          className="col-span-6 md:col-span-3 lg:col-span-3"
          title="Caja Chica"
          description="Balance del fondo común en tiempo real. Transparencia total en cada movimiento del edificio."
          icon="savings"
          iconBg="bg-[#3B1F71]/50"
          iconColor="text-tertiary"
          visual={<PettyCashVisual />}
        />

        {/* Registrar Pago (col-span-3) */}
        <FeatureCard
          index={4}
          className="col-span-6 md:col-span-3 lg:col-span-3"
          title="Registrar Pago"
          description="Sube tu comprobante desde la cámara del celular. Validación automática y notificación instantánea a la administración."
          icon="qr_code_scanner"
          iconBg="bg-secondary-fixed"
          iconColor="text-secondary-container"
        />

        {/* Historial (col-span-3) */}
        <FeatureCard
          index={5}
          className="col-span-6 md:col-span-3 lg:col-span-3"
          title="Historial de Pagos"
          description="Todos tus comprobantes y pagos anteriores siempre a un toque de distancia. Nunca más busques recibos físicos."
          icon="history"
          iconBg="bg-[#0E7490]/40"
          iconColor="text-status-info"
        />

      </div>
    </section>
  );
};

export default FeatureGrid;
