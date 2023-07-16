const router = require('express').Router();
const {
    getAllThoughts,
    getThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
    } = require('../../controllers/thoughtController');

// Creating and retieving all users
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// Targeting a specific user by ID
router
    .route('/:id')
    .get(getThought)
    .put(updateThought)
    .delete(deleteThought);

// Adding and removing friends for a specific user
router
    .route('/thoughts/:thoughtId/:reactionId')
    .post(addReaction)
    .delete(removeReaction);

module.exports = router;