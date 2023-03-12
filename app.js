const express = require('express');
const session = require('express-session');
const {graphqlHTTP} = require("express-graphql");
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const authRoute = require("./routes/auth");

const schema = require('./components/graphql/schema/schema');
const port = process.env.NODE_DOCKER_PORT || 4000;
require('./auth');
const connectDB = require('./db');
const passport = require("passport");

const  corsOptions = {
    origin: ['http://127.0.0.1:5173', 'http://localhost:5173'],
    credentials: true,
};
const app = express();

let sess = {
    secret: process.env.PASSPORT_SESSION_SECRET,
    cookie: {}
}

if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
}
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session(sess));
app.use(cors(corsOptions));
app.use("/", authRoute);

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

//connect database
connectDB().catch(e => console.log(`Erreur conneciton Database ${e}`));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}));
app.get('/', (req, res) => res.send('<a href="/google"> Authenticate with google </a>'));

app.get('/protected', isLoggedIn, (req, res) => {
    res.send('Logged in');
});

// app.get('/getCollections', (req, res) => {
//     const data = mongoose.modelNames();
//     res.send(JSON.stringify(data));
// });


app.listen(port, () => {
    console.log(`Rest API running on port ${port}`);
});
