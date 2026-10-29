# Releases

Use commits convencionais e PRs focados. Atualize CHANGELOG em Unreleased. Após
revisão e merge pelo mantenedor, publique com a autorização correspondente.
Somente então promova a seção para uma versão SemVer e crie tag/release se solicitado.
O `0.1.0` inicial do package.json identifica o pacote, não anuncia uma release do app.

Antes de publicar: npm run verify, dry-run Cloudflare, revisão de conteúdo PT/EN,
privacidade, domínio, caixa de suporte e estado de indexação. Depois: teste a URL
pública, 404, redirects, metadados e headers. Registre revisão e versão de deploy.

O histórico inclui uma branch inicial de bootstrap e releases já publicadas no
[GitHub](https://github.com/patrickfcf/lasso-ri-website/releases). Não mova nem
reescreva tags existentes. Os workflows versionados validam push em `main` e PRs;
não há workflow de publicação acionado por tag. O deploy Cloudflare é uma etapa
separada que exige autorização e revisão das configurações de hospedagem.
