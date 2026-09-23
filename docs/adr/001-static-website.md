# ADR 001: site estático independente

Status: aceito para a implementação inicial. Data: 2026-09-23.

## Contexto

O repositório do website estava vazio. O proprietário autorizou criar do zero,
com a organização de sua referência de engenharia, preservando a identidade do
app. O app atual usa exemplos e não oferece backend ou autenticação. A publicação
foi direcionada explicitamente à Cloudflare.

## Decisão

Astro com TypeScript estrito, conteúdo PT-BR/EN e CSS nativo. Cloudflare Workers
Static Assets serve o resultado sem Worker de aplicação. E-mail por mailto, sem
formulário, captcha, SDK de envio, banco ou analytics.

## Consequências

Baixo custo de manutenção, pouco JavaScript, deploy portátil e testes sem secrets.
Não se oferece conta, feed real ou envio interno de suporte. Serviços futuros
exigem uma decisão explícita, tratamento de falhas e revisão da privacidade.
O conteúdo precisa de revisão quando o app mudar. Não há fallback silencioso de
tradução. Português é padrão por foco no mercado brasileiro, inglês é alternativa.
