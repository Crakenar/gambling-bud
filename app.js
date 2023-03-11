const express = require('express');
const session = require('express-session');
const {graphqlHTTP} = require("express-graphql");
require('dotenv').config();

const schema = require('./components/graphql/schema/schema');
const port = process.env.NODE_DOCKER_PORT || 4000;
require('./auth');
const connectDB = require('./db');
const passport = require("passport");

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


function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

//connect database
connectDB().catch(e => console.log(`Erreur conneciton Database ${e}`));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}));

app.get('/', (req, res) => res.send('<a href="/auth/google"> Authenticate with google </a>'));

app.get('/auth/google', passport.authenticate('google', {scope: ['email', 'profile']}));
app.get('/google/callback', passport.authenticate('google', {
    successRedirect: '/logged',
    failureRedirect: '/auth/failure'
}));

app.get('/auth/failure', (req, res) => res.send('something went wrong'));
app.get('/logged', (req, res) => {
    res.send(`Logged in as ${req.user.displayName}`);
});

app.get('/logout', (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        req.session.destroy();
        res.redirect('/');
    });
});

app.get('/protected', isLoggedIn, (req, res) => {
    res.send('Logged in');
});


app.listen(port, () => {
    console.log(`Rest API running on port ${port}`);
});
