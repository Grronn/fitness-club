const Router = require('express')
const router = new Router()
const typesAbController = require('../controllers/typesOfAbonCont')


router.get('/gettab',typesAbController.getTypesAb)


router.post('/posttab',typesAbController.postTypesAb )

router.put('/puttab/:id',typesAbController.putTypeAb )

router.delete('/deletetab/:id',typesAbController.deleteTypeAb )

module.exports = router