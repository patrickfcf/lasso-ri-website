# Contribuindo

Leia [README](README.md), [AGENTS](AGENTS.md) e [arquitetura](docs/architecture.md).
Instale com `npm ci`, crie uma branch `codex/<objetivo>` a partir de `origin/main`
e mantenha commits pequenos (`feat:`, `fix:`, `docs:`, `chore:`, `test:`).

Atualize português e inglês juntos. Não apresente dados demonstrativos como reais.
Preserve assets e tokens do Lasso RI. Alterações de comportamento precisam de
cobertura significativa; textos e estilos simples não precisam de testes que
apenas reproduzam a implementação.

Antes do PR, rode `npm run verify`, `npm run deploy:check` e `git diff --check`.
Descreva impacto, verificação manual, limitações e configuração externa necessária.
Não inclua segredos, arquivos gerados ou dados de suporte. Não faça merge sem revisão.

Dependências novas precisam de uma justificativa de manutenção, segurança ou
funcionalidade. Instale via npm e inclua o lockfile. Não atualize dependências
alheias ao objetivo só para eliminar diferenças cosméticas.

## Ecossistema e C2

A empresa além da cotação. A identidade ativa é C2 — Monochrome + Signature Accent;
Richmond Ink é histórica. Consulte [design canônico e tokens](docs/design.md)
e a governança dos quatro repositórios ali vinculada. Avalie contratos, docs e
mensagens públicas em Apple/backend/MCP/website; revisão não obriga editar todos.
[Apple Apps](https://github.com/patrickfcf/lasso-ri),
[Backend](https://github.com/patrickfcf/lasso-ri-backend) e
[MCP](https://github.com/patrickfcf/lasso-ri-mcp) compartilham a arquitetura planejada.
[Platform Linear](https://linear.app/luneta/project/lasso-ri-platform-and-ai-ecosystem-68609d2fecc1)
e [Apple Linear](https://linear.app/luneta/project/lasso-ri-apple-apps-signature-redesign-2dc05903995f)
coordenam dependências. Core/API/MCP/Intelligence/portal/webhooks continuam planejados.
