# Changelog

Mudanças relevantes seguem commits convencionais; a seção Unreleased não implica
publicação nem uma versão já distribuída.

## Unreleased

- Correção do seletor de aparência: opções em linhas completas, sem quebra de
  palavras ou sobreposição com o título em PT-BR/EN, desktop e mobile.

- TypeScript 7.0.2 para a verificação nativa, com o pacote oficial de
  compatibilidade da API 6 para Astro check e ESLint; instalação limpa sem
  ignorar peer dependencies e ambos os verificadores de tipos no gate existente.

- Migração C2 v1.0.0: superfícies monocromáticas, azul seletivo, cores semânticas e ícones originais conforme o tema.
- Snapshot canônico com SHA-256, geração CSS, contraste e detecção de drift.
- Governança e checklist dos quatro repositórios; sem merge ou deploy.

- Redesign institucional premium: Lasso RI como ecossistema de inteligência de RI,
  com Richmond Ink, slogan oficial, narrativa e metadados PT-BR/EN.
- Radar Signature demonstrativo, fluxo conceitual de Intelligence e arquitetura
  Core/API/canais com detalhes nativos, identificando recursos planejados.
- Temas claro/escuro/sistema sem JavaScript, menu móvel e navegação acessível.
- Engenharia e roadmap ampliados, Open Graph bilíngue e microdata factual.
- QA ampliado para quatro combinações de viewport/tema, sem-JS, 320 px, ultrawide,
  texto ampliado, teclado, movimento reduzido e estabilidade de layout.
- Nenhum recurso externo, dependência, merge ou deploy de produção nesta mudança.

- Atualização dos indicadores do repositório e da orientação de releases.

- Resoluções corrigidas de `fast-uri` e Undici 7 para as ferramentas de validação,
  preservando o Undici 8 do Astro e o gate de `npm audit`.
- Uma versão anterior limitou TypeScript a `~6.0.3` para manter compatibilidade
  com Astro check e typescript-eslint. A atualização posterior para 7.0.2 exige
  revisão de compatibilidade antes de uma instalação limpa.

- Site institucional em português brasileiro e inglês, com identidade do Lasso RI.
- Páginas de suporte, privacidade, termos, acessibilidade, próximos passos e engenharia.
- Astro estático, SEO por idioma, sitemap, robots configurável e 404.
- Testes, formatação, lint, tipos, CI e documentação de contribuição e operação.
- Publicação em Cloudflare Workers Static Assets, sem backend de aplicação.
