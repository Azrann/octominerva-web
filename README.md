# octominerva-web

Sitio Octominerva, prototipos web y cliente/API de comentarios WordPress.

## Contenido

| Directorio | Función |
| --- | --- |
| [`octominerva/`](octominerva/) | Sitio de presentación de Octominerva con páginas y parciales dinámicos, acompañado de una instalación WordPress para el blog y código de integración de comentarios. |
| [`wordpresscommensapi/`](wordpresscommensapi/) | Biblioteca WordPressSharp de acceso XML-RPC a WordPress y aplicación ASP.NET MVC OctominervaAPI que permite añadir comentarios. |

La configuración WordPress conserva únicamente valores de ejemplo. WordPress y las bibliotecas incluidas mantienen sus avisos originales.

## Requisitos y preparación

HTML/CSS/JavaScript, PHP/WordPress, ASP.NET MVC y WordPressSharp/XML-RPC.

Esta es una copia histórica. Consultar los archivos de proyecto y los README de cada componente para sus versiones y dependencias. Restaurar NuGet/npm desde la carpeta correspondiente; las bibliotecas internas pueden necesitar reconstrucción. Preparar las bases de datos y los servicios externos con cuentas propias.

Soluciones conservadas:

- `octominerva/octominerva_web.sln`
- `wordpresscommensapi/WordPressSharp.sln`

## Configuración y seguridad

Los secretos originales se han eliminado o sustituido por `REPLACE_WITH_YOUR_VALUE`. Buscar este marcador antes de ejecutar y aportar los valores mediante configuración local o variables de entorno. Las sesiones, claves privadas, certificados de firma, bases de datos, registros, perfiles de despliegue y paquetes binarios no se publican. El `.gitignore` protege estos archivos locales.

Se publica un historial nuevo: los commits antiguos permanecen únicamente en la copia local original. Los valores de ejemplo no permiten conectarse a los servicios originales.

## Estado de validación

Se realizó una revisión estática y un escaneo de secretos antes de publicar. No se ejecutaron aplicaciones, operaciones de trading, despliegues ni pruebas que contacten servicios externos. No se garantiza la compilación con herramientas actuales. Algunos proyectos necesitan dependencias históricas y activos que no están incluidos.

## Licencias y procedencia

Se conservan las licencias y atribuciones de terceros presentes en el código. No se añade una licencia global a los componentes que no la tenían. Esta importación conserva fuentes locales y no afirma ser una versión actual del proyecto original.
