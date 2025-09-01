// Models
const GameEventModel = require("../models/game_event.model");

const processGetGameEvents = async () => {
  try {
    const whereOptions = {};

    const gameEvents = await GameEventModel.find(whereOptions).sort({ createdAt: -1 }).limit(20) || [];
    const total = await GameEventModel.countDocuments(whereOptions) || 0;
    return { game_events: gameEvents, total };
  } catch (error) {
    throw new Error(`Game Event service failed: ${error.message}`);
  }
};

/* Create GameEvent */
const processCreateGameEvent = async (currentUser, dateInput) => {
  try {
    const createdDamage = await GameEventModel.create({
      ...dateInput,
      created_by: currentUser.id,
    });

    return createdDamage;
  } catch (error) {
    throw new Error(`Game Event service failed: ${error.message}`);
  }
};

/* Update GameEvent */
const processUpdateGameEvent = async (currentUser, gameEvent, dateInput) => {
  try {
    if (!currentUser || gameEvent.created_by.toString() !== currentUser._id.toString()) {
      throw new Error("UNAUTHORIZED");
    }

    const updatedDamage = await GameEventModel.findByIdAndUpdate(gameEvent.id, dateInput, { new: true });
    return updatedDamage;
  } catch (error) {
    throw new Error(`Game Event service failed: ${error.message}`);
  }
};

/* Delete GameEvent */
const processDeleteGameEvent = async (currentUser, gameEvent) => {
  try {
    if (!currentUser || gameEvent.created_by.toString() !== currentUser._id.toString()) {
      throw new Error("UNAUTHORIZED");
    }

    await gameEvent.deleteOne();
    return true;
  } catch (error) {
    throw new Error(`Game Event service failed: ${error.message}`);
  }
};

module.exports = {
  processGetGameEvents,

  processCreateGameEvent,
  processUpdateGameEvent,
  processDeleteGameEvent,
};
