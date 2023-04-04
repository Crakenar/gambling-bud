export {}
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const User = require("./components/users/User");

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        // callbackURL: "http://localhost:4001/google/callback",
        callbackURL: "/google/callback",
        scope: ["profile", "email"],
        passReqToCallback: true
    },
    async function (request, accessToken, refreshToken, profile, done) {
        const query = User.where({ email: profile.email });
        let user = await User.findOne(query);
        if (user === null) {
            user = new User({
                pseudo: profile.displayName,
                name: profile.given_name,
                lastname: profile.family_name,
                email: profile.emails[0].value,
                pictureLink: profile.picture
            });
            user.save();
        }
        return done(null, user);
        // User.findOrCreate({googleId: profile.id}, function (err, user) {
        //     return done(err, user);
        // });
    }
));

passport.serializeUser((user, done) => {
   done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
