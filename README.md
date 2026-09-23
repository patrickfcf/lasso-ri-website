# Lasso RI Website

Website institucional do **Lasso RI**, um app nativo Apple para acompanhar relações
com investidores de empresas brasileiras. Português brasileiro em `/`, inglês em
`/en/`. Domínio definido pelo proprietário: **https://lassori.app**. Contato:
**support@lassori.app**.

O app está em desenvolvimento e usa dados de exemplo. O site não anuncia dados
ao vivo, conta, assinatura, sincronização, recomendações ou download público.
É independente do repositório do app e não acessa seus dados.

## Desenvolvimento

Node.js 22.12+ (linha 22), npm e Git. Nenhum segredo ou conta externa é necessário
para desenvolver, testar ou gerar o site.

```sh
npm ci
npm run dev
```

Abra `http://127.0.0.1:4321/`. O Astro pode manter seu servidor em segundo plano;
use `npx astro dev stop` quando terminar.

```sh
npm run format:check       # Prettier, incluindo Astro
npm run lint               # ESLint, TypeScript e Astro
npm run typecheck          # Astro check + TypeScript estrito
npm test                   # Contratos de URL e roteamento
npm run check:repository   # Documentação, links e isolamento da identidade
npm run build              # HTML estático em dist/
npm run test:build         # Todas as páginas, links, SEO, sitemap, 404
npx playwright install chromium
npm run test:e2e           # Cloudflare local, desktop/mobile, claro/escuro, axe
npm run verify            # Todas as verificações acima
npm run deploy:check       # Validação do pacote Cloudflare sem publicar
```

Os testes de navegador iniciam seu próprio servidor na porta 8787. Encerre qualquer
preview nessa porta antes de executá-los. Em Linux, instale o navegador com
`npx playwright install --with-deps chromium`.

## Estrutura

```text
src/components/     Home e artigo compartilhados
src/content/        Conteúdo tipado, completo por idioma
src/layouts/        Navegação, rodapé e metadados
src/lib/            Contratos de URLs e rotas
src/pages/          Entradas Astro e robots.txt
src/styles/         Tokens e layout responsivo
public/assets/      Ícones originais do Lasso RI
public/_headers     Headers de segurança e cache da Cloudflare
scripts/            Verificação do repositório
test/               Testes unitários e do resultado do build
e2e/                Testes reais de navegação e acessibilidade
docs/               Arquitetura, design, operação e decisões
.github/            CI, templates, CODEOWNERS e Dependabot
```

## Publicação

Cloudflare Workers Static Assets, sem Worker de aplicação, banco ou API. O
arquivo `wrangler.jsonc` identifica exclusivamente o recurso `lasso-ri-website`
na conta indicada pelo proprietário. Não há deploy automático em pull requests.

`SITE_URL` define a origem dos metadados (padrão `https://lassori.app`).
`INDEX_SITE` só habilita indexação quando tem o valor exato `true`; previews ficam
com `noindex` e `Disallow: /`. Veja [.env.example](.env.example).

`npm run deploy` **publica de verdade**. Consulte [Deployment](docs/deployment.md)
antes de executar; o domínio `lassori.app` já está conectado. O endereço `workers.dev` é uma
alternativa não indexável. A caixa de e-mail deve ser validada separadamente.

## Documentação

- [Índice](docs/README.md), [arquitetura](docs/architecture.md) e [design](docs/design.md)
- [Desenvolvimento e ambiente](docs/development.md), [testes](docs/testing.md)
- [Publicação e recuperação](docs/deployment.md), [releases](docs/releases.md)
- [Comparação de padrões e evidências](docs/repository-audit.md)
- [Contribuição](CONTRIBUTING.md), [agentes](AGENTS.md), [segurança](SECURITY.md)
- [Changelog](CHANGELOG.md) e [licença proprietária](LICENSE)
