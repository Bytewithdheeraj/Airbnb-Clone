const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = require("./models/user");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/auth/google/callback",
    },

    async (accessToken, refreshToken, profile, done) => {
      try {

        let user = await User.findOne({
          googleId: profile.id,
        });

        if (!user) {

          const existingUser = await User.findOne({
            email: profile.emails[0].value,
          });

          if (existingUser) {
            existingUser.googleId = profile.id;
            await existingUser.save();

            return done(null, existingUser);
          }

          user = new User({
            username: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
          });

          await user.save();
        }

        return done(null, user);

      } catch (err) {
        done(err, null);
      }
    }
  )
);