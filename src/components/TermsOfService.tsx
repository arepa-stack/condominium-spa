import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService: React.FC = () => {
  const sections = [
    { id: 'aceptacion', title: '1. Aceptación de Términos' },
    { id: 'servicio', title: '2. Descripción del Servicio' },
    { id: 'cuentas', title: '3. Registro y Cuentas' },
    { id: 'pagos', title: '4. Registro de Pagos' },
    { id: 'responsabilidad', title: '5. Limitación de Responsabilidad' },
    { id: 'modificaciones', title: '6. Modificaciones del Servicio' },
    { id: 'suspension', title: '7. Suspensión y Cancelación' },
    { id: 'contacto', title: '8. Dudas y Contacto' },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-3xl mb-16"
      >
        <span className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-full text-xs font-medium text-on-surface-variant mb-6">
          <span className="material-symbols-outlined fill-1 text-primary-container" style={{ fontSize: '14px' }}>
            description
          </span>
          Acuerdo de Licencia
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-on-surface leading-[1.1] mb-5">
          Términos y <span className="text-shimmer">Condiciones</span>
        </h1>
        <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
          Bienvenido a Apto. Este documento establece los términos legales que rigen el uso de nuestra aplicación móvil y servicios web de gestión de condominios. Al acceder o utilizar nuestra plataforma, aceptas cumplir con estos términos.
        </p>
        <div className="mt-4 text-xs text-on-surface-muted flex items-center gap-2 border-t border-white/[0.06] pt-4">
          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>update</span>
          Última actualización: 7 de julio de 2026
        </div>
      </motion.div>

      {/* Main Content Layout */}
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Navigation Sidebar (Desktop sticky) */}
        <motion.aside
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:block w-72 shrink-0 sticky top-28 bg-surface-container-lowest/40 border border-white/[0.04] rounded-2xl p-6 glass"
        >
          <p className="text-xs font-bold text-primary-container uppercase tracking-widest mb-4">Secciones</p>
          <nav className="flex flex-col gap-2.5">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleScroll(section.id)}
                className="text-left text-sm text-on-surface-variant hover:text-primary transition-colors py-1.5 border-l-2 border-transparent hover:border-primary-container pl-3.5 focus:outline-none"
              >
                {section.title}
              </button>
            ))}
          </nav>
        </motion.aside>

        {/* Document Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex-1 space-y-12 text-on-surface-variant leading-relaxed text-[15px]"
        >
          {/* 1. Aceptación */}
          <section id="aceptacion" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl font-bold text-on-surface tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary-container/10 text-primary-container flex items-center justify-center font-bold text-sm">
                1
              </span>
              Aceptación de los Términos
            </h2>
            <p>
              Al descargar la APK, registrarse en el sistema o utilizar la plataforma web de **Apto**, el usuario (en adelante, "el Usuario" o "el Residente") acepta expresamente y sin reservas todos los términos establecidos en este documento. Si no está de acuerdo con alguno de ellos, deberá abstenerse de usar la plataforma y desinstalar la aplicación de su dispositivo.
            </p>
          </section>

          {/* 2. Descripción del Servicio */}
          <section id="servicio" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl font-bold text-on-surface tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary-container/10 text-primary-container flex items-center justify-center font-bold text-sm">
                2
              </span>
              Descripción del Servicio
            </h2>
            <p>
              Apto es una plataforma de software que proporciona herramientas de administración, transparencia y comunicación para comunidades residenciales y comerciales. El servicio incluye:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Visualización del estado de cuentas y facturas de mantenimiento del apartamento o unidad.</li>
              <li>Módulos de **Caja Chica** y balances financieros públicos para los copropietarios.</li>
              <li>Sistema de registro y carga digital de comprobantes de pago.</li>
              <li>Módulo de votación de presupuestos y cartelera digital de avisos informativos.</li>
            </ul>
          </section>

          {/* 3. Registro y Cuentas */}
          <section id="cuentas" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl font-bold text-on-surface tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary-container/10 text-primary-container flex items-center justify-center font-bold text-sm">
                3
              </span>
              Registro de Usuario y Seguridad de Cuenta
            </h2>
            <p>
              Para acceder a las funciones móviles, el Residente debe registrarse utilizando su nombre completo, correo electrónico y número de teléfono, vinculándose a un edificio y unidad residencial específicos.
            </p>
            <div className="card p-5 space-y-2.5">
              <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container" style={{ fontSize: '18px' }}>lock</span>
                Responsabilidades del Usuario
              </h3>
              <p className="text-xs">
                El Usuario es el único responsable de salvaguardar la confidencialidad de sus credenciales y de toda actividad realizada desde su cuenta. Asimismo, se compromete a proporcionar información verídica y a no registrarse bajo nombres falsos o unidades ajenas a su propiedad o arrendamiento legítimo.
              </p>
            </div>
          </section>

          {/* 4. Registro de Pagos */}
          <section id="pagos" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl font-bold text-on-surface tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary-container/10 text-primary-container flex items-center justify-center font-bold text-sm">
                4
              </span>
              Registro de Pagos y Comprobantes
            </h2>
            <p>
              El módulo de "Registrar Pago" permite al usuario subir comprobantes digitales de transferencias o depósitos bancarios para su posterior validación.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong className="text-on-surface">Veracidad de los Comprobantes:</strong> El Usuario garantiza que cualquier imagen, PDF o dato de pago reportado corresponde a una transacción real y efectiva realizada a las cuentas del condominio. La carga de comprobantes alterados, falsificados o repetidos deliberadamente constituirá motivo de suspensión inmediata del servicio.
              </li>
              <li>
                <strong className="text-on-surface">Revisión Administrativa:</strong> La plataforma Apto sirve para canalizar y automatizar el reporte del pago, pero la verificación definitiva e inclusión del saldo en la contabilidad del edificio la realiza la administración humana o junta directiva.
              </li>
            </ul>
          </section>

          {/* 5. Limitación de Responsabilidad */}
          <section id="responsable" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl font-bold text-on-surface tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary-container/10 text-primary-container flex items-center justify-center font-bold text-sm">
                5
              </span>
              Limitación de Responsabilidad
            </h2>
            <p>
              La firma de desarrollo tecnológico **nibs** provee el software Apto "tal cual" y "según disponibilidad".
            </p>
            <div className="card border-white/10 p-5 bg-white/[0.01] text-xs space-y-2">
              <p>
                <strong className="text-on-surface">1. Gestión de Condominio:</strong> nibs no administra de forma directa los recursos financieros, cobranzas ni el mantenimiento de los edificios. Cualquier disputa relacionada con montos de cuotas, cobros erróneos, recargas o reparaciones estructurales del edificio debe resolverse directamente con la Junta de Condominio o la Administradora correspondiente.
              </p>
              <p>
                <strong className="text-on-surface">2. Fallos Técnicos:</strong> Aunque nos esforzamos por mantener la aplicación libre de errores y disponible 24/7, no garantizamos que el software sea ininterrumpido o libre de fallas técnicas menores del servidor de alojamiento de terceros.
              </p>
            </div>
          </section>

          {/* 6. Modificaciones */}
          <section id="modificaciones" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl font-bold text-on-surface tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary-container/10 text-primary-container flex items-center justify-center font-bold text-sm">
                6
              </span>
              Modificaciones de la Plataforma y de los Términos
            </h2>
            <p>
              Nos reservamos el derecho de añadir nuevas funciones, modificar o discontinuar de forma temporal partes del servicio sin previo aviso con el fin de optimizar el rendimiento y seguridad de la aplicación móvil. Así mismo, estos Términos podrán actualizarse periódicamente, y el uso continuado de la app tras las modificaciones constituirá la aceptación implícita de las nuevas condiciones.
            </p>
          </section>

          {/* 7. Suspensión */}
          <section id="suspension" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl font-bold text-on-surface tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary-container/10 text-primary-container flex items-center justify-center font-bold text-sm">
                7
              </span>
              Suspensión y Cancelación del Servicio
            </h2>
            <p>
              Podremos suspender o cancelar su cuenta de acceso de forma inmediata si se detecta un uso indebido, fraude financiero, intentos de vulneración informática de los servidores de Supabase, o el suministro repetido de datos falsos. El residente también puede dar de baja su cuenta directamente desde la aplicación móvil en cualquier momento.
            </p>
          </section>

          {/* 8. Contacto */}
          <section id="contacto" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl font-bold text-on-surface tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary-container/10 text-primary-container flex items-center justify-center font-bold text-sm">
                8
              </span>
              Dudas y Contacto Oficial
            </h2>
            <p>
              Para cualquier consulta sobre estos Términos y Condiciones, aclaratoria de licencias o reclamos legales, por favor envíe un correo electrónico a:
            </p>
            <div className="card p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-on-surface">Contacto de Administración Tecnológica</p>
                <p className="text-xs text-on-surface-muted mt-0.5">Correo para soporte y términos legales.</p>
              </div>
              <a
                href="mailto:adminnibstech@gmail.com"
                className="btn-primary px-4 py-2 rounded-lg font-semibold text-xs shrink-0 flex items-center gap-2 focus:outline-none"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>mail</span>
                adminnibstech@gmail.com
              </a>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
