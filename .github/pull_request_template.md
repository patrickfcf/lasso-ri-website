## Mudança

Explique o problema e o comportamento resultante.

## Validação

- [ ] npm run verify
- [ ] npm run deploy:check (se site/configuração mudou)
- [ ] PT-BR e EN revisados
- [ ] Desktop/mobile, claro/escuro e teclado (se UI mudou)
- [ ] Sem segredos, dados pessoais ou artefatos gerados
- [ ] Documentação e CHANGELOG atualizados quando necessário

## Riscos e operação

Descreva limitações, efeitos na privacidade e configuração manual necessária.
Não publique credenciais ou dados de suporte. Deploy e merge são ações separadas.

## C2 cross-repository review

## Change and Linear

Problem, resulting behavior and Linear issue/decision:
Canonical design/ADR version or source revision:

## Four-repository impact

| Repository | Affected / no change and reason | Contract/docs/messaging | Related PR |
| ---------- | ------------------------------- | ----------------------- | ---------- |
| Apple      |                                 |                         |            |
| Backend    |                                 |                         |            |
| MCP        |                                 |                         |            |
| Website    |                                 |                         |            |

## Verification and design

- [ ] Applicable instructions read; existing work preserved
- [ ] Canonical C2 semantic tokens, Light/Dark, system typography and original icons preserved
- [ ] Accessibility, keyboard/Dynamic Type/Reduce Motion checked when applicable
- [ ] API/data/permission compatibility and architecture decisions reviewed
- [ ] Documentation, CHANGELOG and actual public availability updated as necessary
- [ ] Exact tests/builds, toolchain, warnings and unverified behavior recorded
- [ ] No secrets, fabricated financial facts or artificial cross-repo edits

## Release readiness and rollback

Dependencies/review order, compatibility, public messaging, risks and rollback:
Merge/deploy require separate authorization. No automatic dependent merge.
