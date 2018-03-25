const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys');

passport.use(new GoogleStrategy(
  {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
  (acessToken, refreshToken, profile, done) => {
    console.log('acess token ', acessToken);
    console.log('refresh token ', refreshToken);
    console.log('profile ', profile);
  }
));