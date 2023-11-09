// app.js

const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

app.use(express.json());

// Routes
app.use('/api', userRoutes);



// MiddleWare después de todas las Rutas Definidas
app.use((req, res, next) => {
    sendResponse(res, 404, 'Not Found', null, 'error', 'not_found');
  });
  
  // Error controlando los Middlewares
  app.use((err, req, res, next) => {
    sendResponse(res, 500, 'Server error', null, 'error', 'internal_error');
  });

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
