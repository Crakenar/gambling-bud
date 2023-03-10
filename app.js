const express = require('express');
const {graphqlHTTP} = require("express-graphql");
require('dotenv').config();

const schema = require('./components/graphql/schema/schema');
const port = process.env.NODE_DOCKER_PORT  || 4000;
const connectDB = require('./db/index');
const app = express();

//connect database
connectDB().catch(e => console.log(`Erreur conneciton Database ${e}`));

app.use('/graphql', graphqlHTTP({
   schema,
   graphiql: process.env.NODE_ENV === 'development'
}));
app.get('/', (req, res) => res.send('hello world'));


app.listen(port, () => {
   console.log(`Rest API running on port ${port}`);
});
