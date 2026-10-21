# wordpresscommensapi

Biblioteca WordPressSharp de acceso XML-RPC a WordPress y aplicación ASP.NET MVC OctominervaAPI que permite añadir comentarios.

Documentación basada en los archivos locales revisados el 21 de octubre de 2026.

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
