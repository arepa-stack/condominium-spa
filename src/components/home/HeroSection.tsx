import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="z-10">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter text-primary-container leading-[1.1] mb-8">
          Tu Condominio <br /> en la palma <br /> de tu mano.
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl mb-12 font-medium leading-relaxed">
          Gestiona pagos, facturas y caja chica sin papeleos. La solución definitiva para administradores y vecinos.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <button className="bg-primary-container text-on-primary-fixed px-10 py-5 rounded-xl font-extrabold text-lg flex items-center justify-center gap-3 hover:bg-secondary-container hover:shadow-[0_0_20px_#ff6d00] transition-all duration-300 transform hover:-translate-y-1">
            <span className="material-symbols-outlined">download</span>
            Descargar APK
          </button>
          <button className="border border-outline-variant/30 text-on-surface px-10 py-5 rounded-xl font-bold text-lg hover:bg-surface-container-high transition-all">
            Ver Demo
          </button>
        </div>
      </div>

      {/* Floating 3D Mockup Visual */}
      <div className="relative flex justify-center items-center">
        {/* Glowing paths decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-tertiary-container/10 rounded-full blur-[100px]"></div>
          <div className="absolute top-1/4 right-0 w-1 h-64 bg-gradient-to-b from-transparent via-tertiary-container to-transparent opacity-50 blur-[2px]"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-1 bg-gradient-to-r from-transparent via-tertiary-container to-transparent opacity-50 blur-[2px]"></div>
        </div>
        <div className="relative z-10 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-700 ease-out">
          <div className="bg-surface-container-lowest p-4 rounded-[3rem] shadow-2xl border border-white/10 glass-card">
            <div className="bg-[#09151a] w-[300px] h-[600px] rounded-[2.5rem] overflow-hidden relative border border-white/5">
              {/* Mobile App UI Mockup */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary text-sm">person</span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
                </div>
                <div className="mb-8">
                  <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mb-1">Balance Actual</p>
                  <h3 className="text-3xl font-black text-on-surface">$12,450.00</h3>
                </div>
                {/* Chart Mockup */}
                <div className="bg-surface-container-high rounded-2xl p-4 mb-6">
                  <p className="text-xs font-bold mb-4">Payment History</p>
                  <div className="flex items-end justify-between h-24 gap-2">
                    <div className="w-full bg-tertiary/40 rounded-t-md" style={{ height: '60%' }}></div>
                    <div className="w-full bg-primary-container rounded-t-md" style={{ height: '85%' }}></div>
                    <div className="w-full bg-tertiary/40 rounded-t-md" style={{ height: '45%' }}></div>
                    <div className="w-full bg-tertiary/60 rounded-t-md" style={{ height: '70%' }}></div>
                    <div className="w-full bg-primary-container/80 rounded-t-md" style={{ height: '95%' }}></div>
                  </div>
                </div>
                {/* List Items */}
                <div className="space-y-4">
                  <div className="bg-surface-container rounded-xl p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold">Mantenimiento Ago</p>
                      <p className="text-[10px] text-on-surface-variant">Completado</p>
                    </div>
                  </div>
                  <div className="bg-surface-container rounded-xl p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary-container text-sm">pending</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold">Reserva Piscina</p>
                      <p className="text-[10px] text-on-surface-variant">Pendiente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
