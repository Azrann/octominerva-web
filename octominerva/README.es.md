**Languages:** [English](Readme.md) · [Español](README.es.md)

# octominerva

Sitio de presentación de Octominerva con páginas y parciales dinámicos, acompañado de una instalación WordPress para el blog y código de integración de comentarios.

Documentación basada en los archivos locales revisados el 21 de octubre de 2026.

<!-- BEGIN project-context -->

## Antigüedad y evidencia

**Año de referencia de esta versión: 2015.** Se toma el archivo de código o configuración más reciente con una fecha histórica recuperable; no se ha podido confirmar la fecha exacta de creación.

- Archivo más reciente datable: **2015-03-04**, [`octominerva/octominerva/Partials/WhatClientsSay2.html`](octominerva/Partials/WhatClientsSay2.html); fecha del commit que modificó el archivo, recuperada del Git local.
- Primer registro del repositorio Git original que contiene este código: **2014-10-05**. Puede corresponder a una importación; no prueba cuándo se escribió por primera vez.
- Referencia adicional: destino `v4.5` en [`octominerva/octominerva/octominerva.csproj`](octominerva/octominerva.csproj); su [versión estable se publicó el 2012-08-15](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-framework). Es una pista de generación tecnológica; pudieron existir versiones preliminares anteriores.

Se descartaron las marcas de tiempo de la copia de octubre de 2026 y los documentos generados durante esta revisión. Las fechas recuperables no garantizan que no existan cambios posteriores sin datar.

## Por qué merece la pena mirarlo

La separación entre las páginas del sitio y el contenido servido por WordPress permite explorar una composición desacoplada de presentación y CMS. Las páginas y parciales propios son un mejor punto de entrada que recorrer todo el WordPress incluido.

Puntos de entrada al código:

- [`octominerva/Index.html`](octominerva/Index.html)
- [`octominerva/Partials`](octominerva/Partials/)
- [`blog/blog/wp-content/plugins/json-rest-api`](blog/blog/wp-content/plugins/json-rest-api/)

<!-- END project-context -->

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
