import {NextApiRequest, NextApiResponse} from "next";
import {SpanKind, SpanStatusCode, trace} from "@opentelemetry/api";
import {ATTR_HTTP_REQUEST_METHOD, ATTR_HTTP_ROUTE} from "@opentelemetry/semantic-conventions";

type ResponseData = {
    message: string;
    timestamp: number;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>,
) {
    const tracer = trace.getTracer("success-endpoint");
    const span = tracer.startSpan("GET /api/success", {
        kind: SpanKind.CLIENT,
        attributes: {
            [ATTR_HTTP_ROUTE]: "/api/success",
            [ATTR_HTTP_REQUEST_METHOD]: req.method,
        },
    });

    span.setAttributes({"response.message": "Success"})

    res.status(200).json({
        message: "Success",
        timestamp: Date.now(),
    });

    span.setStatus({code: SpanStatusCode.UNSET});
    span.end();
}
