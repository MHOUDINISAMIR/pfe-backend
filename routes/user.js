const express = require('express')
const userControllers = require('../controllers/user')
const protect = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/add-user', userControllers.addUser)
router.get('/users', userControllers.getUsers)
router.get('/:userId', protect, userControllers.getUserById)
router.put('/update/:userId', protect, userControllers.updateUser)
router.delete('/delete/:userId', protect, userControllers.deleteUser)

module.exports = router