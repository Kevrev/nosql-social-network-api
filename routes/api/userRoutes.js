const router = require('express').Router();
const {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
    } = require('../../controllers/userController');

// Creating and retieving all users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// Targeting a specific user by ID
router
    .route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

// Adding and removing friends for a specific user
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;