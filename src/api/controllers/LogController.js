const logger = require("../../service/kinesisFirehoseLogger")

class LogController {
  async LogAsync(req, res) {
    try {
      logger.info(req.body,req.query.serviceId)
      return res.json(200)
    } catch (error) {
      logger.error(error)
      return res.status(500).json(error)
    }
  }
}

module.exports = new LogController()
