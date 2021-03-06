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
  const ajaxControllerCallbacks = require('./controllers/ajax')(allModels);


  // ACCOUNT routes
  app.get('/index',             accountControllerCallbacks.showIndex);
  app.get('/login',             accountControllerCallbacks.showLogin);
  app.get('/register',          accountControllerCallbacks.showRegister);

  app.post('/login',            accountControllerCallbacks.login);
  app.post('/register',         accountControllerCallbacks.register);
  app.post('/logout',           accountControllerCallbacks.logout);

  app.get('/welcome',           todoControllerCallbacks.showWelcome);
  app.post('/board',            todoControllerCallbacks.createBoard);


  // TODO routes
  // app.get('/home',              todoControllerCallbacks.showHome);
  app.get('/home',              todoControllerCallbacks.showMain);
  // app.get('/home/all',          todoControllerCallbacks.showAll);
  app.get('/todos/:q/new',      todoControllerCallbacks.showCreateTodo);
  app.get('/todos/:id',         todoControllerCallbacks.showEditTodo);
  app.get('/boards',            todoControllerCallbacks.showAllBoards);
  app.get('/board/:id',         todoControllerCallbacks.showBoard);

  app.post('/todos',            todoControllerCallbacks.addTodo);
  app.put('/todos/:id',         todoControllerCallbacks.editTodo);
  app.delete('/todos/:id',      todoControllerCallbacks.deleteTodo);

  app.get('/howto',             todoControllerCallbacks.showTips);
  app.get('/stats',             todoControllerCallbacks.getStats);

  // AJAX TODO routes
  app.get('/statsAjax',         todoControllerCallbacks.getStatsAjax);
  app.post('/todos/:q/a-add',   ajaxControllerCallbacks.addTodoAjax);
  app.put('/todos/:q/a-check',  ajaxControllerCallbacks.checkTodoAjax);
  // app.put('/todos/:q/a-edit',   ajaxControllerCallbacks.editTodoAjax);
  // app.delete('/todos/:q/a-del', ajaxControllerCallbacks.deleteTodoAjax);

  app.get('*',                  accountControllerCallbacks.redirect);
};