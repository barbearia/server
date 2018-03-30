const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  /**
   * O método logout é adicionado automaticamente ao objeto req pelo passport.
   */
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  })

  app.get('/api/usuario', (req, res) => {
    res.send(req.user)
  });
}

