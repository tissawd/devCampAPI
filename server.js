const express = require('express');
const dotenv = require('dotenv');

// Route files
const bootcamps = require('./routes/bootcamps.js')

// load env variables
dotenv.config({ path: './config/config.env' });

const app = express();

// Mount routes
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server listening on port ${PORT} in ${process.env.NODE_ENV} mode`));