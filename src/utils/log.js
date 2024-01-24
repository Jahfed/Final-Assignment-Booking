import pino from "pino";
import PinoPretty from "pino-pretty";

let logger = pino({ level: "silent" });

if (process.env.NODE_ENV !== 'production') {
    logger = pino({
        level: "info", target: 'pino-pretty',
        options: {
            colorize: true
        }
    });

    logger.fatal("Fatal message");
    logger.error("Error message");
    logger.warn("Warn message");
    logger.info("Info message");
    logger.debug("Debug message");
    logger.trace("Trace message");
} else {
    logger = pino({ level: "silent" });
}

export default logger;