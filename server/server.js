const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('../src/routes/routes');
const cors = require('cors');
const app = express();
const PORT = 4000;
dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log('db connected')
);

app.use(express.json());
app.use(cors());
app.use('/app', routesUrls);
app.listen(PORT, () => console.log('server is up and running'));
