const { Thought, User } = require("../models");

module.exports = {
  // retrieves all thoughts (GET)
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // retrieves a single thought by id (GET)
  async getThought(req, res) {
    try {
      const thought = await Thought.findOne({
        _id: req.params.id
      });
      if (!thought) {
        res.status(404).json({
          message: "No thought with this ID was found",
        });
        return;
      }
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // creates a new thought (POST)
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json("Thought created successfully");
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // updates a thought by id (PUT)
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );

      if (!thought) {
        res.status(404).json({
          message: "No thought with this ID was found",
        });
        return;
      }
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // delete a thought by id and their associated thoughts (DELETE)
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.id,
      });

      if (!thought) {
        res.status(404).json({
          message: "No thought with this ID was found",
        });
        return;
      }

      res.json({
        message: "Thought was deleted",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // add a reaction to a thought (POST)
  async addReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { reactions: req.body } },
        { new: true }
      );
      if (!thought) {
        res.status(404).json({
          message: "No thought with this ID was found",
        });
        return;
      }
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // remove a reaction from a thought (DELETE)
  async removeReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      );
      if (!thought) {
        res.status(404).json({
          message: "No thought with this ID was found",
        });
        return;
      }
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
