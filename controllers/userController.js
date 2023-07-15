const { User, Thought } = require("../models");

module.exports = {
  // retrieves all users (GET)
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // retrieves a single user by id (GET)
  async getUser(req, res) {
    try {
      const user = await User.findOne({
        _id: req.params.id,
      });
      if (!user) {
        res.status(404).json({
          message: "No user with this ID was found",
        });
        return;
      }
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // creates a new user (POST)
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // updates a user by id (PUT)
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );

      if (!user) {
        res.status(404).json({
          message: "No user with this ID was found",
        });
        return;
      }
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // delete a user by id and their associated thoughts (DELETE)
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({
        _id: req.params.id,
      });

      if (!user) {
        res.status(404).json({
          message: "No user with this ID was found",
        });
        return;
      }

      await Thought.deleteMany({
        username: user.username,
      });

      res.json({
        message: "User and thoughts were deleted",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // add a new friend to a user's friend list (POST)
  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );

      if (!user) {
        res.status(404).json({
          message: "No user with this ID was found",
        });
        return;
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // remove a friend from a user's friend list (DELETE)
  async removeFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );

      if (!user) {
        res.status(404).json({
          message: "No user with this ID was found",
        });
        return;
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
