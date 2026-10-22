**Languages:** [English](Readme.md) · [Español](README.es.md)

# wordpresscommensapi

Biblioteca WordPressSharp de acceso XML-RPC a WordPress y aplicación ASP.NET MVC OctominervaAPI que permite añadir comentarios.

Documentación basada en los archivos locales revisados el 21 de octubre de 2026.

<!-- BEGIN project-context -->

## Antigüedad y evidencia

**Año de referencia de esta versión: 2014.** Se toma el archivo de código o configuración más reciente con una fecha histórica recuperable; no se ha podido confirmar la fecha exacta de creación.

- Archivo más reciente datable: **2014-12-06**, [`wordpresscommensapi/OctominervaAPI/Controllers/HomeController.cs`](OctominervaAPI/Controllers/HomeController.cs); fecha del commit que modificó el archivo, recuperada del Git local.
- Primer registro del repositorio Git original que contiene este código: **2014-12-04**. Puede corresponder a una importación; no prueba cuándo se escribió por primera vez.
- Dependencia fechada más reciente entre las comprobadas: [Microsoft.AspNet.Cors 5.2.2](https://www.nuget.org/packages/Microsoft.AspNet.Cors/5.2.2), publicada el **2014-08-28** (versión declarada), en [`wordpresscommensapi/packages.config`](packages.config).
- Referencia adicional: destino `v4.5` en [`wordpresscommensapi/WordPressSharp.csproj`](WordPressSharp.csproj); su [versión estable se publicó el 2012-08-15](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-framework). Es una pista de generación tecnológica; pudieron existir versiones preliminares anteriores.

La publicación de una dependencia sitúa la configuración conservada a partir de esa versión, si la referencia es válida. Una actualización de paquetes puede ser mucho más reciente que el inicio del proyecto. No se restauraron paquetes para comprobarlo.

Se descartaron las marcas de tiempo de la copia de octubre de 2026 y los documentos generados durante esta revisión. Las fechas recuperables no garantizan que no existan cambios posteriores sin datar.

## Por qué merece la pena mirarlo

WordPressClient ofrece una interfaz C# tipada sobre XML-RPC y la aplicación MVC la conecta con comentarios del sitio. Es interesante seguir ese puente entre un CMS PHP y una aplicación .NET.

Puntos de entrada al código:

- [`WordPressClient.cs`](WordPressClient.cs)
- [`IWordPressService.cs`](IWordPressService.cs)
- [`OctominervaAPI/Controllers/HomeController.cs`](OctominervaAPI/Controllers/HomeController.cs)

<!-- END project-context -->

## Estructura y responsabilidades

| Ruta | Responsabilidad |
| --- | --- |
| `WordPressSharp.csproj, WordPressClient.cs, IWordPressService.cs` | Cliente y contratos XML-RPC para publicaciones, medios, términos, usuarios y comentarios. |
| `Models/` | Modelos de intercambio de WordPress. |
| `WordPressSiteConfig.cs` | URL base, usuario, contraseña e identificador de blog. |
| `OctominervaAPI/Controllers/HomeController.cs` | Crea comentarios mediante WordPressClient. |
| `OctominervaAPI/` | Aplicación MVC y configuración CORS. |

## Tecnologías y requisitos

Windows, Visual Studio/MSBuild, .NET Framework 4.5, NuGet, ASP.NET MVC 4 y un sitio WordPress con XML-RPC accesible.

Destinos leídos de los proyectos: `v4.5`.

## Preparación y arranque

Abrir WordPressSharp.sln, restaurar NuGet y seleccionar OctominervaAPI para IIS Express. Configurar un WordPress de pruebas antes de llamar a la operación de comentarios.

Soluciones presentes: `WordPressSharp.sln`.

## Configuración e integraciones

El controlador fija la configuración del sitio; la contraseña visible está vacía. Un perfil .pubxml.user es configuración privada local. No se identificó una contraseña WordPress no vacía en el controlador revisado.

## Estado de esta copia

Relacionado con la integración de comentarios de octominerva. Revisar los permisos WordPress y el acceso a la API antes de habilitar escrituras.

La revisión fue estática: no se restauraron dependencias, no se compiló ni se ejecutaron aplicaciones o pruebas. Los comandos anteriores son instrucciones de preparación, no resultados de validación. Las versiones indicadas son las del código conservado.


## Copia pública

Las credenciales originales se han retirado o sustituido por `REPLACE_WITH_YOUR_VALUE`. Los datos locales, sesiones, certificados privados y perfiles de despliegue se omiten. Configurar servicios y credenciales propios antes de ejecutar. La compilación y el funcionamiento con servicios externos no se han validado.
