# octominerva

Sitio de presentación de Octominerva con páginas y parciales dinámicos, acompañado de una instalación WordPress para el blog y código de integración de comentarios.

Documentación basada en los archivos locales revisados el 21 de octubre de 2026.

## Estructura y responsabilidades

| Ruta | Responsabilidad |
| --- | --- |
| `octominerva/Index.html, octominerva/Partials/` | Sitio principal y secciones de presentación, casos, contacto y blog. |
| `octominerva/Scripts/` | Código de la interfaz y bibliotecas. |
| `blog/blog/` | Instalación WordPress con configuración, plugins y temas. |
| `blog/blog/BlogComService.js` | Integración de comentarios del blog. |
| `src/` | Contenido adicional de la copia; revisar su función antes de redistribuir. |
| `octominerva_web.sln` | Solución de Visual Studio; proyecto web .NET Framework 4.5. |

## Tecnologías y requisitos

Servidor HTTP para la interfaz; PHP y MySQL compatibles con la copia WordPress para el blog. IIS/Visual Studio puede alojar el contenedor del sitio si se configura PHP.

Destinos leídos de los proyectos: `v4.5`.

## Preparación y arranque

Servir la carpeta octominerva y preparar el blog por separado con una base nueva. Adaptar las rutas y servicios de comentarios al entorno local.

Soluciones presentes: `octominerva_web.sln`.

## Configuración e integraciones

blog/blog/wp-config.php contiene credenciales de base de datos y material de autenticación de WordPress. Sustituirlos por valores propios y revisar las URLs del sitio y del blog.

## Estado de esta copia

wordpresscommensapi contiene una API de comentarios relacionada con Octominerva. Revisar licencias de temas, plugins y plantillas antes de redistribuir la copia completa.

La revisión fue estática: no se restauraron dependencias, no se compiló ni se ejecutaron aplicaciones o pruebas. Los comandos anteriores son instrucciones de preparación, no resultados de validación. Las versiones indicadas son las del código conservado.


## Copia pública

Las credenciales originales se han retirado o sustituido por `REPLACE_WITH_YOUR_VALUE`. Los datos locales, sesiones, certificados privados y perfiles de despliegue se omiten. Configurar servicios y credenciales propios antes de ejecutar. La compilación y el funcionamiento con servicios externos no se han validado.
