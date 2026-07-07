import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const Support: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: '¿Cómo descargo e instalo la aplicación móvil Apto?',
      answer: 'Puedes descargar el archivo APK directamente haciendo clic en el botón "Descargar APK" situado en la barra de navegación superior de este sitio web. Debido a que se trata de una distribución directa para tu condominio, deberás habilitar temporalmente la opción de "Instalar aplicaciones de fuentes desconocidas" en los ajustes de seguridad o configuración de tu dispositivo Android (versión 8.0 o superior).',
    },
    {
      question: '¿Cómo reportar un pago de cuotas o mantenimiento?',
      answer: 'Una vez iniciada la sesión en la aplicación móvil, dirígete al módulo de "Registrar Pago". Llena los campos requeridos: monto de la transacción, fecha del depósito o transferencia, banco emisor/receptor, número de referencia y el mes/período correspondiente. Finalmente, presiona el botón de cámara para tomar una foto del comprobante físico o selecciónalo directamente de la galería de imágenes de tu teléfono, y pulsa "Enviar".',
    },
    {
      question: '¿Cuánto tiempo tarda la administración en validar mi pago?',
      answer: 'El procesamiento y validación definitiva lo realizan los administradores de tu respectivo condominio tras contrastar la referencia con sus movimientos bancarios. Este proceso suele tomar entre 24 y 48 horas hábiles. Tan pronto como tu pago sea aprobado, tu estado en la aplicación cambiará automáticamente y recibirás una notificación de confirmación.',
    },
    {
      question: '¿Qué significan los estados de solvencia del Dashboard?',
      answer: 'El sistema calcula automáticamente tu solvencia en tiempo real en tres categorías: \n\n• SOLVENTE: Estás al corriente con todas tus cuotas ordinarias y extraordinarias.\n• PENDIENTE: Existe una cuota emitida recientemente y que aún se encuentra dentro del plazo de pago.\n• EN MORA (OVERDUE): El plazo límite de pago ha vencido (el sistema aplica un período de gracia configurable de 5 días hábiles tras la fecha de corte) y requieres regularizar tu saldo.',
    },
    {
      question: '¿Cómo recupero mi contraseña o accedo si olvidé mis credenciales?',
      answer: 'En la pantalla de inicio de sesión de la APK móvil, encontrarás la opción "¿Olvidaste tu contraseña?". Al ingresar tu correo electrónico registrado, recibirás un mensaje automático con instrucciones de recuperación de Supabase Auth para reestablecer tu clave de acceso de manera segura.',
    },
    {
      question: '¿Cómo puedo solicitar la eliminación definitiva de mi cuenta y mis datos?',
      answer: 'Puedes realizar la solicitud de dos maneras: directamente en la app ingresando a "Mi Perfil" &gt; "Configuración" &gt; "Eliminar cuenta", o bien enviando un correo electrónico directamente a adminnibstech@gmail.com. Una vez confirmada tu identidad, eliminaremos tus datos personales de forma definitiva en un plazo máximo de 72 horas, conservando únicamente los montos contables anonimizados para no afectar el balance del condominio.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-20">
      
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
        className="max-w-2xl mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-full text-xs font-medium text-on-surface-variant mb-6">
          <span className="material-symbols-outlined fill-1 text-primary-container" style={{ fontSize: '14px' }}>
            contact_support
          </span>
          Centro de Ayuda
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-on-surface leading-[1.1] mb-5">
          ¿En qué podemos <span className="text-shimmer">ayudarte?</span>
        </h1>
        <p className="text-base text-on-surface-variant leading-relaxed">
          Consulta las dudas más comunes de nuestros residentes sobre la descarga de la APK, registro de pagos y configuraciones de cuenta.
        </p>
      </motion.div>

      {/* FAQs Section */}
      <div className="space-y-4 mb-16">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="card bg-surface-container-lowest/20 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="text-base font-semibold text-on-surface tracking-tight pr-6">
                  {faq.question}
                </span>
                <span
                  className={`material-symbols-outlined text-on-surface-muted transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-primary-container' : ''
                  }`}
                  style={{ fontSize: '20px' }}
                >
                  keyboard_arrow_down
                </span>
              </button>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pt-1 border-t border-white/[0.04] text-sm text-on-surface-variant leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Still need help card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card p-8 bg-gradient-to-br from-surface-container-lowest to-surface-container/50 border-white/[0.06] flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
      >
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-on-surface tracking-tight">¿No encontraste la respuesta que buscabas?</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed max-w-lg">
            Si tienes problemas técnicos con la app, inconvenientes con los servidores o necesitas soporte directo con tu cuenta, escríbenos directamente.
          </p>
        </div>
        
        <div className="flex flex-col gap-3.5 w-full md:w-auto shrink-0">
          <a
            href="mailto:adminnibstech@gmail.com"
            className="btn-primary px-5 py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>mail</span>
            Escribir a Soporte
          </a>
          <span className="text-[11px] text-on-surface-muted text-center">
            Respuesta promedio en menos de 24 horas.
          </span>
        </div>
      </motion.div>

    </div>
  );
};

export default Support;
