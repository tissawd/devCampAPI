const express = require('express');
const dotenv = require('dotenv');


// load env variables
dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 8080;


app.listen(PORT, () => console.log(`Server listening on port ${PORT} in ${process.env.NODE_ENV} mode`));