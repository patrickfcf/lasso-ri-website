# Publicação na Cloudflare

Destino autorizado: conta Cloudflare `9d59d06476926804ef6d5119dc696bc3`.
Recurso independente: `lasso-ri-website`, definido em `wrangler.jsonc`.
O ID da conta não é segredo. Não edite Workers de outros produtos.

## Primeira publicação

1. `npm ci` e `npx playwright install chromium`.
2. `npm run verify` e `npm run deploy:check`.
3. Confira `npx wrangler whoami` e a conta. Se necessário, autentique pelo fluxo
   oficial `npx wrangler login`; nunca copie arquivos de credenciais.
4. Com autorização de publicação, rode `npm run deploy`.
5. Confirme a URL retornada, páginas PT/EN, links, 404 e headers.

Por padrão, o build fica não indexável. O endereço `workers.dev` permite revisar
o site sem presumir que o domínio já está registrado ou conectado.

## Domínio lassori.app

A zona `lassori.app` foi criada no plano gratuito da conta autorizada e está
**ativa**. O proprietário alterou os nameservers na Hostinger para
`connie.ns.cloudflare.com` e `lars.ns.cloudflare.com`; DNS público e HTTPS 200
foram confirmados em 2026-09-23. O domínio já está em `routes` no Wrangler.
ID da zona: `a12db8872daca35143e6d08dfbdda25e`.

Para produção indexável, use `INDEX_SITE=true npm run deploy`.
O hostname workers.dev recebe adicionalmente `X-Robots-Tag: noindex, nofollow`,
mesmo quando o build é indexável no domínio. `www` não foi configurado.
O registrador continua sendo a Hostinger; não houve transferência de registro.

A autenticação e os registros de e-mail são separados. Os registros MX observados
na Cloudflare apontam para iCloud Mail; SPF e DKIM também estão presentes. Foram
somente consultados, sem alterações pelo agente. Confirme que a caixa ou alias
`support@lassori.app` recebe e envia mensagens. Nenhum e-mail de teste foi enviado.

## Deploys futuros

GitHub Actions continua validando PRs e `main`, sem credenciais de deploy.
Desde 2026-11-08, o Worker existente está conectado a
`patrickfcf/lasso-ri-website` pelo **Cloudflare Workers Builds**. Pushes em `main`
disparam a publicação de produção em `lassori.app`; previews estão desabilitados.
Tags e releases do GitHub não são os gatilhos dessa configuração.

Configuração operacional em Workers & Pages → lasso-ri-website → Settings → Builds:

- Branch: `main`; diretório: `/`; variável pública `NODE_VERSION=22.23.4`.
- Token próprio: `lasso-ri-website production build token`, gerenciado na
  Cloudflare. Nunca copiar seu valor para o repositório ou logs.
- Build:

  ```sh
  npm ci && npm run check:tokens && npm run format:check && npm run lint && npm run typecheck && npm test && npm run check:repository && INDEX_SITE=true npm run build && INDEX_SITE=true npm run test:build && npm audit --audit-level=high
  ```

- Deploy: `npx wrangler deploy`, usando o Wrangler fixado pelo lockfile.

Os testes de navegador/axe continuam no GitHub Actions. Workers Builds executa
as verificações acima no próprio checkout antes de publicar; não aguarda o
resultado independente do GitHub Actions. Preserve as regras de revisão e os
checks exigidos antes de mergear em `main`.

O build de produção habilita indexação explicitamente. Builds locais continuam
não indexáveis por padrão. A configuração não exige banco, bindings, cron ou
alteração de DNS. Uma execução manual do trigger pode publicar a revisão atual
sem criar commit vazio; confirme branch/commit e acompanhe o resultado.

## Recuperação

Consulte `npx wrangler deployments list` e `npx wrangler versions list`. Para
recuperar um site estático com segurança, restaure a revisão boa em branch de
correção, reinstale pelo lockfile, valide e publique seus assets novamente.
Revise a versão/destino antes de qualquer rollback; não substitua assets por
arquivos gerados de outra revisão. Não remova DNS ou o Worker como solução de erro.

Headers ficam em `public/_headers`. HTML é revalidado pelo padrão da Cloudflare;
assets com hash em `/_astro/` usam cache imutável. Sem runtime de aplicação, não
há bindings, migrations, filas, cron, secrets ou necessidade de geração de tipos
Worker. O site não ativa analytics nem logs de aplicação.
