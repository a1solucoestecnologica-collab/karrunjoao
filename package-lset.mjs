import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const source = fileURLToPath(new URL('./lset-app/dist/client/', import.meta.url));
const target = fileURLToPath(new URL('./dist/lset/', import.meta.url));
if (!existsSync(source + '/index.html')) throw new Error('Execute npm run build dentro de lset-app primeiro.');
mkdirSync(target, { recursive: true });
cpSync(source, target, { recursive: true });
console.log('LSET publicada em dist/lset.');
