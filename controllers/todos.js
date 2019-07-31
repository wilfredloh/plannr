const sha256 = require('js-sha256');
const secret = 'secretpassword9090'


module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let showHome = (req, res) => {
        if (checkCookieSession(req)) {
            let userId = req.cookies.user_id;

            db.account.getUserUsingId(userId, (error, user) => {

                db.todo.getAllTodos(userId, (error, allTodos) => {

                if (error) {
                    console.log("error in getting file", error);
                } else {

                    let dataSet = {
                        user : user,
                        todos : allTodos
                    }
                    res.render('main/home', dataSet);
                }
                });
            });
        } else {
            res.send('Log in pls. Ur cookie null or wrong la')
        }
    };

    let showCreateTodo = (req, res) => {
        if (checkCookieSession(req)) {
            let userId = req.cookies.user_id;
            db.account.getUserUsingId(userId, (error, user) => {
                if (error) {
                    console.log("error in getting file", error);
                } else {
                    let dataSet = {
                        user : user,
                        quadrant : req.params.q
                    }
                    res.render('main/createTodo', dataSet);
                }
            });
        } else {
            res.send('Log in pls. Ur cookie null or wrong la')
        }
    };

    let addTodo = (req, res) => {
        if (checkCookieSession(req)) {
            let userId = req.cookies.user_id;
            let newTodo = req.body;
            db.todo.addTodo(userId, newTodo, (error, newTodo) => {
                if (error) {
                    console.log("error in getting file", error);
                } else {
                    res.redirect('/home');
                }
            });
        } else {
            res.send('Log in pls. Ur cookie null or wrong la')
        }
    };

    let showEditTodo = (req, res) => {
        if (checkCookieSession(req)) {
            let userId = req.cookies.user_id;
            let todoId = req.params.id;
            db.account.getUserUsingId(userId, (error, user) => {

                db.todo.getCurrentTodo(todoId, (error, todo) => {

                    if (error) {
                        console.log("error in getting file", error);
                    } else {
                        let dataSet = {
                            user : user[0],
                            todo : todo[0]
                        }
                        res.render('main/indvTodo', dataSet);
                    }
                });
            });
        } else {
            res.send('Log in pls. Ur cookie null or wrong la')
        }
    };

    let editTodo = (req, res) => {
        if (checkCookieSession(req)) {
            let todoId = req.params.id;
            let editedTodo = req.body;
            db.todo.editTodo(todoId, editedTodo, (error, newTodo) => {
                if (error) {
                    console.log("error in getting file", error);
                } else {
                    res.redirect('/home');
                }
            });
        } else {
            res.send('Log in pls. Ur cookie null or wrong la')
        }
    };

    let deleteTodo = (req, res) => {
        if (checkCookieSession(req)) {
            let todoId = req.params.id;
            db.todo.deleteTodo(todoId, (error, newTodo) => {
                if (error) {
                    console.log("error in getting file", error);
                } else {
                    res.redirect('/home');
                }
            });
        } else {
            res.send('Log in pls. Ur cookie null or wrong la')
        }
    };

    // Helper Function to check if current cookie session is valid      //
    let checkCookieSession = (req, res) => {
        let currentCookieSession = req.cookies.loggedin;
        let currentUserId = req.cookies.user_id;
        if (currentCookieSession && currentUserId) {
            if (sha256(currentUserId + 'userID' + secret) === currentCookieSession) {
                return true;
            }
        }
        return false;
    };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    showHome,
    showCreateTodo,
    addTodo,
    showEditTodo,
    editTodo,
    deleteTodo,
  };

}