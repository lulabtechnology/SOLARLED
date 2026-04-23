PATCH SOLARLED - NEXT.JS SECURITY UPDATE

Qué cambia:
- package.json
- package-lock.json

Cambio aplicado:
- next: 15.2.4 -> 15.5.9

Por qué:
- La versión 15.2.4 está afectada por el aviso de seguridad CVE-2025-66478.
- Además, el update de seguridad del 11 de diciembre de 2025 recomienda subir 15.2.x a 15.2.8 o, mejor aún, actualizar a una línea 15.x ya parchada como 15.5.9.

Cómo usar este patch:
1) Abre tu proyecto actual.
2) Reemplaza SOLO estos 2 archivos en la raíz del proyecto:
   - package.json
   - package-lock.json
3) Sube commit.
4) Vercel volverá a instalar dependencias y hacer deploy.

Nota:
- Este ZIP NO incluye el proyecto completo.
- Es solo el patch para corregir la alerta de seguridad de Next.js.
