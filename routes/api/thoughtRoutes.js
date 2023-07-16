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

// Creating and retieving all thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// Targeting a specific thought by ID
router
    .route('/:id')
    .get(getThought)
    .put(updateThought)
    .delete(deleteThought);

// Adding and removing friends for a specific thought
router
    .route('/thoughts/:thoughtId/reactions')
    .post(addReaction);


router
    .route('/thoughts/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;