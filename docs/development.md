# Desenvolvimento e ambiente

Use Node 22.12+ na linha 22, como no CI, e `npm ci`. `.nvmrc` seleciona essa linha.
Para alterações de pacote, use `npm install` e versione o lockfile.

`npm run dev` inicia Astro em 127.0.0.1:4321. `npm run preview` visualiza o build;
para testar redirects, CSP e 404 da hospedagem, use `npm run preview:cloudflare`
após o build (porta 8787). Não deixe esse preview aberto durante `test:e2e`.

## Variáveis

| Nome         | Padrão                | Uso                                               |
| ------------ | --------------------- | ------------------------------------------------- |
| `SITE_URL`   | `https://lassori.app` | Origem HTTPS para canonical, alternates e sitemap |
| `INDEX_SITE` | desabilitado          | Somente `true` habilita indexação no HTML/robots  |

São valores públicos de build, não segredos. `.env.example` documenta os nomes;
um `.env` local é opcional e ignorado. Reinicie o servidor/reconstrua após mudar
variáveis. Não reutilize domínios ou chaves de outro produto.

## Diagnóstico

- Versão de Node incompatível: selecione a linha 22 e reinstale com `npm ci`.
- Navegador ausente: `npx playwright install chromium` (Linux: `--with-deps`).
- Porta 8787 ocupada: encerre seu preview Cloudflare antes dos testes.
- Build sem indexação: esperado por padrão; produção exige `INDEX_SITE=true`.
- SITE_URL inválida: informe apenas uma origem HTTPS, sem caminho, query ou segredo.
- CSS/script bloqueado: revise CSP e evite scripts inline; teste no preview Cloudflare.
- Wrangler sem autenticação: desenvolvimento local funciona; deploy precisa do login
  autorizado na conta correta. Nunca cole tokens em issues ou no terminal em claro.

## Compatibilidade do TypeScript

O projeto usa TypeScript `~6.0.3`: `@astrojs/check@0.9.10` aceita as linhas 5 e 6,
e `typescript-eslint@8.71.2` exige versão menor que 6.1. Atualize essa faixa apenas
quando ambos os validadores suportarem a nova versão. Mantenha o lockfile junto
ao manifesto e valide com `npm ci` normal; `--legacy-peer-deps` não resolve
a incompatibilidade dos validadores.

## Dependências das ferramentas

O lockfile resolve `fast-uri` em 3.1.9. O override de `undici@^7.0.0` exige
`^7.30.1` para Cheerio e Miniflare; não afeta o Undici 8 usado pelo Astro.
Miniflare ainda fixa uma versão 7 vulnerável, inclusive no Wrangler 4.152.0.
Remova o override somente quando os manifests dos consumidores aceitarem uma
versão corrigida, validando `npm ci`, `npm ls undici fast-uri`, `npm audit`,
`npm run verify` e `npm run deploy:check` em Linux.

Não use `npm audit fix --force`: a sugestão atual implica downgrade de Wrangler.
O gate de audit continua habilitado no CI. Consulte também os limites da
verificação em [Segurança](../SECURITY.md).
