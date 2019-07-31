module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR TWEEDR CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const accountControllerCallbacks = require('./controllers/account')(allModels);
  const todoControllerCallbacks = require('./controllers/todos')(allModels);


  // Account routes
  app.get('/index',         accountControllerCallbacks.showIndex);
  app.get('/login',         accountControllerCallbacks.showLogin);
  app.get('/register',      accountControllerCallbacks.showRegister);

  app.post('/login',        accountControllerCallbacks.login);
  app.post('/register',     accountControllerCallbacks.register);
  app.post('/logout',       accountControllerCallbacks.logout);


  app.get('/home',          todoControllerCallbacks.showHome);


  // app.get('/newtweet', accountControllerCallbacks.showCreateTweet);
  // app.post('/newtweet', accountControllerCallbacks.createTweet);

  // app.get('/tweets', accountControllerCallbacks.showAllTweets);
  // // app.get('/tweets/:id', accountControllerCallbacks.showAllTweets);
  // app.get('/users/:id', accountControllerCallbacks.showIndvUser);
  // app.post('/users/:id', accountControllerCallbacks.followIndvUser);
  // app.get('/profile', accountControllerCallbacks.showUserProfile);

  // app.get('/following', accountControllerCallbacks.showUserProfile);

  app.get('*',              accountControllerCallbacks.redirect);
};