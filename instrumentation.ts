import {diag, DiagConsoleLogger, DiagLogLevel, trace} from "@opentelemetry/api";
import {OTLPTraceExporter} from "@opentelemetry/exporter-trace-otlp-http";
import {BasicTracerProvider, SimpleSpanProcessor} from "@opentelemetry/sdk-trace-base";
import {resourceFromAttributes} from "@opentelemetry/resources";
import {ATTR_SERVICE_NAME} from "@opentelemetry/semantic-conventions";

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.WARN);

export function register() {
    console.log("Registering OpenTelemetry");

    const exporter = new OTLPTraceExporter({
        url: "http://localhost:4318/v1/traces",
    });

    const provider = new BasicTracerProvider({
        resource: resourceFromAttributes({
            [ATTR_SERVICE_NAME]: "session-10_analytics-focus",
        }),
        spanProcessors: [new SimpleSpanProcessor(exporter)],
    });

    trace.setGlobalTracerProvider(provider);

    console.log("OpenTelemetry has been registered");
}
