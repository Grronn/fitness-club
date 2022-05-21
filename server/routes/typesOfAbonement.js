const Router = require('express')
const router = new Router()
const typesAbController = require('../controllers/typesOfAbonCont')
const checkrole = require('../middleware/checkRoleMiddleware')


router.get('/',typesAbController.getTypesAb)
router.get('/:id',typesAbController.getTypeAb)


router.post('/', checkrole('admin'),typesAbController.postTypesAb )

router.put('/', checkrole('admin'),typesAbController.putTypeAb )

router.delete('/:id', checkrole('admin'),typesAbController.deleteTypeAb )

module.exports = router