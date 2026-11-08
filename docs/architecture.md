# Arquitetura

Astro produz HTML estático; Cloudflare Workers Static Assets serve `dist/`.
Não há renderização por requisição, Worker de aplicação ou estado no servidor.
Nenhuma leitura do app, Supabase, Firebase, API de mercado ou login é feita.

```text
Conteúdo tipado (pt-BR / en)
           ↓
Home / Article + BaseLayout + CSS
           ↓
Astro build → dist/ → Cloudflare Static Assets
```

## Responsabilidades

`src/pages` define entradas e rotas estáticas. As duas rotas dinâmicas geram as
páginas editoriais a partir das chaves de conteúdo; não são endpoints de servidor.
`src/content/site.ts` concentra metadados, navegação e artigos tipados por idioma;
`src/content/home.ts` concentra a narrativa e a matriz de produtos, sem fallback.
`SignaturePreview` e `PlatformArchitecture` reutilizam a mesma composição em ambos
os idiomas. As rotas existentes continuam intactas.
`src/components` compõe páginas; `BaseLayout` centraliza navegação e metadados.
`src/lib/site.mjs` valida a origem pública e mantém o contrato de rotas, testável
pelo Node sem uma etapa de compilação. `src/styles` concentra tokens e layout.

## Rotas e SEO

Português brasileiro em `/`; inglês em `/en/`. Em cada idioma: home, `support/`,
`privacy/`, `terms/`, `accessibility/`, `roadmap/`, `how-we-build/`.
Todos os caminhos usam barra final. `/404.html` é bilíngue e não indexável.
Cloudflare responde 404 para caminhos desconhecidos, sem fallback de SPA.

Canonical e alternates apontam para o mesmo recurso em cada idioma. `x-default`
é português. Sitemap exclui 404. `INDEX_SITE=true` habilita indexação somente no
build de produção. Sem esse valor, HTML e robots bloqueiam indexação. Isso não
é autenticação: qualquer pessoa com o link ainda pode abrir o site.

O script cliente copia query e fragmento para o link de idioma e fecha menus
com navegação/Escape. Não muda idioma automaticamente, não usa localStorage e
não transmite esses valores. O seletor Light/Dark/Sistema usa radios e CSS :has(),
sem persistência; o padrão em cada página é Sistema. Menu, FAQ, datas e camadas
de arquitetura usam details/summary nativos, inclusive sem JavaScript.
A navegação continua funcional sem JavaScript, sem preservar query/fragmento.

## Integrações reais

- Cloudflare: arquivos estáticos, TLS/domínio quando conectado, headers e cache.
- `mailto:support@lassori.app`: abre o cliente de e-mail, sem formulário ou Resend.
- GitHub: código, pull requests e validação, fora da navegação de visitantes.

O código da aplicação não define cookies, analytics, dados financeiros ou segredos
de runtime. A camada Cloudflare pode usar cookies de segurança.
Solicitações de hosting e e-mails têm práticas próprias que devem estar refletidas
na página pública de privacidade. Dependências de build não são SDKs do app.

## Visão de plataforma e dados estruturados

O diagrama público representa arquitetura planejada, não o runtime deste site.
Não há conexão ao Core/API/MCP nem execução de monitores. Os estágios são
explícitos no conteúdo; detalhes em [descoberta](ecosystem-discovery.md).
SEO conserva os gates de indexação, canonical/hreflang/sitemap e adiciona OG
1200×630 por idioma. Microdata Schema.org WebSite/WebPage usa nome, URL, descrição
e idioma factuais, sem ratings, disponibilidade de app ou ofertas inventadas.
Microdata evita scripts inline e preserva a CSP original.

## Ecossistema e C2

A empresa além da cotação. A identidade ativa é C2 — Monochrome + Signature Accent;
Richmond Ink é histórica. Consulte [design canônico e tokens](design.md)
e a governança dos quatro repositórios ali vinculada. Avalie contratos, docs e
mensagens públicas em Apple/backend/MCP/website; revisão não obriga editar todos.
[Apple Apps](https://github.com/patrickfcf/lasso-ri),
[Backend](https://github.com/patrickfcf/lasso-ri-backend) e
[MCP](https://github.com/patrickfcf/lasso-ri-mcp) compartilham a arquitetura planejada.
[Platform Linear](https://linear.app/luneta/project/lasso-ri-platform-and-ai-ecosystem-68609d2fecc1)
e [Apple Linear](https://linear.app/luneta/project/lasso-ri-apple-apps-signature-redesign-2dc05903995f)
coordenam dependências. Core/API/MCP/Intelligence/portal/webhooks continuam planejados.
