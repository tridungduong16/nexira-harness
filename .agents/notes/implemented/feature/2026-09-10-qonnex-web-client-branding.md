# Agent Note: Qonnex Web Client Branding

Status: implemented

English | [中文](2026-09-10-qonnex-web-client-branding.zh.md)

## Problem

The Web client presents product identity through independent owners: build-time document metadata, PWA metadata, public images, UI brand slots, common locale copy, and the first-run notice. Changing only one owner leaves users with a mixed product name or the fallback fish mark.

## Decision

The shipped Web client presents Qonnex Harness in the browser title, install metadata, sidebar, blank-session hero, and first-run notice. `apps/web/public/` owns the Qonnex favicon and mark images. The browser-brand package fills both sidebar slots and the hero mark slot in every build profile. The `common` locale dictionary owns the visible product name and local-build fallback, while the conversation locale uses the same name for the hero headline.

The `dsh-*` package names, environment variables, profile names, DeepSeek provider identity, and model-facing Harness identity remain unchanged. These identifiers describe compatibility or provider behavior rather than browser presentation.

## Alternatives considered

**Change only the title and favicon.** Rejected because the sidebar, hero, and first-run notice would continue to present the previous identity.

**Keep brand registration limited to the `official` build profile.** Rejected because ordinary repository builds would still render the fallback fish mark and local-build label instead of the requested product identity.

**Rename technical `dsh-*` identifiers.** Rejected because cosmetic Web branding does not justify breaking package, configuration, profile, or provider compatibility.

## Consequences

Local and release Web builds share one Qonnex identity, while another deployment can replace all three brand slots by omitting the browser-brand package. The package relies on the shipped Web host to serve `/qonnex-mark.png`; a different host must provide that asset. Focused component, build-environment, PWA, onboarding, and built-Web tests pin the visible name and assets.
