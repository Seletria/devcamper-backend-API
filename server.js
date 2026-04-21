const express = require('express');
const dotenv = require('dotenv');

//Route files
const bootcamps = require('./routes/bootcamps')

//load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

//Mount routes 
//bunu yazdigimiz icin, routes icinde ayni url'i yazmamiza gerek kalmadi.
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));