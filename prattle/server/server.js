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

//const mongoose = require('mongoose');
// const app = express();
// const PORT = 5000;

//Connect to mongoose
// var mongoDB =
//   'mongodb+srv://prattle:pr%40tt13@prattle.kvvf7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// module.exports = app;

// const { MongoClient } = require('mongodb');

// async function main() {
//   /**
//    * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//    * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//    */
//   const uri =
//     'mongodb+srv://prattle:pr%40tt13@prattle.kvvf7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//   const client = new MongoClient(uri);

//   try {
//     // Connect to the MongoDB cluster
//     await client.connect();

//     // Make the appropriate DB calls
//     await listDatabases(client);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }

// main().catch(console.error);

// async function listDatabases(client) {
//   databasesList = await client.db().admin().listDatabases();

//   console.log('Databases:');
//   databasesList.databases.forEach((db) =>
//     console.log(` - ${db.name}  ${db.adminCommand}`)
//   );
// }
