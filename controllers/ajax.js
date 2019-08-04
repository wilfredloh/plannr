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
            db.todo.getCurrentTodo(todoId, (error, todo) => {
                if (todo) {
                    let checkDone = todo[0].completed;
                    db.todo.checkTodo(checkDone, todoId, (error, updatedTodo) => {
                        if (error) {
                            console.log("error in getting file", error);
                        } else {
                            res.send(updatedTodo[0]);
                        }
                    });
                } else {
                    res.send('no todo from query search!!!!!!');
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

     // let getStats = (req,res) => {
    //     if (checkCookieSession(req)) {
    //         let userId = req.cookies.user_id;
    //         db.account.getUserUsingId(userId, (error, user) => {
    //             db.todo.getCreatedTodos(userId, (error, createdTodos) => {
    //                 db.todo.getCompletedTodos(userId, (error, completedTodos) => {
    //                     if (error) {
    //                         console.log("error in getting file", error);
    //                     } else {
    //                         let dataSet = {
    //                             user : user[0],
    //                             createdTodos : createdTodos,
    //                             completedTodos : completedTodos
    //                         }
    //                         res.send(dataSet);
    //                     }
    //                 });
    //             });
    //         });
    //     } else {
    //         res.send('Log in pls. Ur cookie null or wrong la')
    //     }
    // };