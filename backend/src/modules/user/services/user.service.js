// Models
const UserModel = require("../models/user.model");

/* Updates the current user */
const processUpdateMe = async (currentUser, args) => {
  try {
    const { dataInput } = args;

    // 1.4. Update counter logic
    // 1.4. Error debugging for max updates

    const updatedUser = await UserModel.findByIdAndUpdate(currentUser.id, dataInput, { new: true });
    return updatedUser;
  } catch (error) {
    throw new Error(`User service failed: ${error.message}`);
  }
};

module.exports = {
  processUpdateMe,
};
