# Instruções para agentes: Lasso RI Website

## Escopo e produto

- Trabalhe apenas neste repositório para tarefas do website; não altere o app,
  signing ou outros projetos. Preserve alterações existentes do usuário.
- Use Node 22 e npm com package-lock.json. Leia README e docs/architecture.md.
- O app usa dados de exemplo. Não invente disponibilidade, métricas, depoimentos,
  preços, feed ao vivo, autenticação ou integrações. Valide afirmações no produto.
- Preserve o ícone original, azul-marinho #0b3d91, azul escuro #7aa7ff, fontes de
  sistema e hierarquia editorial. A referência estrutural não define a marca.

## Arquitetura e conteúdo

- Astro estático, sem framework cliente ou backend por conveniência.
- Rotas em src/pages, conteúdo em src/content, composição em src/components,
  metadados em src/layouts e tokens em src/styles.
- Português brasileiro é canônico em /; inglês em /en/. Atualize ambos os idiomas.
  Preserve página, query e fragmento no seletor. Sem redirecionamento automático.
- Mantenha um h1, headings sem saltos, foco visível, teclado, tamanho legível,
  reflow em telas pequenas e temas claro/escuro. Não dependa apenas de cor.
- Não crie abstrações, pastas vazias, dependências ou serviços sem necessidade.
- SITE_URL é origem pública, INDEX_SITE habilita indexação no build. Nenhum dos
  dois é segredo. Nunca copie valores de outro produto.
- Mudanças de dados, e-mail, hosting ou analytics exigem revisão da privacidade.

## Git, qualidade e entrega

- Trabalhe em branch codex/<objetivo>, nunca diretamente em main.
- Commits convencionais e focados; PR com comportamento, riscos e validação.
- Rode npm run verify e npm run deploy:check quando alterar o site ou configuração.
- Para UI, revise desktop/mobile, ambos os temas, teclado e fluxo sem JavaScript.
- Rode git diff --check e revise o diff antes de cada commit.
- Atualize documentação e CHANGELOG para mudanças relevantes.
- Não alegue testes, entregas ou publicação que não ocorreram.
- Push, PR e deploy requerem autorização do usuário; uma autorização existente
  na conversa continua válida. Nunca faça merge por conta própria.

## Segurança e operações

- npm run deploy publica externamente; não é comando de validação.
- Não commite .env, .dev.vars, credenciais, node_modules, dist ou relatórios de QA.
- Não leia ou imprima arquivos de autenticação. Use Wrangler e conectores oficiais.
- Não altere DNS, e-mail ou recursos de outro produto. Antes de vincular um domínio,
  confirme conta, zona e ausência de conflito com site existente.
- Não coloque mensagens de suporte ou dados financeiros em logs, testes ou PRs.
- Preserve a política CSP; scripts e estilos são locais, sem inline inseguro.
- Não adicione analytics, formulários ou serviços pagos sem escopo explícito.
