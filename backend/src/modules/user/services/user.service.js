// Models
const UserModel = require("../models/user.model");

/* Updates the current user */
const processUpdateMe = async (currentUser, args) => {
  try {
    const { dataInput } = args;

    // 1. Profile page
    // 1.4. Update counter logic
    // dataInput.update_count = currentUser.update_count ? currentUser.update_count + 1 : 1;
    // if (currentUser.update_count >= 10) {
    //   throw new Error("Max update count");
    // }

    const updatedUser = await UserModel.findByIdAndUpdate(currentUser.id, dataInput, { new: true });
    return updatedUser;
  } catch (error) {
    throw new Error(`User service failed: ${error.message}`);
  }
};

module.exports = {
  processUpdateMe,
};
