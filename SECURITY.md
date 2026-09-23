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

Consulte [deploy](docs/deployment.md) antes de mudar headers, indexação ou domínios.
