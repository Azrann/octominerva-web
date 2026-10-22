**Languages:** [English](README.md) · [Español](README.es.md)

# octominerva-web

Sitio Octominerva, prototipos web y cliente/API de comentarios WordPress.

<!-- BEGIN project-context -->

## Antigüedad y evidencia

**Año de referencia de esta versión: 2015.** Se toma el archivo de código o configuración más reciente con una fecha histórica recuperable; no se ha podido confirmar la fecha exacta de creación.

- Archivo más reciente datable: **2015-03-04**, [`octominerva/octominerva/Partials/WhatClientsSay2.html`](octominerva/octominerva/Partials/WhatClientsSay2.html); fecha del commit que modificó el archivo, recuperada del Git local.
- Primer registro entre los repositorios Git originales incluidos: **2014-10-05**. Puede corresponder a una importación; no prueba cuándo se escribió por primera vez.
- Dependencia fechada más reciente entre las comprobadas: [Microsoft.AspNet.Cors 5.2.2](https://www.nuget.org/packages/Microsoft.AspNet.Cors/5.2.2), publicada el **2014-08-28** (versión declarada), en [`wordpresscommensapi/packages.config`](wordpresscommensapi/packages.config).
- Referencia adicional: destino `v4.5` en [`octominerva/octominerva/octominerva.csproj`](octominerva/octominerva/octominerva.csproj); su [versión estable se publicó el 2012-08-15](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-framework). Es una pista de generación tecnológica; pudieron existir versiones preliminares anteriores.

La publicación de una dependencia sitúa la configuración conservada a partir de esa versión, si la referencia es válida. Una actualización de paquetes puede ser mucho más reciente que el inicio del proyecto. No se restauraron paquetes para comprobarlo.

Se descartaron las marcas de tiempo de la copia de octubre de 2026 y los documentos generados durante esta revisión. Las fechas recuperables no garantizan que no existan cambios posteriores sin datar.

Años de referencia por componente (archivo más reciente datable):

| Componente | Año |
| --- | --- |
| [`octominerva`](octominerva/) | 2015 |
| [`wordpresscommensapi`](wordpresscommensapi/) | 2014 |

## Por qué merece la pena mirarlo

La presentación web, el CMS WordPress y el puente XML-RPC/.NET permiten estudiar una integración entre tecnologías distintas. Lo más interesante es el límite entre el contenido publicado en WordPress y los consumidores del sitio.

Puntos de entrada al código:

- [`octominerva/octominerva/Partials`](octominerva/octominerva/Partials/)
- [`wordpresscommensapi/WordPressClient.cs`](wordpresscommensapi/WordPressClient.cs)

<!-- END project-context -->

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
