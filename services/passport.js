const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.use(new GoogleStrategy(
  {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
  (acessToken, refreshToken, profile, done) => {

    User.findOne({ googleId: profile.id })
      .then(usuarioRecuperado => {
        if(usuarioRecuperado) {
          done(null, usuarioRecuperado);
        }
        else {
          new User({googleId: profile.id})
            .save()
            .then(usuarioCadastrado => {
              done(null, usuarioCadastrado);
            });
        }
      })
      .catch(erro => console.log(erro));
  }
));