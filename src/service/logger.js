const dependencies = { Logger: require('winston') }
const format = require('winston').format

class Logger {
  constructor(transport, injection) {
    Object.assign(this, {
      error: this.callLogger.bind(this, 'error'),
      warn: this.callLogger.bind(this, 'warn'),
      info: this.callLogger.bind(this, 'info'),
      verbose: this.callLogger.bind(this, 'verbose'),
      debug: this.callLogger.bind(this, 'debug'),
      silly: this.callLogger.bind(this, 'silly')
    })

    const { Logger } = Object.assign({}, dependencies, injection)

    this.transport = transport
    this.loggerInstance = Logger.createLogger({

      format: format.combine(
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
      ),
      transports: [this.transport]

    })
  }

  getExecution(deep) {
    const stack = new Error().stack
    return stack.split('\n')[deep]
  }

  callLogger(level, message, contents) {
    const execution = this.getExecution(3)
    const logObject = { execution, message, contents }

    this.loggerInstance.log(level, logObject)
  }
}

module.exports = Logger
