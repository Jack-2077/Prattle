const express = require('express');
const mongoose = require("mongoose");
const app = express();
const PORT = 5000; 



//Connect to mongoose
var mongoDB = 'mongodb+srv://prattle:pr%40tt13@prattle.kvvf7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;