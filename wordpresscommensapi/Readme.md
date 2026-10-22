**Languages:** [English](Readme.md) · [Español](README.es.md)

# wordpresscommensapi

WordPressSharp library for XML-RPC access to WordPress and an ASP.NET MVC OctominervaAPI application that supports adding comments.

Documentation based on local files reviewed on 21 October 2026.

<!-- BEGIN project-context -->

## Historical dates and evidence

**Reference year for this version: 2014.** This uses the most recent source or configuration file with a recoverable historical date; the exact creation date could not be confirmed.

- Most recent datable file: **2014-12-06**, [`wordpresscommensapi/OctominervaAPI/Controllers/HomeController.cs`](OctominervaAPI/Controllers/HomeController.cs); date of the commit modifying the file, recovered from local Git history.
- First record in the original Git repository containing this code: **2014-12-04**. This may be an import and does not establish when the code was first written.
- Most recently published dependency among those checked: [Microsoft.AspNet.Cors 5.2.2](https://www.nuget.org/packages/Microsoft.AspNet.Cors/5.2.2), published on **2014-08-28** (declared version), in [`wordpresscommensapi/packages.config`](packages.config).
- Additional reference: target `v4.5` in [`wordpresscommensapi/WordPressSharp.csproj`](WordPressSharp.csproj); its [stable release was published on 2012-08-15](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-framework). This indicates the technology generation; earlier preview releases may have existed.

A dependency's publication places the preserved configuration at or after that version, if the reference is valid. Package updates may be much newer than the project's beginnings. Packages were not restored to verify this.

October 2026 copy timestamps and documents generated during this review were excluded. Recoverable dates do not guarantee that there are no later, undated changes.

## Why this is worth exploring

WordPressClient provides a typed C# interface over XML-RPC, and the MVC application connects it to site comments. Follow this bridge between a PHP CMS and a .NET application.

Code entry points:

- [`WordPressClient.cs`](WordPressClient.cs)
- [`IWordPressService.cs`](IWordPressService.cs)
- [`OctominervaAPI/Controllers/HomeController.cs`](OctominervaAPI/Controllers/HomeController.cs)

<!-- END project-context -->

## Structure and responsibilities

| Path | Responsibility |
| --- | --- |
| `WordPressSharp.csproj, WordPressClient.cs, IWordPressService.cs` | XML-RPC client and contracts for posts, media, terms, users, and comments. |
| `Models/` | WordPress interchange models. |
| `WordPressSiteConfig.cs` | Base URL, username, password, and blog identifier. |
| `OctominervaAPI/Controllers/HomeController.cs` | Creates comments using WordPressClient. |
| `OctominervaAPI/` | MVC application and CORS configuration. |

## Technologies and requirements

Windows, Visual Studio/MSBuild, .NET Framework 4.5, NuGet, ASP.NET MVC 4, and a WordPress site with accessible XML-RPC.

Targets read from project files: `v4.5`.

## Setup and startup

Open WordPressSharp.sln, restore NuGet packages, and select OctominervaAPI for IIS Express. Configure a test WordPress installation before invoking comment operations.

Solutions present: `WordPressSharp.sln`.

## Configuration and integrations

The controller hardcodes site configuration; the visible password is empty. A .pubxml.user profile is private local configuration. No nonempty WordPress password was identified in the reviewed controller.

## Status of this copy

Related to octominerva's comment integration. Review WordPress permissions and API access before enabling writes.

The review was static: dependencies were not restored, and applications and tests were neither built nor run. The commands above are setup instructions, not validation results. Listed versions describe the preserved code.


## Public copy

Original credentials have been removed or replaced with `REPLACE_WITH_YOUR_VALUE`. Local data, sessions, private certificates, and deployment profiles are omitted. Configure your own services and credentials before running. Building and operation with external services have not been validated.
