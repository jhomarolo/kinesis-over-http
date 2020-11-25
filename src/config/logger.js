require("dotenv/config")
const defaultLevel = process.env.NODE_ENV === "development" ? "debug" : "error"

const level = process.env.LOGGER_LEVEL || defaultLevel
var kinesis_firehose_configuration = {
  streamName: process.env.KINESIS_FIREHOSE_LOGGER_NAME,
  firehoseOptions: {
    region: process.env.KINESIS_LOGGER_REGION,
    accessKeyId: process.env.KINESIS_LOGGER_ACCESS_KEY_ID,
    secretAccessKey: process.env.KINESIS_LOGGER_SECRET_ACCESS_KEY,
  },
}

module.exports = {

  kinesis_firehose_configuration
}
