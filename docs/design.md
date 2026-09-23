# Design

Direção: site institucional para quem acompanha relações com investidores,
linguagem calma e nativa, alinhada ao app. Variação 4/10, movimento 2/10 e densidade
4/10: composição clara, feedback simples, sem animações decorativas.

A identidade foi consultada em `lasso-ri/Docs/Design.md`, `LassoColor.swift` e no
catálogo de assets do app. Não é o design de outro produto.

- Azul principal `#0b3d91`; no tema escuro `#7aa7ff` (valores do AccentColor).
- Fontes de sistema: SF quando disponível, Segoe UI e sans-serif como alternativas.
- Ícones claro e escuro originais em `public/assets`, copiados sem alterações.
  O ícone claro também é favicon/apple-touch-icon; não se criou uma marca nova.
- Tokens semânticos em `src/styles/global.css`, tema pela preferência do sistema.
- Espaçamentos base 8/12/16/24/32 px; seções maiores organizam a leitura.
- Botões com raio de 8 px, marca pequena 10 px, arte do app 24%.
- Sem fotografias, gráficos ou screenshots fictícios. A arte é o ícone real do app.

O hero comunica a proposta; a faixa seguinte explica o estágio demonstrativo.
Recursos são texto estruturado, sem uma falsa interface de dados em tempo real.
Mobile usa uma coluna; informações editoriais seguem disponíveis no rodapé.
Links têm foco visível e ações possuem área confortável. FAQ usa details/summary
nativos. Conteúdo se adapta a texto ampliado, sem esconder fatos essenciais.

Valide ambos os temas, contraste, teclado e 320 px de largura. Testes axe não
certificam conformidade completa; revisão com VoiceOver continua recomendada.
