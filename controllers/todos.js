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
                            user : user[0],
                            todos : allTodos,
                            query : req.query
                        }
                        res.render('main/home', dataSet);
                    }
                });
            });
        } else {
            res.send('Log in pls. Ur cookie null or wrong la')
        }
    };

    let showMain = (req, res) => {
        if (checkCookieSession(req)) {
            let userId = req.cookies.user_id;
            db.account.getUserUsingId(userId, (error, user) => {
                db.todo.getAllTodos(userId, (error, allTodos) => {
                    if (error) {
                        console.log("error in getting file", error);
                    } else {
                        let dataSet = {
                            user : user[0],
                            todos : allTodos,
                            query : req.query
                        }
                        res.render('main/main', dataSet);
                    }
                });
            });
        } else {
            res.send('Log in pls. Ur cookie null or wrong la')
        }
    };

    let showAllBoards = (req, res) => {
        if (checkCookieSession(req)) {
            let userId = req.cookies.user_id;
            db.account.getUserUsingId(userId, (error, user) => {
                db.todo.getAllBoards(userId, (error, allBoards) => {
                    console.log("allBoards", allBoards);
                    if (error) {
                        console.log("error in getting file", error);
                    } else {
                        let dataSet = {
                            user : user[0],
                            query : req.query,
                            board : allBoards,
                        }
                        console.log("dataSet", dataSet);

                        res.render('main/boards', dataSet);
                    }
                });
            });
        } else {
            res.send('Log in pls. Ur cookie null or wrong la')
        }
    };

    let showBoard = (req, res) => {
        if (checkCookieSession(req)) {
            let userId = req.cookies.user_id;
            let boardId = req.params.id;
            db.account.getUserUsingId(userId, (error, user) => {
                db.todo.getAllTodos(boardId, (error, allTodos) => {
                    db.todo.getCurrentBoard(userId, boardId, (error, currentBoard) => {
                        if (error) {
                            console.log("error in getting file", error);
                        } else {
                            let dataSet = {
                                user : user[0],
                                todos : allTodos,
                                query : req.query,
                                board : currentBoard[0],
                                boardId : boardId
                            }
                            console.log("dataSet", dataSet);

                            res.render('main/home', dataSet);
                        }
                    });
                });
            });
        } else {
            res.send('Log in pls. Ur cookie null or wrong la')
        }
    };

    let showWelcome = (req, res) => {
        if (checkCookieSession(req)) {
            let userId = req.cookies.user_id;
            db.account.getUserUsingId(userId, (error, user) => {
                if (error) {
                    console.log("error in getting file", error);
                } else {
                    let dataSet = {
                        user : user[0],
                    }
                    res.render('main/welcome', dataSet);
                }
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
            let boardId = req.params.id;
            let newTodo = req.body;
            console.log("newTodo", newTodo);
            db.todo.addTodo(userId, boardId, newTodo, (error, createdTodo) => {
                console.log('nnew todooooo: ', createdTodo)
                if (error) {
                    console.log("error in getting file", error);
                } else {
                    res.redirect(`/board/${createdTodo[0].board_id}`);
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

    let showTips = (req,res) => {
        if (checkCookieSession(req)) {
            let userId = req.cookies.user_id;
            db.account.getUserUsingId(userId, (error, user) => {
                if (error) {
                    console.log("error in getting file", error);
                } else {
                    let dataSet = {
                        user : user[0],
                    }
                    res.render('main/howto', dataSet);
                }
            });
        } else {
            res.send('Log in pls. Ur cookie null or wrong la')
        }
    }

    // let showStats = (req,res) => {
    //     if (checkCookieSession(req)) {
    //         let userId = req.cookies.user_id;
    //         db.account.getUserUsingId(userId, (error, user) => {
    //             // db.todo.getCreatedTodos(userId, (error, createdTodos) => {
    //             if (error) {
    //                 console.log("error in getting file", error);
    //             } else {
    //                 let dataSet = {
    //                     user : user[0],
    //                 }
    //                 res.render('main/stats', dataSet);
    //             }
    //             // });
    //         });
    //     } else {
    //         res.send('Log in pls. Ur cookie null or wrong la')
    //     }
    // }

    let showProjects = (req, res) => {
        if (checkCookieSession(req)) {
            let userId = req.cookies.user_id;

            db.account.getUserUsingId(userId, (error, user) => {
                db.todo.getAllProjects(userId, (error, allProjects) => {
                    if (error) {
                        console.log("error in getting file", error);
                        res.send('wrongggggg');
                    } else {
                        let dataSet = {
                            user : user[0],
                            projects : allProjects,
                            query : req.query
                        }
                        res.render('main/projects', dataSet);
                    }
                });
            });
        } else {
            res.send('Log in pls. Ur cookie null or wrong la')
        }
    };

    let createBoard = (req, res) => {
        if (checkCookieSession(req)) {
            let userId = req.cookies.user_id;
            let newBoard = req.body;
            db.todo.addBoard( newBoard, userId, (error, newBoard) => {
                console.log("newBoard", newBoard);
                if (error) {
                    console.log("error in getting file", error);
                } else {
                    res.redirect(`/board/${newBoard[0].id}`);
                }
            });
        } else {
            res.send('Log in pls. Ur cookie null or wrong la')
        }
    };

    let week;

    let getStats = (req,res) => {
        if (checkCookieSession(req)) {
            let userId = req.cookies.user_id;
            db.account.getUserUsingId(userId, (error, user) => {
                db.todo.getCreatedTodos(userId, (error, createdTodos) => {
                    db.todo.getCompletedTodos(userId, (error, completedTodos) => {
                        if (error) {
                            console.log("error in getting file", error);
                        } else {
                            let dataSet = {
                                user : user[0],
                                createdTodos : createdTodos,
                                completedTodos : completedTodos
                            }
                            let weeklyNums = runStats(dataSet);
                            let dataSet2 = {
                                user : user[0],
                                week: weeklyNums
                            }
                            res.render('main/stats', dataSet2);
                        }
                    });
                });
            });
        } else {
            res.send('Log in pls. Ur cookie null or wrong la')
        }
    };

    let getStatsAjax = (req,res) => {
        if (checkCookieSession(req)) {
            res.send(week);
        } else {
            res.send('Log in pls. Ur cookie null or wrong la')
        }
    };

    // HELPER FUNCTION TO RETURN WEEK OBJECT WITH # OF CREATED/COMPLETED TODOs
    let runStats = (result) => {
        week = {
            day0 : {created: 0, completed: 0, date: null},
            day1 : {created: 0, completed: 0, date: null},
            day2 : {created: 0, completed: 0, date: null},
            day3 : {created: 0, completed: 0, date: null},
            day4 : {created: 0, completed: 0, date: null},
            day5 : {created: 0, completed: 0, date: null},
            day6 : {created: 0, completed: 0, date: null},
        }
        let created = result.createdTodos;
        let completed = result.completedTodos;
        let firstDay = parseInt(created.firstDay);
        week.month = completed.monthNum;
        // 1. Use FirstDay as to set Day 0
        // 2. For every todo that has been created, loop through each one and check if (First Day + j) matches the day that the todo was created
        // 3. If yes, add a counter to the respective day in the object week
        for (let i=0; i < created.results.length; i++) {
            let eachTodo = created.results[i].created_day;
            for (let j=0; j< 7; j++) {
                if (eachTodo === (j+firstDay)) {
                    week[`day${j}`].created++;
                }
                week[`day${j}`].date = (j+firstDay);
            }
        }
        for (let i=0; i < completed.results.length; i++) {
            let eachTodo = completed.results[i].completed_day;
            for (let j=0; j< 7; j++) {
                if (eachTodo === (j+firstDay) && completed.results[i].completed) {
                    week[`day${j}`].completed++;
                }
            }
        }
        let weekArr = Object.entries(week);
        let todosCreated = 0;
        let todosCompleted = 0;
        // i<7 because only 7 days in a week, plus if 8 it will include the 'month' key which will cause data to be NaN
        for (let i=0; i<7; i++) {
            todosCreated += weekArr[i][1].created;
            todosCompleted += weekArr[i][1].completed;
        }
        let weeklyNums = {
            created : todosCreated,
            completed : todosCompleted
        }
        return weeklyNums;
    }



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    showHome,
    showMain,
    showAllBoards,
    showBoard,
    showWelcome,
    showCreateTodo,
    addTodo,
    showEditTodo,
    editTodo,
    deleteTodo,
    showTips,
    showProjects,
    createBoard,
    // showStats,
    getStats,
    getStatsAjax,
  };

}