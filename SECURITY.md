# Segurança

Correções se aplicam à versão atual de `main`. Reporte vulnerabilidades pelo
recurso privado do GitHub quando habilitado, ou por e-mail para
support@lassori.app. Não publique provas que exponham dados ou credenciais.

Inclua página, versão, passos de reprodução seguros e impacto. Não há prazo de
resposta garantido. Se o e-mail ainda não estiver ativo, use exclusivamente o
reporte privado do GitHub; não abra uma issue pública com informações sensíveis.

O site é estático, sem autenticação, API, banco de dados, upload ou analytics.
Os headers da Cloudflare restringem scripts, frames e conexões. O link de e-mail
abre o cliente do visitante; não existe endpoint de envio neste site.

Nunca commite segredos ou mensagens de suporte. A autenticação de deploy pertence
ao ambiente local do Wrangler ou a credenciais limitadas no provedor de CI, nunca
a arquivos versionados. Revise dependências em PRs. Dependabot verifica pacotes e
Actions; `npm audit` é uma verificação complementar, não prova de ausência de falhas.

### Limite conhecido do bundle de ferramentas

Em 24/10/2026, os pacotes oficiais Wrangler 4.151.1 e 4.152.0 também incluem
Undici 7.29.1 dentro de `wrangler-dist/cli.js`. Overrides do npm corrigem as
dependências declaradas de Cheerio/Miniflare, mas não reescrevem esse bundle.
O resultado zero de `npm audit` não comprova a correção dessa cópia embutida.

O update check do Wrangler usa esse cliente para consultar o registry npm;
uma resposta maliciosa desse serviço ou da infraestrutura confiada pode alcançar
a [falha de content-encoding do Undici](https://github.com/nodejs/undici/security/advisories/GHSA-xjj6-f33q-929c).
Não foi identificado caminho de entrada de visitantes do site estático até esse
cliente. Acompanhe uma versão upstream corrigida; não aplique patches no bundle,
desative TLS ou faça downgrade amplo para esconder o achado. Isso é uma limitação
da ferramenta local/CI, não uma biblioteca distribuída no HTML do site.

Consulte [deploy](docs/deployment.md) antes de mudar headers, indexação ou domínios.
