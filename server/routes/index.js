const Router = require('express')
const router = new Router()
const typesOfAbonementRouter = require('./typesOfAbonement')
const clients = require('./clients')

router.use('/types', typesOfAbonementRouter)
router.use('/clients', clients)

module.exports = router