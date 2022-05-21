const Router = require('express')
const router = new Router()
const clientsController = require('../controllers/specialistContoller')
const checkrole = require('../middleware/checkRoleMiddleware')


router.get('/', clientsController.getClients)
router.get('/:id', clientsController.getClient)
router.post('/', checkrole('admin'),clientsController.postClient)
router.put('/', checkrole('admin'), clientsController.putClient)
router.delete('/:id', checkrole('admin'), clientsController.deleteClient)


router.post('/registration', clientsController.registration)

router.post('/login', clientsController.login)

router.get('/auth', clientsController.checkAuth)

module.exports = router