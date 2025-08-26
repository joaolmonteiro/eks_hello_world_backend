const { NodeSDK } = require('@opentelemetry/sdk-node');
const { PrometheusExporter } = require('@opentelemetry/exporter-prometheus');
const { ExpressInstrumentation } = require('@opentelemetry/instrumentation-express');
const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http');

const exporter = new PrometheusExporter({ port: 9464 }, () => {
  console.log('Prometheus scrape endpoint: http://localhost:9464/metrics');
});

const sdk = new NodeSDK({
  metricExporter: exporter,
  instrumentations: [new HttpInstrumentation(), new ExpressInstrumentation()],
});

sdk.start();
