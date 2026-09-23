# Estratégia de testes

`npm run verify` executa formato, lint, Astro/TypeScript, testes unitários,
integridade do repositório, build, testes do HTML e navegador. CI usa a mesma
sequência e executa um segundo build indexável para validar a configuração pública.

| Camada                | O que protege                                                         |
| --------------------- | --------------------------------------------------------------------- |
| Node Test Runner      | URLs canônicas seguras, locale e contrato de caminhos                 |
| Cheerio sobre dist    | 14 páginas, idiomas, headings, metadados, links e assets locais       |
| Build SEO             | robots, sitemap, canonical, alternates, x-default e 404               |
| Playwright + Wrangler | serviço real de assets local, CSP, redirects e status 404             |
| axe                   | regras WCAG A/AA automatizáveis em home PT/EN, suporte e privacidade  |
| Navegação             | troca de idioma, query/hash, FAQ, skip link e JavaScript desabilitado |

Playwright roda em Chromium desktop/claro e mobile/escuro, com dois workers.
Retém traces apenas em falhas; relatórios são ignorados pelo Git.
Não acessa mercado, backend, conta de produção ou e-mail. Os testes unitários
não exigem instalação de navegadores; o conjunto completo exige Chromium.

Para validar os dois estados de indexação:

```sh
npm run verify
INDEX_SITE=true npm run build
npm run test:build
npm run deploy:check
```

## Revisão manual e limites

Confira desktop/mobile, tema escuro, zoom/texto ampliado, teclado, títulos e links.
Leia ambos os idiomas. Verifique ausência de promessas ou integrações fictícias.
Testes automáticos não substituem VoiceOver, revisão editorial/jurídica ou medição
real de Core Web Vitals. Safari e Firefox ainda não fazem parte da matriz automática.
Após publicar, confira HTTP, redirects, robots, sitemap, CSP e assets pela URL real.
