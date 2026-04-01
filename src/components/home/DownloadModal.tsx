import React, { useState, useEffect } from 'react';
import { submitDownloadRequest, getRemainingCooldown, type DownloadFormData } from '../../services/api';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<DownloadFormData>({
    fullName: '',
    contact: '',
    email: '',
    buildingName: '',
    location: '',
    estimatedUsers: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    let timer: number | undefined;
    if (isOpen) {
      const remaining = getRemainingCooldown();
      setCooldown(remaining);
      if (remaining > 0) {
        timer = setInterval(() => {
          const rem = getRemainingCooldown();
          setCooldown(rem);
          if (rem <= 0) clearInterval(timer);
        }, 1000);
      }
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic clientside validation
    const { fullName, contact, email, buildingName, location, estimatedUsers } = formData;
    if (!fullName || !contact || !email || !buildingName || !location || !estimatedUsers) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor ingresa un correo electrónico válido.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await submitDownloadRequest(formData);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
        setFormData({
          fullName: '',
          contact: '',
          email: '',
          buildingName: '',
          location: '',
          estimatedUsers: '',
        });
      }, 4000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Ocurrió un error al enviar la información.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const formatCooldown = (ms: number) => {
    const min = Math.floor(ms / 60000);
    const sec = Math.floor((ms % 60000) / 1000);
    return `${min}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div 
        className="bg-surface-container-low border border-outline-variant/30 w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-on-surface-variant hover:text-on-surface hover:rotate-90 transition-all duration-300"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>

        <div className="p-8 md:p-12">
          <div className="mb-10 pr-12">
            <h2 className="text-4xl font-black text-on-surface mb-3 tracking-tighter leading-tight">
              ¡Casi tienes la App!
            </h2>
            <p className="text-on-surface-variant text-lg font-medium leading-relaxed">
              Necesitamos unos datos básicos para gestionar tu acceso y empezar a potenciar tu condominio.
            </p>
          </div>

          {success ? (
            <div className="bg-primary-container/10 border border-primary-container/20 rounded-[2rem] p-12 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="w-24 h-24 bg-primary-container rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(255,109,0,0.5)]">
                <span className="material-symbols-outlined text-white text-5xl">check_circle</span>
              </div>
              <h3 className="text-3xl font-black text-on-surface mb-4">¡Registro Exitoso!</h3>
              <p className="text-on-surface-variant text-lg max-w-xs mx-auto">
                Tu solicitud ha sido enviada. Pronto recibirás noticias nuestras para completar la descarga.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant/70 ml-1">Tu Nombre</label>
                  <input
                    required
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-surface-container border border-outline-variant/30 rounded-2xl px-5 py-4 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:ring-2 focus:ring-primary-container/40 focus:border-primary-container/50 transition-all font-semibold text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant/70 ml-1">Teléfono / WhatsApp</label>
                  <input
                    required
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="+58 412..."
                    className="w-full bg-surface-container border border-outline-variant/30 rounded-2xl px-5 py-4 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:ring-2 focus:ring-primary-container/40 focus:border-primary-container/50 transition-all font-semibold text-lg"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant/70 ml-1">Correo Institucional / Personal</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="juan@ejemplo.com"
                  className="w-full bg-surface-container border border-outline-variant/30 rounded-2xl px-5 py-4 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:ring-2 focus:ring-primary-container/40 focus:border-primary-container/50 transition-all font-semibold text-lg"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant/70 ml-1">Nombre del Edificio</label>
                  <input
                    required
                    type="text"
                    name="buildingName"
                    value={formData.buildingName}
                    onChange={handleChange}
                    placeholder="Residencias Sol"
                    className="w-full bg-surface-container border border-outline-variant/30 rounded-2xl px-5 py-4 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:ring-2 focus:ring-primary-container/40 focus:border-primary-container/50 transition-all font-semibold text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant/70 ml-1">Ubicación</label>
                  <input
                    required
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Ej. Caracas, Chacao"
                    className="w-full bg-surface-container border border-outline-variant/30 rounded-2xl px-5 py-4 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:ring-2 focus:ring-primary-container/40 focus:border-primary-container/50 transition-all font-semibold text-lg"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant/70 ml-1">Usuarios estimados</label>
                <div className="relative">
                  <select
                    required
                    name="estimatedUsers"
                    value={formData.estimatedUsers}
                    onChange={handleChange}
                    className="w-full bg-surface-container border border-outline-variant/30 rounded-2xl px-5 py-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container/40 transition-all font-semibold text-lg appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Seleccionar escala...</option>
                    <option value="1-10">1 a 10 personas</option>
                    <option value="11-50">11 a 50 personas</option>
                    <option value="51-100">51 a 100 personas</option>
                    <option value="100+">Más de 100 personas</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                    expand_more
                  </span>
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-3 p-5 bg-error-container/10 border border-error-container/30 rounded-2xl text-error text-base font-bold animate-pulse">
                  <span className="material-symbols-outlined text-2xl">warning</span>
                  {error}
                </div>
              )}

              <button
                disabled={loading || cooldown > 0}
                type="submit"
                className="w-full bg-primary-container text-on-primary-fixed py-5 rounded-2xl font-black text-xl shadow-xl hover:shadow-[0_0_30px_#ff6d00] hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group relative overflow-hidden"
              >
                <div className="flex items-center justify-center gap-3">
                  {loading ? (
                    <div className="w-7 h-7 border-4 border-on-primary-fixed/30 border-t-on-primary-fixed rounded-full animate-spin"></div>
                  ) : cooldown > 0 ? (
                    <>
                      <span className="material-symbols-outlined">timer</span>
                      <span>Esperar {formatCooldown(cooldown)}</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined">file_download</span>
                      <span>Enviar y Descargar APK</span>
                    </>
                  )}
                </div>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;
