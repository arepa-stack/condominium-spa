import React from 'react';
import { motion } from 'framer-motion';

const AccountDeletion: React.FC = () => {
  const steps = [
    'Abre la app Apto e inicia sesión.',
    'Ve a la sección Perfil.',
    'Baja hasta el final y toca Eliminar cuenta.',
    'Indica el motivo (opcional) y confirma.',
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-20">

      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-on-surface transition-colors mb-10 group"
        >
          <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1" style={{ fontSize: '18px' }}>
            arrow_back
          </span>
          Volver a la página de inicio
        </a>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-full text-xs font-medium text-on-surface-variant mb-6">
          <span className="material-symbols-outlined fill-1 text-primary-container" style={{ fontSize: '14px' }}>
            delete
          </span>
          Eliminación de cuenta
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-on-surface leading-[1.1] mb-5">
          Eliminar tu <span className="text-shimmer">cuenta</span>
        </h1>
        <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
          App <strong>Apto</strong>, desarrollada por <strong>NIBS Tech</strong>. Puedes eliminar tu cuenta
          directamente desde la app, sin necesidad de escribirnos.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="card p-8 mb-8">
        <h2 className="text-xl font-bold text-on-surface mb-5 tracking-tight">Pasos para eliminar tu cuenta</h2>
        <ol className="space-y-3">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-3 text-sm text-on-surface-variant leading-relaxed">
              <span className="flex-none w-6 h-6 rounded-full bg-secondary-fixed/50 text-secondary font-bold text-xs flex items-center justify-center">
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-sm text-on-surface-muted mt-5">
          Tu cuenta se desactiva de inmediato y no podrás volver a iniciar sesión.
        </p>
      </div>

      {/* Data deleted / retained */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card p-6">
          <h3 className="text-lg font-bold text-on-surface mb-3">Datos que se eliminan</h3>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-on-surface-variant">
            <li>Nombre, correo electrónico y número de teléfono.</li>
            <li>Credenciales de acceso (no podrás volver a iniciar sesión).</li>
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="text-lg font-bold text-on-surface mb-3">Datos que se conservan</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Los registros contables y financieros (pagos y comprobantes) se conservan hasta{' '}
            <strong>5 años</strong> por obligaciones legales y fiscales; luego se eliminan.
          </p>
        </div>
      </div>

      {/* Lost access fallback */}
      <div className="card p-6 border-white/[0.04] bg-white/[0.01]">
        <h3 className="text-lg font-bold text-on-surface mb-2">¿Perdiste el acceso a la app?</h3>
        <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
          Si no puedes iniciar sesión, solicita la eliminación por correo indicando el email de tu cuenta.
          Procesaremos tu solicitud en un plazo de hasta 30 días.
        </p>
        <a
          href="mailto:adminnibstech@gmail.com?subject=Solicitud%20de%20eliminaci%C3%B3n%20de%20cuenta%20-%20Apto&body=Correo%20de%20mi%20cuenta%3A%20%0AMotivo%20(opcional)%3A%20"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-container to-secondary-container text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>mail</span>
          Solicitar por correo
        </a>
      </div>

    </div>
  );
};

export default AccountDeletion;
