// Simple build script to copy speed-insights module for browser use
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Copy the browser-ready bundle from node_modules
const source = path.join(__dirname, 'node_modules/@vercel/speed-insights/dist/index.mjs');
const dest = path.join(__dirname, 'dist/speed-insights.js');

// Ensure dist directory exists
if (!fs.existsSync(path.join(__dirname, 'dist'))) {
  fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });
}

// Copy the file
fs.copyFileSync(source, dest);

console.log('✓ Speed Insights bundle copied to dist/speed-insights.js');
