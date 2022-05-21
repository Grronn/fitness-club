const Router = require('express')
const router = new Router()
const typesOfAbonementRouter = require('./typesOfAbonement')
const clients = require('./specialists')
const user = require('./userRouter')

router.use('/types', typesOfAbonementRouter)
router.use('/spec', clients)
router.use('/users', user)

module.exports = router