const sha256 = require('js-sha256');
const moment = require('moment');
/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */



module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    let addTodo = (userId, newTodo, callback) => {

        let createdDate = createMoment();
        let createdDay = createMomentDay();

        let queryString = `INSERT INTO todos (title, description, quadrant, created_date, created_day, user_id, board_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
        let values = [ newTodo.title, newTodo.desc, newTodo.quadrant, createdDate, createdDay, userId, newTodo.boardId ];
        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let getAllTodos = (boardId, callback) => {
        let queryString = 'SELECT * FROM todos WHERE board_id = $1';
        let values = [boardId];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if( error ){
                callback(error, null);
            } else {
                let allTodos = queryResult.rows;
                if ( allTodos.length > 0 ){
                    let quadrants = {
                        q1: [],
                        q2: [],
                        q3: [],
                        q4: []
                    }
                    for (let i=0; i < allTodos.length; i++) {
                        if (allTodos[i].quadrant === 1) {
                            quadrants.q1.push(allTodos[i]);
                        } else if (allTodos[i].quadrant === 2) {
                            quadrants.q2.push(allTodos[i]);
                        } else if (allTodos[i].quadrant === 3) {
                            quadrants.q3.push(allTodos[i]);
                        } else if (allTodos[i].quadrant === 4) {
                            quadrants.q4.push(allTodos[i]);
                        }
                    }
                    callback(null, quadrants);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let getCurrentTodo = (todoId, callback) => {

        let queryString = 'SELECT * FROM todos WHERE id = $1';
        let values = [todoId];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if( error ){
                callback(error, null);
            } else {
                if ( queryResult.rows.length > 0 ){
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let editTodo = (todoId, editedTodo, callback) => {
        let editedDate = createMoment();

        let queryString = 'UPDATE todos SET title = $1, description = $2, edited_date = $3, quadrant = $4 WHERE id = $5';
        let values = [ editedTodo.title, editedTodo.description, editedDate, editedTodo.quadrant, todoId ];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if( error ){
                callback(error, null);
            } else {
                if ( queryResult.rows.length > 0 ){
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    }

    let checkTodo = (checkDone, todoId, callback) => {

        let completedDate = createMoment();
        let completedDay = createMomentDay();

        let toggle = true;
        if (checkDone) {
            toggle = false;
        }

        let queryString = 'UPDATE todos SET completed = $1, completed_date = $2, completed_day = $3 WHERE id = $4 RETURNING id, completed, completed_date';
        values = [ toggle, completedDate, completedDay, todoId ];
        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if( error ){
                callback(error, null);
            } else {
                if ( queryResult.rows.length > 0 ){
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    }

    let deleteTodo = (todoId, callback) => {

        let queryString = 'DELETE FROM todos WHERE id = $1';
        let values = [ todoId ];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if( error ){
                callback(error, null);
            } else {
                if ( queryResult.rows.length > 0 ){
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    }

    let addBoard = (newBoard, userId, callback) => {

        let queryString = `INSERT INTO boards (title) VALUES ($1) RETURNING id`;
        let values = [ newBoard.title ];
        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            let boardId = queryResult.rows[0].id;
            let queryString2 = `INSERT INTO board_user (board_id, user_id) VALUES ($1, $2) RETURNING *`;
            let values2 = [boardId, userId]

            dbPoolInstance.query(queryString2, values2, (error, queryResult2) => {
                if (error) {
                    callback(error, null);
                } else {
                    if (queryResult.rows.length > 0) {
                        callback(null, queryResult.rows);
                    } else {
                        callback(null, null);
                    }
                }
            });
        });
    };

    let getAllBoards = (userId, callback) => {

        let queryString = 'SELECT * FROM boards INNER JOIN board_user ON (board_user.board_id = boards.id) WHERE board_user.user_id = $1';
        let values = [userId];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if( error ){
                callback(error, null);
            } else {
                if ( queryResult.rows.length > 0 ){
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let getCurrentBoard = (userId, boardId, callback) => {

        let queryString = 'SELECT * FROM boards INNER JOIN board_user ON (board_user.board_id = boards.id) WHERE board_user.user_id = $1 AND board_user.board_id = $2';
        let values = [userId, boardId];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if( error ){
                callback(error, null);
            } else {
                if ( queryResult.rows.length > 0 ){
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let getBoardFromTodo = (todoId, userId, callback) => {

        let queryString = 'SELECT board_id FROM todos WHERE user_id = $1 and id = $2';
        let values = [userId, todoId];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if( error ){
                callback(error, null);
            } else {
                if ( queryResult.rows.length > 0 ){
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    // PROJECT PAGE

    // let getAllProjects = (userId, callback) => {
    //     let queryString = 'SELECT * FROM projects INNER JOIN proj_user ON (proj_user.project_id = projects.id) WHERE proj_user.user_id = $1';
    //     let values = [userId];

    //     dbPoolInstance.query(queryString, values, (error, queryResult) => {
    //         if( error ){
    //             callback(error, null);
    //         } else {
    //             if ( queryResult.rows.length > 0 ){
    //                 callback(null, queryResult.rows);
    //             } else {
    //                 callback(null, null);
    //             }
    //         }
    //     });
    // };

    // STATS PAGE
    let getCreatedTodos = (userId, callback) => {
        let firstDay = moment().startOf('week').format('D');
        let lastDay = moment().endOf('week').format('D');
        let month = moment().format('MMMM');

        let queryString = 'SELECT created_day FROM todos WHERE created_date like $1 AND created_day BETWEEN $2 and $3 AND user_id = $4';
        let values = [`%${month}%`, firstDay, lastDay, userId];
        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if( error ){
                callback(error, null);
            } else {
                if ( queryResult.rows.length > 0 ){
                    let dataObj = {
                        firstDay : firstDay,
                        lastDay : lastDay,
                        results : queryResult.rows
                    }
                    callback(null, dataObj);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let getCompletedTodos = (userId, callback) => {
        let firstDay = moment().startOf('week').format('D');
        let lastDay = moment().endOf('week').format('D');
        let month = moment().format('MMMM');
        let monthNum = moment().format('M');

        let queryString = 'SELECT completed, completed_day FROM todos WHERE completed_date like $1 AND completed_day BETWEEN $2 and $3 AND user_id = $4';
        let values = [`%${month}%`, firstDay, lastDay, userId];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if( error ){
                callback(error, null);
            } else {
                if ( queryResult.rows.length > 0 ){
                    let dataObj = {
                        results : queryResult.rows,
                        monthNum : monthNum
                    }
                    callback(null, dataObj);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let addNotification = (message, userId, callback) => {
        let currentTime = moment().format('MMM D, h:mm:ss a');
        let queryString = `INSERT INTO messages (title, user_id, created_time) VALUES ($1, $2, $3) RETURNING *`;
        let values = [ message, userId, currentTime ];
        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let getAllMessages = (userId, callback) => {

        let queryString = 'SELECT * FROM messages WHERE user_id = $1 ORDER BY id DESC';
        let values = [userId];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if( error ){
                callback(error, null);
            } else {
                if ( queryResult.rows.length > 0 ){
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    // HELPER FUNCTION TO CREATE DATE
    let createNewDate = () => {
        let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        let d = new Date();
        let formattedMinutes = d.getMinutes();
        let formattedSeconds = d.getSeconds();

        if (formattedMinutes < 10) {
            formattedMinutes = `0${d.getMinutes()}`
        }
        if (formattedSeconds < 10) {
            formattedSeconds = `0${d.getSeconds()}`

        }
        let currentDate = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()} at ${d.getHours()}:${formattedMinutes}:${formattedSeconds}`;
        return currentDate;
    }

    let createMoment = () => {
        return moment().format('D MMMM YYYY');
    }
    let createMomentDay = () => {
        return moment().format('D');
    }

  return {
    addTodo,
    getAllTodos,
    getCurrentTodo,
    editTodo,
    checkTodo,
    deleteTodo,
    addBoard,
    getAllBoards,
    getCurrentBoard,
    getBoardFromTodo,
    // getAllProjects,
    // getCurrentProject,
    getCreatedTodos,
    getCompletedTodos,
    addNotification,
    getAllMessages,
  };
};