const { Router } = require('express')
const LogController = require('../controllers/LogController')

const routes = new Router()
/**
 * @swagger
 * /log:
 *  post:
 *    tags: [log]
 *    description:
 *    responses:
 *      '200':
 *        description: Successfully send log to kinesis if return code is 200
 *    parameters:
 *         - name: serviceId
 *           in: query
 *           description: send serviceId for tag
 *           required: true
 *           schema:
 *             type: string
 *             format: xxxxx
 */
routes.post('/log', LogController.LogAsync)

module.exports = routes
