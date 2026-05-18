import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-primary-container to-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined fill-1 text-white" style={{ fontSize: '18px' }}>apartment</span>
                <div className="absolute inset-0 rounded-lg ring-1 ring-white/20" />
              </div>
              <span className="text-lg font-bold tracking-tight text-on-surface">
                Apto
                <span className="ml-1.5 text-on-surface-muted font-medium">by</span>{' '}
                <span className="bg-gradient-to-r from-primary-container to-secondary-container bg-clip-text text-transparent">
                  nibs
                </span>
              </span>
            </div>
            <p className="text-sm text-on-surface-variant max-w-xs leading-relaxed">
              Gestión condominial moderna, sin papeleos.
            </p>
            <p className="text-xs text-on-surface-muted mt-2">
              © {year} Apto by nibs. Todos los derechos reservados.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {[
              { label: 'Privacidad', href: '#' },
              { label: 'Términos',   href: '#' },
              { label: 'Soporte',    href: '#' },
              { label: 'Seguridad',  href: '#' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-on-surface-variant hover:text-on-surface font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
