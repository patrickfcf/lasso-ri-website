# Design

O Lasso RI se apresenta como plataforma de inteligência de Relações com
Investidores. O slogan português é **A empresa além da cotação.**; a adaptação
inglesa é **The company beyond the stock price.** Não é uma corretora nem um
serviço de recomendação. O estágio de cada experiência faz parte do conteúdo.

## Direção e tokens

Redesign editorial com CSS nativo: variação 6/10, movimento 3/10 e densidade 4/10.
Hierarquia tipográfica, superfícies neutras, demonstrações com origem identificada
e arquitetura explorável substituem o ícone ampliado como narrativa principal.
Fontes de sistema, sem requisições externas e sem layout shift por webfonts.

Fonte de identidade: CURSI-105, aprovada em 20/10/2026, e
[especificação Richmond Ink](https://github.com/patrickfcf/lasso-ri/blob/main/design-exploration/one-screen-experience/COLOR_EXPLORATION.md).
Os valores de `palette-tokens.json` são aplicados em `src/styles/global.css`.
São aliases do website, não novos tokens oficiais de produto.

| Papel         | Claro   | Escuro  |
| ------------- | ------- | ------- |
| Ação          | #163C72 | #9EBFF2 |
| Acento quente | #A64439 | #F0A18E |
| Fundo         | #F3F5F8 | #101A29 |
| Superfície    | #FFFFFF | #1B293C |
| Texto         | #172337 | #F4F6FA |
| Secundário    | #536277 | #B2BED0 |
| Linha         | #D8DFE9 | #354459 |
| Ação suave    | #E8EEF7 | #273F60 |
| Navy          | #10284F | #173B69 |
| Marca         | #243F67 | #26466E |
| Positivo      | #17613F | #93D3B0 |
| Negativo      | #963C3A | #F2AAA0 |
| Atenção       | #89500C | #F7C789 |
| Sobre ação    | #FFFFFF | #101A29 |

Acento quente identifica RI e poucos detalhes editoriais; não representa retorno,
queda ou erro. Quantias de demonstração ficam neutras. Fatos relevantes e JCP
mantêm rótulos legíveis. Espaçamento base 4/8/12/16/20/24/32; superfícies com raio
12, controles 8 e mockups 24. Header fica na camada 10 e skip link na 20.

**Divergência resolvida:** o AGENTS.md original prescrevia #0b3d91/#7aa7ff, anteriores
à ratificação Richmond Ink. O briefing explícito e CURSI-105 prevalecem. Os dois
PNG originais permanecem intactos; o logotipo não foi redesenhado. C1/C2/C3 seguem
estudos não aprovados, mesmo quando aparecem nas referências anexadas.

## Referências e limites

Foram consultados o site público anterior, os projetos Platform/Apple no Linear,
CURSI-87/88/89/90/105/22/23 e a decisão CURSI-1. O README e ADR-007/008 atuais do
repositório Apple prevalecem sobre descrições históricas: a direção é conta Lasso
compartilhada com uso local, ainda não implementada. Backend/MCP estavam vazios.
A matriz detalhada está em [descoberta](ecosystem-discovery.md).

No [Figma Signature](https://www.figma.com/design/H41g12DmBk96zKjGR28tOO), foram
consultados os nós `2:197` (Home clara), `2:267` (escura) e `10:222` (landing).
A composição reutiliza a hierarquia C: toolbar, radar, período, próximo provento,
semana, acontecimentos e empresas. O mockup é HTML semântico responsivo; não é
uma screenshot da versão distribuída. O Figma usa Inter como proxy; o website
preserva a fonte de sistema aprovada. Não houve edição do Figma nem de outro repo.

Os oito anexos do briefing orientam slogan, neutralidade, arquitetura e distinção
entre visão e implementação. As capturas históricas não autorizam criar outro
repositório web ou anunciar execução de monitores.

Princípios estudados: hierarquia editorial do [Linear](https://linear.app/),
infraestrutura como narrativa da [Stripe](https://stripe.com/) e
[Plaid](https://plaid.com/), clareza técnica da [Vercel](https://vercel.com/),
demonstração de produto da [Raycast](https://raycast.com/) e composição do
[Figma](https://www.figma.com/). Nenhum asset, texto ou layout foi copiado.

## Interação e acessibilidade

- Light/Dark/Sistema por radios nativos e `:has()`, sem JS, cookies ou persistência.
  Sistema é o padrão em cada página. Escolha manual vale até navegar/recarregar.
- Menu móvel, FAQ, anúncio/datas e camadas Core/API usam `details/summary`.
  O JS apenas fecha o menu ao navegar, devolve foco ao fechar com Escape e preserva
  query/hash no idioma. As funções básicas continuam disponíveis sem JS.
- Diagrama tem ordem de leitura real, fontes, camadas expansíveis e seis destinos.
  O desktop ramifica conexões; mobile reorganiza os canais em duas colunas.
- Entrada do hero e fluxo de informação têm movimento breve; revelação em scroll
  só quando CSS suporta. Sem esconder conteúdo por JS ou animação infinita.
  `prefers-reduced-motion` remove as animações e scroll suave.
- Headings sem saltos, um h1, skip link, foco visível, nenhum controle falso no
  mockup. Período e semana são ilustrações estáticas, sem aparência de botões.

Demonstrações usam Companhia Aurora/Horizonte e DEMO3/EXMP4, com rótulo explícito
em ambos os idiomas. TAEE11/BBAS3 aparecem apenas na solicitação conceitual; não
há documento, cotação, dividendo ou resultado atribuído a esses emissores.

Ver [testes](testing.md) para evidências e limites. Axe não certifica WCAG inteira;
VoiceOver, Safari/Firefox e dispositivos físicos continuam revisão recomendada.

## Assets sociais

As imagens OG PT/EN são composições editoriais próprias de 1200×630. Para
atualizá-las, rode `node scripts/generate-social-images.mjs` na raiz após instalar
Chromium. A fonte de sistema segue o host de geração; confira o PNG antes de
commitar. O script não publica nem acessa dados externos.
