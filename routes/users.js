const usersService = require('../controllers/usersService')

const { Router } = require('express');
const router = Router();


/*router.get('/', (req, res) => {
    res.json(
        {
            "Title": "Hola mundo "
        }
    );
})*/


router.get('/usernameValidate/:username',usersService.usernameValidate);
router.post('/signup', usersService.signup);
router.post('/login',usersService.login);
module.exports = router;