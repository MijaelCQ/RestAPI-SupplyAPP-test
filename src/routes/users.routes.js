const{Router} = require('express');
const router = Router();

const usersControl = require('../controllers/users.controllers.js')

router.get('/',usersControl.getUsers)
router.post('/',usersControl.createUsers)
router.delete('/:id',usersControl.deleteUsers)
router.patch('/:id',usersControl.updateUsers)
router.get('/:id',usersControl.getUser)

module.exports=router