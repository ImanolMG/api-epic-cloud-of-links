const linksService = require('../controllers/linksService')

const { Router } = require('express');
const router = Router();




router.post('/add', linksService.add_link);
router.put('/edit', linksService.updateLink);
router.get('/getAllLinks', linksService.getAllLinks);
router.delete('/deleteLinks/:idlink', linksService.deleteLink);
router.get('/getLink/:idlink', linksService.getLink);
router.put('/edit/:idlink', linksService.updateLink);


module.exports = router;