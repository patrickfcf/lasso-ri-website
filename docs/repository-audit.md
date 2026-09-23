# Comparação de padrões e evidências

Inspeção em 2026-09-23. Referência:
[luneta-website em db3b88f](https://github.com/patrickfcf/luneta-website/tree/db3b88f).
Produto consultado sem alterações:
[lasso-ri em ec184c2](https://github.com/patrickfcf/lasso-ri/tree/ec184c2).

## Referência observada

Árvore pequena com Astro, componentes, layouts, páginas localizadas, conteúdo,
public/assets, Node Test Runner, Worker de contato e Worker auxiliar de notificações.
README, AGENTS, CONTRIBUTING, SECURITY, licença proprietária, docs/privacy.md e
verificador de páginas geradas. CI faz npm ci, npm test e build com Node 22.
SEO inclui canonical, hreflang, x-default e sitemap. Guias tratam teclado, contraste,
modo escuro, conteúdo responsável e proteção dos segredos de contato/notificações.

Não havia lint, formatter, tsconfig/check Astro, templates de issue/PR, CODEOWNERS,
Dependabot, ADRs ou guias separados de arquitetura/testes/releases. Não são padrões
copiados; foram acrescentados porque o pedido exige uma base verificável e mantível.
A referência usa Cloudflare, não Vercel. Menções a Firebase em conteúdo descrevem
o app de referência, não um backend que deva existir neste website.

## Estado inicial do destino

GitHub e a pasta local estavam vazios, sem commits, main, assets ou configurações.
O proprietário então autorizou criar do zero, definiu lassori.app e
support@lassori.app e escolheu a conta Cloudflare. Não houve migração de código,
rotas ou integrações existentes do website.

## Adotado e adaptado

| Área         | Decisão para Lasso RI                                                          |
| ------------ | ------------------------------------------------------------------------------ |
| Estrutura    | Astro, components/content/layouts/pages, assets e testes separados             |
| Documentação | Guias reais, agent instructions, segurança, contribuição e ADR                 |
| CI           | Instalação reproduzível, testes e build; mais lint, tipos, formato e navegador |
| SEO          | Canonical/alternates/sitemap, x-default PT-BR, preview sem indexação           |
| Design       | Tokens e ícones originais do app, fontes do sistema, claro/escuro              |
| Deploy       | Cloudflare Static Assets independente, sem copiar recursos da referência       |
| Dependências | npm/lockfile, Dependabot e audit; sem pacotes runtime de negócio               |

## Diferenças intencionais

Português é padrão e inglês a segunda opção; não se inventaram oito traduções.
Não há detecção automática de idioma, contato por Worker, Turnstile, Resend,
Slack, Firebase, Supabase, filas ou dados externos. Não há motivo para pastas de
hooks/services vazias. Nenhum domínio, ID de analytics, segredo ou asset da
referência foi incorporado. A menção à referência fica apenas neste documento.

Os PNGs do ícone do app foram preservados byte a byte. O app foi somente consultado.
Declarações de funcionalidades e privacidade derivam de README, Docs/Design.md e
PRIVACY.md do app, não do produto de referência.

## Verificação e tarefas operacionais

Veja docs/testing.md para a matriz reproduzível e o relatório do PR para resultados.
O domínio está registrado na Hostinger e ativo na Cloudflare após a troca de
nameservers feita pelo proprietário; a caixa de suporte depende de seu
provedor. Configure proteção de main exigindo `quality` e revisão de PR, habilite
reporte privado de vulnerabilidades e alertas de dependências se disponíveis.
Workers Builds é opcional, documentado; CI não depende de secrets de deploy.

## Resultados da implementação inicial

- Node 22.23.2; npm install e lockfile gerado sem vulnerabilidades reportadas.
- `npm run verify`: formato, lint, tipos, integridade, build e **33 testes** aprovados
  (2 unitários, 15 de build, 16 de navegador em desktop/claro e mobile/escuro).
- Astro check: zero erros, warnings ou hints. Dry-run Wrangler aprovado.
- Builds com indexação habilitada e desabilitada conferidos.
- Imagens originais comparadas por SHA-256 e preservadas byte a byte.
- Revisão visual no navegador em desktop e mobile; axe sem violações nos cenários.
- 14 rotas públicas em lassori.app com HTTP 200, idioma e canonical corretos;
  robots de produção, 404 e redirects com query conferidos. Preview com header noindex.
- Lighthouse mobile no domínio publicado: performance 99, acessibilidade 100,
  boas práticas 92, SEO 100; LCP 1,5 s e CLS 0 nessa execução, não métricas de campo.
  Chrome automatizado observou um script de proteção injetado pela Cloudflare
  bloqueado pela CSP. O código do site não usa inline; a CSP não foi enfraquecida.
- Deploy de produção: `d2eb0002-3ef1-4241-8667-d179ea1006eb`, fonte do site em
  `ac524e2`, com `INDEX_SITE=true`. Documentação posterior não altera os assets.
- DNS ativo confirmado após alteração dos nameservers pelo proprietário.
  MX/SPF/DKIM do iCloud observados e não alterados; caixa de suporte não testada.

Limites: não houve revisão jurídica, teste manual completo de VoiceOver, medição de
campo, teste Safari/Firefox ou envio de e-mail. Branch protection, reporte privado
e integração opcional de Workers Builds continuam sendo configurações do mantenedor.
