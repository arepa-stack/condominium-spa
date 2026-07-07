import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    { id: 'responsable', title: '1. Responsable del Tratamiento' },
    { id: 'datos', title: '2. Datos que Recopilamos' },
    { id: 'permisos', title: '3. Permisos del Dispositivo' },
    { id: 'seguridad', title: '4. Almacenamiento y Seguridad' },
    { id: 'eliminacion', title: '5. Eliminación de Cuentas' },
    { id: 'comparticion', title: '6. Compartición con Terceros' },
    { id: 'derechos', title: '7. Derechos del Usuario' },
    { id: 'contacto', title: '8. Soporte y Contacto' },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // offset for the sticky header
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
          href="/"
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
            gavel
          </span>
          Legal & Transparencia
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-on-surface leading-[1.1] mb-5">
          Políticas de <span className="text-shimmer">Privacidad</span>
        </h1>
        <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
          En Apto by nibs nos tomamos muy en serio la seguridad y el tratamiento de sus datos personales. A continuación, detallamos de forma clara y transparente cómo recopilamos, utilizamos, almacenamos y protegemos su información de acuerdo con las directrices de Google Play Store.
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

        {/* Policy Document Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex-1 space-y-12 text-on-surface-variant leading-relaxed text-[15px]"
        >
          {/* 1. Responsable del Tratamiento */}
          <section id="responsable" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl font-bold text-on-surface tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary-container/10 text-primary-container flex items-center justify-center font-bold text-sm">
                1
              </span>
              Responsable del Tratamiento de los Datos
            </h2>
            <div className="card p-6 space-y-3">
              <p>
                El responsable del tratamiento de los datos personales es la firma de desarrollo tecnológico <strong className="text-on-surface">nibs</strong> (en adelante, "Nosotros" o "Apto"), encargados de la creación, soporte y operación de la aplicación móvil y servicios de administración de condominios **Apto**.
              </p>
              <div className="flex items-center gap-3 text-sm text-on-surface bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 w-fit">
                <span className="material-symbols-outlined text-primary-container">mail</span>
                <span>Contacto de Privacidad: <a href="mailto:adminnibstech@gmail.com" className="underline hover:text-secondary-container transition-colors">adminnibstech@gmail.com</a></span>
              </div>
            </div>
          </section>

          {/* 2. Datos que Recopilamos */}
          <section id="datos" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl font-bold text-on-surface tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary-container/10 text-primary-container flex items-center justify-center font-bold text-sm">
                2
              </span>
              Datos Personales que Recopilamos
            </h2>
            <p>
              Para prestar correctamente el servicio de gestión condominal sin papeleos, recopilamos la información indispensable que usted proporciona voluntariamente al registrarse y utilizar la plataforma:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              
              {/* Card 1: Registro */}
              <div className="card p-5 space-y-2.5">
                <div className="inline-flex p-2 rounded-lg bg-secondary-fixed/50 ring-1 ring-white/10 mb-1">
                  <span className="material-symbols-outlined text-secondary font-bold" style={{ fontSize: '20px' }}>badge</span>
                </div>
                <h3 className="text-base font-bold text-on-surface">Identificación & Registro</h3>
                <ul className="text-xs space-y-1 text-on-surface-variant list-disc pl-4">
                  <li>Nombre completo y apellido</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Número de teléfono de contacto</li>
                </ul>
                <p className="text-[11px] text-on-surface-muted pt-1">Usados para autenticación por token JWT y comunicaciones urgentes del edificio.</p>
              </div>

              {/* Card 2: Residencia */}
              <div className="card p-5 space-y-2.5">
                <div className="inline-flex p-2 rounded-lg bg-secondary-fixed/50 ring-1 ring-white/10 mb-1">
                  <span className="material-symbols-outlined text-secondary font-bold" style={{ fontSize: '20px' }}>domain</span>
                </div>
                <h3 className="text-base font-bold text-on-surface">Información de Residencia</h3>
                <ul className="text-xs space-y-1 text-on-surface-variant list-disc pl-4">
                  <li>Nombre y dirección del condominio</li>
                  <li>Número o identificador de apartamento (unidad)</li>
                  <li>Rol del usuario (residente, junta directiva, administrador)</li>
                </ul>
                <p className="text-[11px] text-on-surface-muted pt-1">Usados para vincular al usuario con su comunidad y establecer permisos en el sistema.</p>
              </div>

              {/* Card 3: Pagos */}
              <div className="card p-5 space-y-2.5">
                <div className="inline-flex p-2 rounded-lg bg-secondary-fixed/50 ring-1 ring-white/10 mb-1">
                  <span className="material-symbols-outlined text-secondary font-bold" style={{ fontSize: '20px' }}>payments</span>
                </div>
                <h3 className="text-base font-bold text-on-surface">Datos Financieros de Transacciones</h3>
                <ul className="text-xs space-y-1 text-on-surface-variant list-disc pl-4">
                  <li>Monto pagado e historial de saldos</li>
                  <li>Fecha de pago y período cubierto</li>
                  <li>Método de pago (transferencia, depósito)</li>
                  <li>Referencia bancaria y banco emisor/receptor</li>
                </ul>
                <p className="text-[11px] text-on-surface-muted pt-1">Procesados exclusivamente para la conciliación de cuotas de mantenimiento y estado de solvencia.</p>
              </div>

              {/* Card 4: Archivos */}
              <div className="card p-5 space-y-2.5">
                <div className="inline-flex p-2 rounded-lg bg-secondary-fixed/50 ring-1 ring-white/10 mb-1">
                  <span className="material-symbols-outlined text-secondary font-bold" style={{ fontSize: '20px' }}>upload_file</span>
                </div>
                <h3 className="text-base font-bold text-on-surface">Comprobantes Digitales</h3>
                <ul className="text-xs space-y-1 text-on-surface-variant list-disc pl-4">
                  <li>Imágenes o archivos de comprobantes de pago cargados</li>
                  <li>Fotografía opcional de perfil de usuario</li>
                </ul>
                <p className="text-[11px] text-on-surface-muted pt-1">Almacenados en el bucket seguro de Supabase Storage para verificación contable.</p>
              </div>

            </div>
          </section>

          {/* 3. Permisos del Dispositivo */}
          <section id="permisos" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl font-bold text-on-surface tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary-container/10 text-primary-container flex items-center justify-center font-bold text-sm">
                3
              </span>
              Permisos del Dispositivo (Android)
            </h2>
            <p>
              Para facilitar la subida de comprobantes directamente desde su teléfono inteligente, la APK requiere acceder de forma exclusiva a las siguientes funciones del dispositivo, previa aprobación explícita en pantalla:
            </p>
            <div className="space-y-3.5 mt-3">
              <div className="flex items-start gap-4 bg-white/[0.02] border border-white/[0.04] p-4 rounded-xl">
                <span className="material-symbols-outlined text-primary-container mt-0.5" style={{ fontSize: '22px' }}>photo_camera</span>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">Acceso a la Cámara (`android.permission.CAMERA`)</h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    Le permite capturar fotos en tiempo real de su recibo o comprobante bancario impreso para adjuntarlo a un reporte de pago. No capturamos imágenes en segundo plano ni recopilamos datos visuales sin su consentimiento.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/[0.02] border border-white/[0.04] p-4 rounded-xl">
                <span className="material-symbols-outlined text-primary-container mt-0.5" style={{ fontSize: '22px' }}>image</span>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">Acceso a la Galería y Multimedia (`READ_MEDIA_IMAGES` / `READ_EXTERNAL_STORAGE`)</h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    Le permite explorar y seleccionar capturas de pantalla de transferencias electrónicas o archivos PDF almacenados en el teléfono para reportar sus cuotas mensuales. La aplicación solo accede a los archivos que usted elija seleccionar expresamente.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Almacenamiento y Seguridad */}
          <section id="seguridad" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl font-bold text-on-surface tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary-container/10 text-primary-container flex items-center justify-center font-bold text-sm">
                4
              </span>
              Almacenamiento, Seguridad y Retención de Datos
            </h2>
            <div className="space-y-3.5">
              <p>
                Apto emplea tecnologías modernas de computación en la nube para garantizar que sus datos permanezcan privados e íntegros:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong className="text-on-surface">Alojamiento Seguro:</strong> La información estructurada de su perfil, edificios y registros de pago se almacena de forma segura en **Supabase**, utilizando su infraestructura en la nube protegida.
                </li>
                <li>
                  <strong className="text-on-surface">Almacenamiento de Comprobantes:</strong> Los comprobantes de pago subidos como imágenes se almacenan en un bucket privado (`payment-proofs`) en Supabase Storage, limitando el acceso solo a usuarios autenticados autorizados.
                </li>
                <li>
                  <strong className="text-on-surface">Criptografía y Protocolos:</strong> El tráfico de datos se cifra mediante protocolos **HTTPS / SSL (TLS 1.3)** en tránsito. El acceso a la base de datos se rige por políticas de seguridad a nivel de fila (Row Level Security - RLS) para evitar la filtración de información entre condominios.
                </li>
                <li>
                  <strong className="text-on-surface">Retención de Datos:</strong> Sus datos se mantendrán almacenados únicamente mientras persista su relación con el condominio o hasta que solicite la eliminación de su cuenta. Los registros transaccionales históricos pueden conservarse de forma anónima para resguardar la consistencia de los balances de caja chica del edificio.
                </li>
              </ul>
            </div>
          </section>

          {/* 5. Eliminación de Cuentas */}
          <section id="eliminacion" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl font-bold text-on-surface tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-status-error/15 text-status-error flex items-center justify-center font-bold text-sm">
                5
              </span>
              Política de Eliminación de Datos y Cuentas (Google Play Directives)
            </h2>
            <p>
              De conformidad con las políticas de desarrolladores de Google Play, proporcionamos un mecanismo directo e integral para que el usuario pueda ejercer su derecho a la eliminación de su cuenta e información personal:
            </p>
            <div className="card border-status-error/30 p-6 space-y-4 bg-status-error/5">
              <div className="flex items-center gap-2 text-status-error font-bold text-sm">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete_forever</span>
                <span>¿Cómo solicitar la eliminación de mi cuenta y mis datos?</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-black/30 border border-white/[0.04] p-4 rounded-xl space-y-1.5">
                  <p className="font-bold text-on-surface">Opción A: Desde la Aplicación Móvil</p>
                  <p>Ingrese al módulo de **Mi Perfil** &gt; **Configuración de Cuenta** y presione el botón **"Eliminar Cuenta"**. El sistema solicitará confirmación y procesará la baja automáticamente en nuestros sistemas.</p>
                </div>
                <div className="bg-black/30 border border-white/[0.04] p-4 rounded-xl space-y-1.5">
                  <p className="font-bold text-on-surface">Opción B: Solicitud por Correo Electrónico</p>
                  <p>Envíe una solicitud por correo a <a href="mailto:adminnibstech@gmail.com" className="underline font-semibold text-on-surface">adminnibstech@gmail.com</a> indicando su nombre de usuario registrado, correo electrónico y apartamento. Procesaremos su solicitud en un plazo máximo de 72 horas hábiles.</p>
                </div>
              </div>
              <div className="text-[11px] text-on-surface-muted leading-relaxed">
                <span className="font-bold text-on-surface">Consecuencias de la eliminación:</span> Al procesar su solicitud de eliminación, se borrarán permanentemente sus credenciales de acceso, nombre, teléfono, dirección de correo electrónico y todas las imágenes de perfil o comprobantes que haya cargado. Los registros contables de pagos realizados por su unidad se mantendrán registrados pero desvinculados de su identidad personal (anonimizados) para no alterar las auditorías del edificio.
              </div>
            </div>
          </section>

          {/* 6. Compartición con Terceros */}
          <section id="comparticion" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl font-bold text-on-surface tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary-container/10 text-primary-container flex items-center justify-center font-bold text-sm">
                6
              </span>
              Compartición de la Información
            </h2>
            <p>
              Garantizamos que **no vendemos, comercializamos, alquilamos ni cedemos** sus datos personales a agencias de marketing ni a ningún tercero con fines lucrativos. La información recogida solo es visible para:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>El <strong className="text-on-surface">Administrador</strong> y los integrantes acreditados de la **Junta de Condominio** de su respectivo edificio, para llevar a cabo la verificación de cuentas y pagos.</li>
              <li>Los proveedores indispensables de infraestructura en la nube (**Supabase**), que procesan la información de manera encriptada y bajo acuerdos de confidencialidad estrictos según estándares de la industria.</li>
            </ul>
          </section>

          {/* 7. Derechos del Usuario */}
          <section id="derechos" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl font-bold text-on-surface tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary-container/10 text-primary-container flex items-center justify-center font-bold text-sm">
                7
              </span>
              Derechos del Usuario (Derechos ARCO)
            </h2>
            <p>
              Usted tiene pleno control sobre sus datos y puede ejercer en cualquier momento sus derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO):
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mt-2">
              <div className="bg-white/[0.02] border border-white/[0.04] p-4 rounded-xl">
                <h4 className="font-bold text-on-surface mb-1">Acceso y Rectificación</h4>
                <p>Puede consultar y corregir su información personal en cualquier momento accediendo directamente a la sección "Mi Perfil" dentro de la APK.</p>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.04] p-4 rounded-xl">
                <h4 className="font-bold text-on-surface mb-1">Portabilidad y Limitación</h4>
                <p>Puede solicitar una copia digital exportable de sus reportes de pago o suspender temporalmente el envío de notificaciones enviando un correo a soporte.</p>
              </div>
            </div>
          </section>

          {/* 8. Soporte y Contacto */}
          <section id="contacto" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl font-bold text-on-surface tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary-container/10 text-primary-container flex items-center justify-center font-bold text-sm">
                8
              </span>
              Contacto y Soporte Técnico
            </h2>
            <p>
              Si tiene dudas sobre esta Política de Privacidad, el uso de permisos del dispositivo o el manejo de datos en la aplicación móvil de Apto, no dude en contactarnos:
            </p>
            <div className="card p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-on-surface">Equipo de Soporte de Apto por nibs</p>
                <p className="text-xs text-on-surface-muted mt-0.5">Estamos disponibles para responder tus dudas sobre privacidad y eliminación de cuentas.</p>
              </div>
              <a
                href="mailto:adminnibstech@gmail.com"
                className="btn-primary px-4 py-2 rounded-lg font-semibold text-xs shrink-0 flex items-center gap-2 focus:outline-none"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>mail</span>
                Contactar Soporte
              </a>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
