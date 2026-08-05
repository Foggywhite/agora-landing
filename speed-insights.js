// Vercel Speed Insights initialization
import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Speed Insights
injectSpeedInsights({
  debug: false,
  // Optionally configure additional options:
  // sampleRate: 1, // Send 100% of events (default)
  // beforeSend: (event) => event, // Modify events before sending
});
