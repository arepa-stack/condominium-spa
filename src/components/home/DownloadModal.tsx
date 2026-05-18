import React, { useState, useEffect } from 'react';
import { submitDownloadRequest, getRemainingCooldown, type DownloadFormData } from '../../services/api';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const inputClass =
  'w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-muted focus:outline-none focus:ring-2 focus:ring-primary-container/40 focus:border-primary-container/60 transition-all font-medium text-sm';

const labelClass = 'block text-[10px] font-bold uppercase tracking-widest text-on-surface-muted mb-1.5';

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
      document.body.style.overflow = 'hidden';
      const remaining = getRemainingCooldown();
      setCooldown(remaining);
      if (remaining > 0) {
        timer = setInterval(() => {
          const rem = getRemainingCooldown();
          setCooldown(rem);
          if (rem <= 0) clearInterval(timer);
        }, 1000);
      }
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      if (timer) clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { fullName, contact, email, buildingName, location, estimatedUsers } = formData;
    if (!fullName || !contact || !email || !buildingName || !location || !estimatedUsers) {
      setError('Todos los campos son obligatorios.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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
        setFormData({ fullName: '', contact: '', email: '', buildingName: '', location: '', estimatedUsers: '' });
      }, 4000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Ocurrió un error al enviar la información.');
    } finally {
      setLoading(false);
    }
  };

  const formatCooldown = (ms: number) => {
    const min = Math.floor(ms / 60000);
    const sec = Math.floor((ms % 60000) / 1000);
    return `${min}:${sec.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className="card w-full max-w-xl my-4"
          style={{ borderRadius: '1.25rem' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-on-surface-variant hover:text-on-surface transition-all hover:rotate-90 z-10 border border-white/10"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>

          <div className="p-8 md:p-10">
            {/* Header */}
            <div className="mb-7 pr-10">
              <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1 rounded-full text-[11px] font-medium text-on-surface-variant mb-4">
                <span className="material-symbols-outlined fill-1 text-primary-container" style={{ fontSize: '13px' }}>smartphone</span>
                Android APK
              </div>
              <h2 className="text-3xl font-extrabold text-on-surface mb-2 tracking-[-0.02em]">
                ¡Casi tienes la app!
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                Completa estos datos para gestionar tu acceso y activar tu condominio en Apto.
              </p>
            </div>

            {success ? (
              <div className="bg-status-success/[0.08] border border-status-success/20 rounded-2xl p-10 text-center">
                <div className="w-16 h-16 bg-status-success/20 rounded-full flex items-center justify-center mx-auto mb-5 ring-1 ring-status-success/30">
                  <span className="material-symbols-outlined fill-1 text-status-success" style={{ fontSize: '32px' }}>check_circle</span>
                </div>
                <h3 className="text-2xl font-extrabold text-on-surface mb-2 tracking-tight">¡Solicitud enviada!</h3>
                <p className="text-on-surface-variant max-w-xs mx-auto leading-relaxed">
                  En breve recibirás la APK y las instrucciones de activación por correo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Tu Nombre</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                      placeholder="Ej. Juan Pérez" className={inputClass} required />
                  </div>
                  <div>
                    <label className={labelClass}>WhatsApp</label>
                    <input type="text" name="contact" value={formData.contact} onChange={handleChange}
                      placeholder="+58 412..." className={inputClass} required />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Correo electrónico</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange}
                    placeholder="juan@ejemplo.com" className={inputClass} required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Edificio</label>
                    <input type="text" name="buildingName" value={formData.buildingName} onChange={handleChange}
                      placeholder="Residencias Sol" className={inputClass} required />
                  </div>
                  <div>
                    <label className={labelClass}>Ubicación</label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange}
                      placeholder="Caracas, Chacao" className={inputClass} required />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Usuarios estimados</label>
                  <div className="relative">
                    <select name="estimatedUsers" value={formData.estimatedUsers} onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer pr-10`} required>
                      <option value="" disabled>Seleccionar escala...</option>
                      <option value="1-10">1 a 10 personas</option>
                      <option value="11-50">11 a 50 personas</option>
                      <option value="51-100">51 a 100 personas</option>
                      <option value="100+">Más de 100 personas</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-muted" style={{ fontSize: '20px' }}>
                      expand_more
                    </span>
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-2.5 p-3.5 bg-error-container/30 border border-status-error/30 rounded-xl text-status-error text-sm font-semibold">
                    <span className="material-symbols-outlined fill-1 flex-shrink-0" style={{ fontSize: '18px' }}>warning</span>
                    {error}
                  </div>
                )}

                <button
                  disabled={loading || cooldown > 0}
                  type="submit"
                  className="btn-primary w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : cooldown > 0 ? (
                    <>
                      <span className="material-symbols-outlined">timer</span>
                      Esperar {formatCooldown(cooldown)}
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined fill-1">file_download</span>
                      Enviar y Descargar APK
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;
