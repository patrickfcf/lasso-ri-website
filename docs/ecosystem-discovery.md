# Descoberta do ecossistema

> Atualização 08/11/2026: C2 é a direção ativa e supersede as cores Richmond
> descritas nesta descoberta histórica da PR #23. Veja [design](design.md).

Revisão em 08/11/2026 para o redesign institucional. Código do website baseado em
`origin/main` `43e5eb6`. Checkout original limpo, preservado. A única PR aberta no
website era #21 (TypeScript); nenhum redesign concorrente aberto foi encontrado.
Repositórios complementares foram lidos, sem alterações.

## Evidências e matriz de estágio

| Área         | Evidência consultada                                                              | Comunicação no website                                                                    |
| ------------ | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Apple Apps   | README atual de `lasso-ri`, código local, especificação e Figma C                 | Base SwiftUI com dados de exemplo, em desenvolvimento, sem distribuição pública anunciada |
| Signature    | CURSI-105, APPROVALS, FIGMA_SPEC, Home `2:197`/`2:267`, landing `10:222`          | Direção aprovada, demonstração conceitual, sem alegar versão distribuída                  |
| Core/API     | CURSI-1 concluída, ADR-007 aprovada; CURSI-5/7/8 em backlog; backend sem branches | Arquitetura/direção aprovada, serviços planejados, sem endpoint público                   |
| MCP          | CURSI-12/13/14/15 em backlog; repo MCP sem branches                               | Integração planejada com clientes compatíveis, sem botão de conexão                       |
| Intelligence | CURSI-17/18/19 em backlog                                                         | Monitoramentos, resumos e alertas planejados; fluxo estritamente ilustrativo              |
| Web          | Site Astro existente; CURSI-22 corrigida para reutilizá-lo                        | Website institucional disponível, portal planejado                                        |
| Webhooks     | CURSI-20 em backlog                                                               | Módulo futuro do backend; não há assinaturas/entregas ativadas                            |
| ChatGPT UI   | CURSI-23 em backlog                                                               | Não há experiência visual pública ou conector lançado                                     |
| Conta/sync   | README atual, ADR-008 aceita em 26/10/2026                                        | Direção compartilhada Lasso, ainda não implementada; uso local preservado                 |

Projetos consultados:
[Platform & AI Ecosystem](https://linear.app/luneta/project/lasso-ri-platform-and-ai-ecosystem-68609d2fecc1)
e [Apple Apps](https://linear.app/luneta/project/lasso-ri-apple-apps-signature-redesign-2dc05903995f).

Repositórios: [Apple](https://github.com/patrickfcf/lasso-ri),
[backend](https://github.com/patrickfcf/lasso-ri-backend),
[MCP](https://github.com/patrickfcf/lasso-ri-mcp).

## Decisões de escopo

CURSI-87 é o vínculo principal. CURSI-88 cobre demonstrações/copy, CURSI-89 cobre
SEO/CTA factual, CURSI-90 cobre QA/preview. CURSI-105 fundamenta os tokens.
CURSI-22/23 são contexto de roadmap, não entregas desta PR. Nenhuma issue foi
criada, encerrada ou marcada como concluída por esta implementação.

O briefing atual autoriza o redesign apesar dos gates históricos de port da
landing; não se declara design freeze nativo ou aprovação de C1/C2/C3. Identidade
Richmond Ink preservada, conflito com cores antigas do website registrado em
[design](design.md). O novo posicionamento expande a landing aprovada e mantém os
contratos de Astro, idiomas, rotas, CSP e indexação.

A atribuição pública “criado pela cursi.” não tinha confirmação suficiente nas
instruções do website. O rodapé conserva a autoria legal existente de Patrick
Fonseca e o contato documentado. Não se inventou link de estúdio.

Sem dados ao vivo, cadastro, API keys, downloads, preços ou roadmap datado.
Não se criou serviço, recurso de nuvem, autenticação ou formulário. Nenhum deploy,
merge ou mudança de DNS foi realizado.

## Oportunidades resolvidas

O website anterior girava em torno de um grande ícone de app e uma grade textual,
sem explicar a plataforma. A navegação móvel escondia o link de engenharia; temas
seguiam apenas o sistema; não havia demonstração Signature ou arquitetura.
O novo site organiza a narrativa por contexto → experiências → Intelligence →
Signature → infraestrutura → evolução. A navegação leva às seções com conteúdo
real; engenharia e roadmap existentes foram ampliados em ambos os idiomas.

## Rollback

Reverter o commit da PR restaura os componentes, conteúdo, estilos e testes
anteriores. Sem migração de dados, integração ou recurso externo para desfazer.
Após revisão e eventual publicação futura, validar as mesmas rotas e metadados.
Deploy exige autorização própria e não integra esta entrega.
