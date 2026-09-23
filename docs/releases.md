# Releases

Use commits convencionais e PRs focados. Atualize CHANGELOG em Unreleased. Após
revisão e merge pelo mantenedor, publique com a autorização correspondente.
Somente então promova a seção para uma versão SemVer e crie tag/release se solicitado.
O `0.1.0` inicial do package.json identifica o pacote, não anuncia uma release do app.

Antes de publicar: npm run verify, dry-run Cloudflare, revisão de conteúdo PT/EN,
privacidade, domínio, caixa de suporte e estado de indexação. Depois: teste a URL
pública, 404, redirects, metadados e headers. Registre revisão e versão de deploy.

O histórico inicial contém um commit vazio feito em branch de bootstrap para
permitir criar main em um repositório sem histórico. Todo o site permanece em uma
branch de implementação e entra em main somente por PR; o agente não faz merge.
