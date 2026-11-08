# Design C2

C2 — Monochrome + Signature Accent é a direção oficial escolhida em 08/11/2026,
sucessora da Richmond Ink. A arquitetura da experiência aprovada na PR #23 permanece;
esta PR migra os fundamentos visuais e a governança, sem duplicar o redesign.
O slogan é **A empresa além da cotação.**, com adaptação inglesa
**The company beyond the stock price.** Mascote e PNGs Light/Dark originais intactos.

## Fonte canônica

[Marca](https://github.com/patrickfcf/lasso-ri/blob/codex/c2-monochrome-design-system/Docs/Ecosystem/Brand.md),
[sistema e tipografia](https://github.com/patrickfcf/lasso-ri/blob/codex/c2-monochrome-design-system/Docs/Ecosystem/DesignSystem.md),
[tokens v1.0.0](https://github.com/patrickfcf/lasso-ri/blob/codex/c2-monochrome-design-system/Docs/Ecosystem/DesignTokens.json),
[arquitetura](https://github.com/patrickfcf/lasso-ri/blob/codex/c2-monochrome-design-system/Docs/PlatformArchitecture.md),
[ADR-009](https://github.com/patrickfcf/lasso-ri/blob/codex/c2-monochrome-design-system/Docs/adr/ADR-009-C2-Design-and-Governance.md) e
[governança](https://github.com/patrickfcf/lasso-ri/blob/codex/c2-monochrome-design-system/Docs/Ecosystem/CrossRepoGovernance.md)
ficam no repositório Apple existente. Links apontam à branch de revisão canônica;
retarget para revisão imutável/main após revisão, sem fetch de tokens no build.

## Aplicação Web

`src/design/tokens.json` é o snapshot exato, não uma especificação concorrente.
`src/design/source.json` identifica versão, revisão e SHA-256. O gerador
`node scripts/c2-tokens.mjs` produz `src/styles/tokens.css`; `--check` rejeita drift
e valida os 126 pares de contraste da fonte. A troca de paleta se concentra na
especificação, seguida de geração/revisão dos consumidores.

Aliases Web mapeiam bg/surface/text/muted/accent para os papéis canônicos. O antigo
accent-soft usado em grandes áreas agora mapeia fundo neutro; selection mantém
Accent Subtle para seleção real. Azul fica em ações/foco/seleções, sem gradientes
azuis amplos. Company marks são neutras e não representam desempenho. Não há acento
quente de marca. Cores financeiras são independentes e requerem sinais/rótulos.

Sistema tipográfico permanece local, com SF apenas quando oferecida pelo SO,
Segoe UI/sans-serif como alternativas; não redistribuir fontes Apple. Dimensões de
texto usam rem/clamp e o mockup reflui com texto ampliado. Temas manuais/sistema,
menu, datas e camadas funcionam sem JS; sem persistir preferências.
Animações são breves e respeitam Reduce Motion. O mockup é uma demonstração
conceitual com dados sintéticos rotulados, não uma versão distribuída.

## História e referências

CURSI-105 e o redesign Richmond da PR #23 permanecem histórico. A nova escolha C2
supersede essas cores e o texto anterior que dizia C1/C2/C3 não aprovados. Não muda
histórico de funcionalidades. Figma/HTML anteriores são referências históricas,
sem alegar atualização/freeze por esta PR. Flighty, Linear, Apple Stocks, Stripe,
Plaid e Raycast orientam princípios, sem cópia. Os anexos do proprietário reforçam
neutralidade, clareza financeira e personalidade no mascote.

Gerar imagens OG: `node scripts/generate-social-images.mjs`. O gerador usa o snapshot
C2. As composições PNG são assets editoriais e não relatórios de QA.
