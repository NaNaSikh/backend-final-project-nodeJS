const cors = require('cors');

const corsOptions = {
  origin: 'http://127.0.0.1:3001', // Allow requests from this origin
  methods: 'GET, POST, PUT, DELETE, OPTIONS', // Allow the methods you intend to handle
  allowedHeaders: 'Content-Type, Authorization', // Allow the headers you intend to use
};

module.exports = cors(corsOptions);
