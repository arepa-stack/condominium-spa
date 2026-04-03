# react-modern-responsive

## Summary

**Diseño responsivo y moderno "Mobile-First" utilizando React, Tailwind CSS, layouts híbridos y tipografía fluida.**

- Define el estándar para progresiones móviles desde 320px hasta pantallas ultra anchas usando los prefijos utilitarios de Tailwind.
- Implementa layouts bidimensionales (Grid) para paneles administrativos y unidimensionales (Flexbox) para componentes de interfaz.
- Utiliza utilidades de Tailwind para imágenes responsivas (`object-cover`, `aspect-ratio`).
- Aplica Container Queries de Tailwind (`@tailwindcss/container-queries`) para componentes que se adaptan al espacio de su contenedor.
- Requiere el uso de Functional Components en React y prohíbe el uso de anchos fijos en píxeles.

## When to use this skill

- **Nuevos componentes React**: Creación de interfaces de usuario (UI) modernas y adaptables.
- **Dashboards administrativos**: Interfaces de gestión con múltiples paneles laterales y tablas de datos (ej. gestión de condominios).
- **Aplicaciones móviles PWA**: Vistas enfocadas en la experiencia táctil de smartphones.

## Instructions

### Step 1: Enfoque Mobile-First con Tailwind

Comienza siempre definiendo las clases para la vista móvil en el `className`. Usa los prefijos `sm:`, `md:`, `lg:`, `xl:` solo para escalar el diseño hacia arriba.

**Ejemplo:**

```jsx
// Default (Móvil) -> md (Tablet) -> lg (Desktop)
export default function Heading() {
  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-4">
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold">Título</h1>
    </div>
  );
}
```
