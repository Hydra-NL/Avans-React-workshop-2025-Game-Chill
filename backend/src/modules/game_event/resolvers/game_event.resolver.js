// Models
const GameEventModel = require("../models/game_event.model");
const UserModel = require("../../user/models/user.model");

// Services
const Service = require("../services/game_event.service");

// Query
// ----------------------------------------------------------------
/* Retrieves a single game event */
const getGameEvent = async (root, { gameEventId }, { next }) => {
  try {
    // 3.1. Retrieve data

    return gameEventId;
  } catch (error) {
    return next(error);
  }
};

/* Retrieves all users */
const getGameEvents = async (root, args, { next }) => {
  try {
    const searchResult = await Service.processGetGameEvents();
    return searchResult;
  } catch (error) {
    return next(error);
  }
};

// Mutation
// ----------------------------------------------------------------
/* Creates Game Event */
const createGameEvent = async (root, { dataInput }, { req, next }) => {
  try {
    const currentUser = await UserModel.findById(req.session.userId);

    const createdAuction = await Service.processCreateGameEvent(currentUser, dataInput);
    return createdAuction;
  } catch (error) {
    return next(error);
  }
};

/* Update Game Event */
const updateGameEvent = async (root, { gameEventId, dataInput }, { req, next }) => {
  try {
    const currentUser = await UserModel.findById(req.session.userId);
    const gameEvent = await GameEventModel.findById(gameEventId);

    const updatedGameEvent = await Service.processUpdateGameEvent(currentUser, gameEvent, dataInput);
    return updatedGameEvent;
  } catch (error) {
    return next(error);
  }
};

/* Delete an existing Game Event */
const deleteGameEvent = async (root, { gameEventId }, { req, next }) => {
  try {
    const currentUser = await UserModel.findById(req.session.userId);
    const gameEvent = await GameEventModel.findById(gameEventId);

    await Service.processDeleteGameEvent(currentUser, gameEvent);
    return true;
  } catch (error) {
    return next(error);
  }
};

// Resolvers
const userResolver = {
  Query: {
    getGameEvent,
    getGameEvents,
  },

  Mutation: {
    createGameEvent,
    updateGameEvent,
    deleteGameEvent,
  },

  // Populate
  GameEvent: {
    created_by: async gameEvent => (await gameEvent.populate("created_by")).created_by,
  },
};

module.exports = userResolver;
