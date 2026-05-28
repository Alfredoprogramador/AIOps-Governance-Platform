import { access } from 'node:fs/promises';

const required = [
  'apps/frontend',
  'apps/backend',
  'apps/mlops-engine',
  'packages/shared',
  'packages/guardrails',
  'packages/monitoring',
  'packages/governance-workflows',
  'infra/terraform',
  'infra/kubernetes',
  'docs/governance-policies.md',
  'docs/risk-matrix.md',
  'docker-compose.yml'
];

const missing = [];
for (const path of required) {
  try {
    await access(path);
  } catch {
    missing.push(path);
  }
}

if (missing.length) {
  console.error('Missing required paths:');
  for (const path of missing) console.error(`- ${path}`);
  process.exit(1);
}

console.log('Structure check passed.');
