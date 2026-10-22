**Languages:** [English](Readme.md) · [Español](README.es.md)

# octominerva

Octominerva presentation site with pages and dynamic partials, accompanied by a WordPress blog installation and comment integration code.

Documentation based on local files reviewed on 21 October 2026.

<!-- BEGIN project-context -->

## Historical dates and evidence

**Reference year for this version: 2015.** This uses the most recent source or configuration file with a recoverable historical date; the exact creation date could not be confirmed.

- Most recent datable file: **2015-03-04**, [`octominerva/octominerva/Partials/WhatClientsSay2.html`](octominerva/Partials/WhatClientsSay2.html); date of the commit modifying the file, recovered from local Git history.
- First record in the original Git repository containing this code: **2014-10-05**. This may be an import and does not establish when the code was first written.
- Additional reference: target `v4.5` in [`octominerva/octominerva/octominerva.csproj`](octominerva/octominerva.csproj); its [stable release was published on 2012-08-15](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-framework). This indicates the technology generation; earlier preview releases may have existed.

October 2026 copy timestamps and documents generated during this review were excluded. Recoverable dates do not guarantee that there are no later, undated changes.

## Why this is worth exploring

Separating site pages from WordPress-served content lets you explore decoupled presentation and CMS composition. Custom pages and partials are a better starting point than navigating the entire bundled WordPress installation.

Code entry points:

- [`octominerva/Index.html`](octominerva/Index.html)
- [`octominerva/Partials`](octominerva/Partials/)
- [`blog/blog/wp-content/plugins/json-rest-api`](blog/blog/wp-content/plugins/json-rest-api/)

<!-- END project-context -->

## Structure and responsibilities

| Path | Responsibility |
| --- | --- |
| `octominerva/Index.html, octominerva/Partials/` | Main site and presentation, case study, contact, and blog sections. |
| `octominerva/Scripts/` | Interface code and libraries. |
| `blog/blog/` | WordPress installation with configuration, plugins, and themes. |
| `blog/blog/BlogComService.js` | Blog comment integration. |
| `src/` | Additional copied content; review its role before redistribution. |
| `octominerva_web.sln` | Visual Studio solution; .NET Framework 4.5 web project. |

## Technologies and requirements

An HTTP server for the interface; PHP and MySQL compatible with this WordPress copy for the blog. IIS/Visual Studio can host the site container if PHP is configured.

Targets read from project files: `v4.5`.

## Setup and startup

Serve the octominerva folder and prepare the blog separately with a new database. Adapt comment service paths and endpoints to the local environment.

Solutions present: `octominerva_web.sln`.

## Configuration and integrations

blog/blog/wp-config.php contains database credentials and WordPress authentication material. Replace them with your own values and review site and blog URLs.

## Status of this copy

wordpresscommensapi contains a comment API related to Octominerva. Review theme, plugin, and template licenses before redistributing the complete copy.

The review was static: dependencies were not restored, and applications and tests were neither built nor run. The commands above are setup instructions, not validation results. Listed versions describe the preserved code.


## Public copy

Original credentials have been removed or replaced with `REPLACE_WITH_YOUR_VALUE`. Local data, sessions, private certificates, and deployment profiles are omitted. Configure your own services and credentials before running. Building and operation with external services have not been validated.
