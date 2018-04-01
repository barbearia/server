const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

/**
 * Esse id é o do registro criado na coleção do mongoDB e não o googleId.
 *
 * Não é recomendado usar o googleId aqui por conta da possibilidade
 * de utilização de outros provedores de autenticação OAuth.
 */
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(
    user => done(null, user)
  );
});

passport.use(new GoogleStrategy(
  {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  async (acessToken, refreshToken, profile, done) => {
    const usuarioRecuperado = await User.findOne({ googleId: profile.id });
    if(usuarioRecuperado) {
      return done(null, usuarioRecuperado);
    }

    const usuarioCadastrado = new User({googleId: profile.id}).save()
    done(null, usuarioCadastrado);
  }
));