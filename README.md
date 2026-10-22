**Languages:** [English](README.md) · [Español](README.es.md)

# octominerva-web

Octominerva site, web prototypes, and WordPress comment client/API.

<!-- BEGIN project-context -->

## Historical dates and evidence

**Reference year for this version: 2015.** This uses the most recent source or configuration file with a recoverable historical date; the exact creation date could not be confirmed.

- Most recent datable file: **2015-03-04**, [`octominerva/octominerva/Partials/WhatClientsSay2.html`](octominerva/octominerva/Partials/WhatClientsSay2.html); date of the commit modifying the file, recovered from local Git history.
- Earliest record among the original Git repositories included: **2014-10-05**. This may be an import and does not establish when the code was first written.
- Most recently published dependency among those checked: [Microsoft.AspNet.Cors 5.2.2](https://www.nuget.org/packages/Microsoft.AspNet.Cors/5.2.2), published on **2014-08-28** (declared version), in [`wordpresscommensapi/packages.config`](wordpresscommensapi/packages.config).
- Additional reference: target `v4.5` in [`octominerva/octominerva/octominerva.csproj`](octominerva/octominerva/octominerva.csproj); its [stable release was published on 2012-08-15](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-framework). This indicates the technology generation; earlier preview releases may have existed.

A dependency's publication places the preserved configuration at or after that version, if the reference is valid. Package updates may be much newer than the project's beginnings. Packages were not restored to verify this.

October 2026 copy timestamps and documents generated during this review were excluded. Recoverable dates do not guarantee that there are no later, undated changes.

Reference years by component (most recent datable file):

| Component | Year |
| --- | --- |
| [`octominerva`](octominerva/) | 2015 |
| [`wordpresscommensapi`](wordpresscommensapi/) | 2014 |

## Why this is worth exploring

The web presentation, WordPress CMS, and XML-RPC/.NET bridge demonstrate integration across different technologies. The boundary between WordPress-published content and site consumers is the most interesting part.

Code entry points:

- [`octominerva/octominerva/Partials`](octominerva/octominerva/Partials/)
- [`wordpresscommensapi/WordPressClient.cs`](wordpresscommensapi/WordPressClient.cs)

<!-- END project-context -->

## Contents

| Directory | Function |
| --- | --- |
| [`octominerva/`](octominerva/) | Octominerva presentation site with pages and dynamic partials, accompanied by a WordPress blog installation and comment integration code. |
| [`wordpresscommensapi/`](wordpresscommensapi/) | WordPressSharp library for XML-RPC access to WordPress and an ASP.NET MVC OctominervaAPI application that supports adding comments. |

WordPress configuration retains only example values. WordPress and bundled libraries retain their original notices.

## Requirements and setup

HTML/CSS/JavaScript, PHP/WordPress, ASP.NET MVC, and WordPressSharp/XML-RPC.

This is a historical copy. Consult each component's project files and README for versions and dependencies. Restore NuGet/npm from the appropriate folder; internal libraries may need rebuilding. Prepare databases and external services using your own accounts.

Preserved solutions:

- `octominerva/octominerva_web.sln`
- `wordpresscommensapi/WordPressSharp.sln`

## Configuration and security

Original secrets have been removed or replaced with `REPLACE_WITH_YOUR_VALUE`. Search for this marker before running and provide values through local configuration or environment variables. Sessions, private keys, signing certificates, databases, logs, deployment profiles, and binary packages are not published. The `.gitignore` protects these local files.

A fresh history is published: old commits remain only in the original local copy. Example values cannot connect to the original services.

## Validation status

A static review and secret scan were performed before publication. Applications, trading operations, deployments, and tests contacting external services were not run. Building with current tools is not guaranteed. Some projects need historical dependencies and assets that are not included.

## Licenses and provenance

Third-party licenses and attributions present in the code are retained. No blanket license is added to components that lacked one. This import preserves local sources and does not claim to be a current version of the original project.
