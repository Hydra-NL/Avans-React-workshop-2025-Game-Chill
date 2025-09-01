// Models
const UserModel = require("../models/user.model");

// Services
const Service = require("../services/user.service");

// Query
// ----------------------------------------------------------------
/* Retrieves the current session of the user */
const me = async (root, args, { req, next }) => {
  try {
    const currentUser = await UserModel.findById(req.session.userId);
    return currentUser;
  } catch (error) {
    return next(error);
  }
};

// Mutation
// ----------------------------------------------------------------
/* Update Me the profile of current user */
const updateMe = async (root, args, { req, next }) => {
  try {
    const currentUser = await UserModel.findById(req.session.userId);

    const updatedUser = await Service.processUpdateMe(currentUser, args);
    return updatedUser;
  } catch (error) {
    return next(error);
  }
};

// Resolvers
const userResolver = {
  Query: {
    me,
  },

  Mutation: {
    updateMe,
  },
};

module.exports = userResolver;
