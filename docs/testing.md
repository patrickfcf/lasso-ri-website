# Estratégia de testes

`npm run verify` executa formato, lint, Astro/TypeScript, testes unitários,
integridade do repositório, build, testes do HTML e navegador. CI usa a mesma
sequência e executa um segundo build indexável para validar a configuração pública.

| Camada                | O que protege                                                                        |
| --------------------- | ------------------------------------------------------------------------------------ |
| Node Test Runner      | URLs canônicas seguras, locale e contrato de caminhos                                |
| Cheerio sobre dist    | 14 páginas, idiomas, um h1, links, assets, metadata e OG 1200×630                    |
| Build SEO             | robots, sitemap, canonical, alternates, x-default, microdata e 404                   |
| Playwright + Wrangler | assets locais, CSP, redirects, status 404 e ausência de erros                        |
| axe                   | WCAG A/AA até tags 2.2 em home PT/EN, suporte, privacidade e controles expandidos    |
| Navegação             | idioma com query/hash, FAQ, skip link, menu móvel, teclado e Escape                  |
| Sem JavaScript        | leitura, idioma, menu, Light/Dark/Sistema, datas e camadas Core/API                  |
| Adaptação             | 320/393/768/1920/2560 px, texto a 200% sem sobreposição do hero e movimento reduzido |
| Estabilidade          | CLS laboratorial <0,1 e nenhuma requisição de recurso externo                        |

Playwright roda Chromium em desktop/claro, desktop/escuro, mobile/claro e
mobile/escuro, com dois workers. Testes de screenshot geram homepage PT/EN e
Signature em `test-results/`; o CI os disponibiliza como artifact
`website-browser-qa` por 14 dias. Traces ficam em falhas. Não versionar relatórios.
Os testes não acessam mercado, backend, produção ou e-mail.

Axe é executado em contexto com JavaScript habilitado para instrumentação.
Os fluxos sem JS são verificados separadamente com `javaScriptEnabled: false`:
nessa configuração o agendamento interno do axe pode não concluir no Chromium.
Não se desabilitam regras axe para esconder problemas da interface.

Para validar os dois estados de indexação sem publicar:

```sh
npm ci
npx playwright install chromium
npm run verify
INDEX_SITE=true npm run build
npm run test:build
npm run deploy:check
git diff --check
```

Use Node 22 conforme `.nvmrc` e o mínimo de `package.json`. Não usar `npm run deploy`
como validação. Para retornar ao build de preview, execute `npm run build` sem
`INDEX_SITE=true`. Lighthouse deve ser medido sem testes de navegador concorrentes;
relate URL local, perfil, versão, scores e métricas, sem tratar laboratório como
Core Web Vitals de produção. O preview é intencionalmente `noindex`.

## Revisão visual e limites

Confira desktop/mobile, ambos os temas, texto ampliado, teclado, títulos e links.
Leia ambos os idiomas e verifique a distinção entre recursos atuais e planejados.
Capturas locais antes/depois ficam fora do Git. As imagens OG são assets editoriais,
não relatórios de QA. Arquivos originais do ícone permanecem intactos; a navegação
usa derivados WebP 32/64 px gerados pelo Astro.

Testes automáticos não substituem VoiceOver, revisão editorial/jurídica ou medição
real de Core Web Vitals. Safari/Firefox, leitores de tela e hardware físico não
integram a matriz automática. Não afirmar certificação WCAG com base no axe.
Após uma futura publicação autorizada, conferir HTTP, redirects, robots, sitemap,
CSP e assets pela URL real.

## Evidência local do redesign (08/11/2026)

Node 22.23.4 / npm 10.9.9, lockfile existente, Chromium via Playwright 1.64.1.
`npm ci`, instalação do Chromium, `npm run verify` (72 testes de navegador),
build indexável e seus 17 testes HTML, `npm run deploy:check` e diff check
executados. O pacote é estático, sem bindings; o dry-run não publica.

Lighthouse 13.6.0 em Cloudflare local, build `INDEX_SITE=true`, sem testes de
navegador concorrentes:

| Perfil       | Performance | Acessibilidade | Boas práticas | SEO | LCP   | TBT  | CLS |
| ------------ | ----------- | -------------- | ------------- | --- | ----- | ---- | --- |
| PT-BR mobile | 100         | 100            | 100           | 100 | 0,9 s | 0 ms | 0   |
| EN desktop   | 100         | 100            | 100           | 100 | 0,3 s | 0 ms | 0   |

Resultados de laboratório local, não dados de campo ou garantia de produção.
A primeira coleta, concorrente com QA e com `noindex`, foi descartada como
baseline de performance: não isolava carga e tinha SEO bloqueado por intenção.
O HTML final envia um script cliente de 466 bytes e cerca de 28 KB de CSS
minificado, sem bibliotecas de runtime, fontes externas ou analytics.
A instalação reportou 11 vulnerabilidades moderadas preexistentes nas ferramentas;
não foi feita atualização de dependências fora do escopo. Ver SECURITY.md para
limitações conhecidas do tooling. Nenhuma vulnerabilidade alta foi afirmada como
corrigida por este redesign.
