/* winston logger */
import { createLogger, transports, format } from "winston";

const logger = createLogger({
  transports: [new transports.Console()],
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.splat(),
    format.metadata(),
    format.printf(({ timestamp, level, message, service }) => {
      return `[${timestamp}] ${service} ${level}: ${message}`;
    })
  ),
  defaultMeta: {
    service: "Loaner-server",
  },
});

export { logger };
