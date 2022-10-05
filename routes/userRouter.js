const router = require('express').Router()
const userCtrl = require('../controllers/userController.js')
const auth = require('../middleware/auth')

router.post('/register', userCtrl.register)


router.post('/login', userCtrl.login)

router.get('/logout', userCtrl.logout)

router.get('/refresh_token', userCtrl.refreshToken)

router.get('/infor', auth, userCtrl.getUser)

router.patch('/addcart', auth, userCtrl.addCart)

module.exports = router



//for testing in start
// router.post('/register', (req, res) =>{
//     res.json({msg:"Test Router"})
// })