
// Función que usaremos en todos los sistemas para retornar respuestas al front end.
function sendResponse(res, statusCode, message, data = null, status = 'success', type = null) {
    const response = {
      status,
      statusCode,
      message,
      data,
      type
    };
  
    res.status(statusCode).send(response);
  }
  
  module.exports = sendResponse;
  