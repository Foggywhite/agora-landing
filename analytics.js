// Initialize Vercel Speed Insights
// This script loads and configures Speed Insights for the page
import { injectSpeedInsights } from './dist/speed-insights.js';

// Initialize Speed Insights with default configuration
injectSpeedInsights({
  debug: false,
});
