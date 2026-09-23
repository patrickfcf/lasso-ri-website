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
`src/content/site.ts` concentra textos tipados completos por idioma, sem fallback.
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

O único script cliente copia query e fragmento para o link de idioma. Não muda
idioma automaticamente, não usa localStorage e não transmite esses valores.
A navegação continua funcional sem JavaScript, sem preservar query/fragmento.

## Integrações reais

- Cloudflare: arquivos estáticos, TLS/domínio quando conectado, headers e cache.
- `mailto:support@lassori.app`: abre o cliente de e-mail, sem formulário ou Resend.
- GitHub: código, pull requests e validação, fora da navegação de visitantes.

O código da aplicação não define cookies, analytics, dados financeiros ou segredos
de runtime. A camada Cloudflare pode usar cookies de segurança.
Solicitações de hosting e e-mails têm práticas próprias que devem estar refletidas
na página pública de privacidade. Dependências de build não são SDKs do app.
