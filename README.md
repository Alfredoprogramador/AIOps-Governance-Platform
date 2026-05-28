# AIOps Governance Platform

Framework completo para governança, monitoramento e operação de modelos de IA.

## Objetivo
Entregar uma plataforma enterprise para ciclo de vida de IA (MLOps + LLMOps), com monitoramento contínuo, guardrails, auditoria, aprovação humana e otimização de ROI.

## Estrutura do Monorepo
```bash
aiops-governance-platform/
├── apps/
│   ├── frontend/              # Next.js + dashboards
│   ├── backend/               # FastAPI
│   └── mlops-engine/          # MLflow + pipelines
├── packages/
│   ├── shared/                # Schemas e tipos
│   ├── guardrails/            # Regras de segurança
│   ├── monitoring/            # Drift e métricas
│   └── governance-workflows/  # LangGraph + aprovação
├── models/                    # Registry de modelos
├── infra/
│   ├── terraform/
│   └── kubernetes/            # Kserve, Argo
├── docs/
│   ├── governance-policies.md
│   └── risk-matrix.md
├── docker-compose.yml
└── .github/workflows/
```

## Fases
- **Phase 1 (MVP - 8 weeks)**: model registration/versioning, Kubernetes deployment, basic dashboard, cost per model, basic guardrails, and basic alerts.
- **Phase 2 (12 weeks)**: automatic drift detection, advanced RAG evaluation, multi-stage approval, explainability dashboard, full tracing, and A/B testing.
- **Phase 3 (12 weeks)**: multi-tenancy, automated risk scoring, compliance reports, prompt/cost optimization, immutable audit trail, and self-service portal.

## Stack de Referência
- Frontend: Next.js 15 + TypeScript + Tailwind + shadcn/ui + Recharts + React Flow
- Backend: Python + FastAPI
- MLOps/LLMOps: MLflow, ZenML, KServe, LangChain, LangSmith, LlamaIndex, Phoenix
- Dados e observabilidade: PostgreSQL, ClickHouse, Redis, Prometheus, Grafana, OpenTelemetry, Jaeger
- Governança: Guardrails AI, NeMo Guardrails, LangGraph

## Como começar
1. Instale dependências do workspace: `npm install`
2. Crie variáveis locais: `cp .env.example .env` e ajuste `POSTGRES_PASSWORD`.
3. Estruture cada app/package conforme a fase de entrega.
4. Consulte as políticas em `docs/governance-policies.md` e a matriz em `docs/risk-matrix.md`.
