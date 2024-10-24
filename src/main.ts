import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';

import * as Sentry from "@sentry/vue";

const app = createApp(App);

Sentry.init({
    app,
    dsn: "https://86c837ee72a2c6f86961df1544bc626a@o4508178506711040.ingest.de.sentry.io/4508178508218448",
    integrations: [
      Sentry.browserTracingIntegration({ router }),
      Sentry.replayIntegration(),
    ],
    // Tracing
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });

app.use(router);
app.mount('#app');
