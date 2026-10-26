# auth.md

This file tells AI agents how to authenticate with `f9xr.org` and the F9XR Articles blog.

## Summary

F9XR Articles is a public, read-only publication. There is no account system, no
registration flow, and no API that requires credentials.

- No authentication is required to read anything on this site.
- The service does not register users on behalf of an agent or a person.
- No OAuth authorization server, protected resource, or access tokens are issued.
- There are no protected APIs. Content is served as static HTML, JSON, and text files.

Agents may fetch any public URL without credentials. A client that identifies itself
responsibly is treated the same as any other reader.

## Hosts

- Content and documentation: `https://f9xr.org/articles/`
- Machine-readable site summary: `https://f9xr.org/articles/llms.txt`
- Agent usage guidance: `https://f9xr.org/articles/ai.txt`
- Security contact: `https://f9xr.org/articles/security.txt`

## Discover

Because this site exposes no protected resources, there is no
`/.well-known/oauth-protected-resource` document and no authorization server metadata.
The discovery surfaces this site does publish are:

- `/.well-known/agent-skills/index.json` — Agent Skills published by this site
- `/.well-known/ard.json` and `/.well-known/ai-catalog.json` — Agentic Resource Discovery manifest
- `/llms.txt` — a plain-language map of the site for language models

## Pick a method

There is no method to pick, because registration is not supported. All content is
accessed anonymously.

## Register

Not supported. This service does not create accounts or issue credentials.

## Claim ceremony

Not supported.

## Exchange the assertion

Not supported. No tokens are issued.

## Use the access token

Not supported. There is no access token.

## Errors

Standard HTTP status codes apply.

| Status | Meaning | Action |
| --- | --- | --- |
| 401 | Not used; there are no protected resources | Treat as unexpected and re-fetch anonymously |
| 403 | The path is intentionally not served | Do not retry |
| 404 | The path does not exist | Check the URL |
| 429 | Rate limited | Back off and retry after a delay |

## Revocation

Not applicable. No credentials exist to revoke.

## Contact

Questions about this file or about agent access: `hello@f9xr.org`.
