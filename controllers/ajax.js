const sha256 = require('js-sha256');
const secret = 'secretpassword9090'

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let addTodoAjax = (req, res) => {
        if (checkCookieSession(req)) {
            let userId = req.cookies.user_id;
            let newTodo = req.body;
            db.todo.addTodo(userId, newTodo, (error, newTodo) => {
                if (error) {
                    console.log("error in getting file", error);
                } else {
                    res.send(newTodo);
                }
            });
        } else {
            res.send('Log in pls. Ur cookie null or wrong la')
        }
    };

    let checkTodoAjax = (req, res) => {
        if (checkCookieSession(req)) {
            let todoId = req.body.todoId;
            db.todo.checkTodo(todoId, (error, updatedTodo) => {
                if (error) {
                    console.log("error in getting file", error);
                } else {
                    res.send(updatedTodo);
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
    addTodoAjax,
    checkTodoAjax,
  };

}