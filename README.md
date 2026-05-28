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
- **Fase 1 (MVP - 8 semanas)**: registro/versionamento, deploy Kubernetes, dashboard básico, custo por modelo, guardrails e alertas básicos.
- **Fase 2 (12 semanas)**: drift detection, RAG avançado, aprovação multi-estágio, explainability, tracing completo e A/B testing.
- **Fase 3 (12 semanas)**: multi-tenancy, risk scoring, compliance reports, otimização automática, auditoria imutável e self-service.

## Stack de Referência
- Frontend: Next.js 15 + TypeScript + Tailwind + shadcn/ui + Recharts + React Flow
- Backend: Python + FastAPI
- MLOps/LLMOps: MLflow, ZenML, KServe, LangChain, LangSmith, LlamaIndex, Phoenix
- Dados e observabilidade: PostgreSQL, ClickHouse, Redis, Prometheus, Grafana, OpenTelemetry, Jaeger
- Governança: Guardrails AI, NeMo Guardrails, LangGraph

## Como começar
1. Instale dependências do workspace: `npm install`
2. Estruture cada app/package conforme a fase de entrega.
3. Consulte as políticas em `docs/governance-policies.md` e a matriz em `docs/risk-matrix.md`.
