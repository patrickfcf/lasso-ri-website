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

GitHub Actions valida PRs e main, sem secrets ou deploy automático. Se habilitar
Workers Builds no painel, conecte este repositório após o merge e use Node 22,
`npm ci && npm run build` como build, `npx wrangler deploy` como deploy, e defina
as variáveis de build. Restrinja publicação de produção à branch main. Branch
previews devem manter `INDEX_SITE=false` e não atualizar o domínio de produção.
Não use credenciais de outros projetos.

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
