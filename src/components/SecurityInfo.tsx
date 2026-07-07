import React from 'react';
import { motion } from 'framer-motion';

const SecurityInfo: React.FC = () => {
  const securityFeatures = [
    {
      title: 'Cifrado en Tránsito (SSL/TLS)',
      description: 'Toda comunicación entre la aplicación móvil de Apto, la plataforma web y nuestros servidores backend se realiza de manera segura mediante el protocolo HTTPS. Implementamos TLS 1.3 con algoritmos criptográficos robustos para evitar cualquier tipo de intercepción o escucha de información sensible en redes públicas o Wi-Fi residenciales.',
      icon: 'lock',
      iconBg: 'bg-[#1E3A8A]/50',
      iconColor: 'text-[#93C5FD]',
    },
    {
      title: 'Políticas de Base de Datos RLS (Row Level Security)',
      description: 'Utilizamos Supabase PostgreSQL con políticas de seguridad a nivel de fila (RLS). Esto garantiza a nivel de base de datos que un residente solo pueda ver y modificar sus propios datos y los de su condominio específico. Ningún usuario puede saltarse las capas lógicas del frontend para leer facturas, saldos o información de otros edificios.',
      icon: 'vpn_key',
      iconBg: 'bg-secondary-fixed/50',
      iconColor: 'text-secondary',
    },
    {
      title: 'Comprobantes de Pago Resguardados',
      description: 'Los comprobantes digitales que subes (como capturas de transferencias o recibos) se alojan en un espacio de almacenamiento seguro en Supabase Storage (bucket `payment-proofs`). El acceso a las URLs de visualización está estrictamente controlado, permitiendo únicamente a los administradores de tu edificio y a ti mismo la visualización de dichos comprobantes.',
      icon: 'cloud_done',
      iconBg: 'bg-[#064E3B]/50',
      iconColor: 'text-[#6EE7B7]',
    },
    {
      title: 'Autenticación mediante Tokens JWT',
      description: 'El inicio de sesión genera un token web JSON (JWT) firmado de forma criptográfica por Supabase Auth. Este token identifica de forma unívoca a tu usuario y expira de forma automática tras periodos de inactividad, evitando que accesos no autorizados a tu dispositivo celular comprometan de forma permanente la seguridad del condominio.',
      icon: 'admin_panel_settings',
      iconBg: 'bg-[#3B1F71]/50',
      iconColor: 'text-tertiary',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
      
      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-on-surface transition-colors mb-10 group"
        >
          <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1" style={{ fontSize: '18px' }}>
            arrow_back
          </span>
          Volver a la página de inicio
        </a>
      </motion.div>

      {/* Header section */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-full text-xs font-medium text-on-surface-variant mb-6">
          <span className="material-symbols-outlined fill-1 text-primary-container" style={{ fontSize: '14px' }}>
            shield
          </span>
          Infraestructura de Seguridad
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-on-surface leading-[1.1] mb-5">
          Seguridad y <span className="text-shimmer">Protección de Datos</span>
        </h1>
        <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
          Diseñamos la arquitectura de Apto siguiendo estándares modernos de seguridad en la nube para garantizar que tus reportes de pago, información personal y balances comunitarios estén protegidos en todo momento.
        </p>
      </motion.div>

      {/* Grid of Security Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {securityFeatures.map((feat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card p-8 flex flex-col items-start"
          >
            <div className={`p-3.5 rounded-2xl ${feat.iconBg} ring-1 ring-white/10 mb-6 flex items-center justify-center`}>
              <span className={`material-symbols-outlined fill-1 ${feat.iconColor}`} style={{ fontSize: '26px' }}>
                {feat.icon}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-on-surface mb-3 tracking-tight">{feat.title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {feat.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Additional compliance banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card p-6 border-white/[0.04] bg-white/[0.01] flex flex-col md:flex-row items-center gap-5 justify-between"
      >
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary-container fill-1" style={{ fontSize: '32px' }}>
            verified_user
          </span>
          <div>
            <p className="text-sm font-semibold text-on-surface">Auditoría y Monitoreo del Servidor</p>
            <p className="text-xs text-on-surface-muted mt-0.5">
              Cada solicitud en la API es monitoreada y cuenta con un identificador único (X-Request-ID) registrado con Pino Logger para la trazabilidad completa y detección de anomalías.
            </p>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default SecurityInfo;
