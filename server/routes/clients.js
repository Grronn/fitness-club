const Router = require('express')
const router = new Router()
const clientsController = require('../controllers/clientsContoller')


router.get('/getclient', clientsController.getClients)
router.post('/postclient', clientsController.postClient)
router.put('/putclient/:id', clientsController.putClient)
router.delete('/deleteclient/:id', clientsController.deleteClient)


router.post('/registration', clientsController.registration)

router.post('/login', clientsController.login)

router.get('/auth', clientsController.checkAuth)

module.exports = router