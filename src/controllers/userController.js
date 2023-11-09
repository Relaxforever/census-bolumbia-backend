
const sendResponse = require('../utils/response');

exports.getUser = (req, res) => {
  // Nuestra Logica aqui

  sendResponse(res, 200, 'User fetched successfully', userData,"success");
};

exports.createUser = (req, res) => {
  // Logica aqui de creación

  sendResponse(res, 201, 'User created successfully', newUser);
};

exports.updateUser = (req, res) => {
  // Your logic here to update a user
  // ...

  sendResponse(res, 200, 'User updated successfully', updatedUser);
};

exports.deleteUser = (req, res) => {
  // Your logic here to delete a user
  // ...

  sendResponse(res, 200, 'User deleted successfully');
};


  