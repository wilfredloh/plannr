const sha256 = require('js-sha256');

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */

module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    let addTodo = (userId, newTodo, callback) => {

        let queryString = `INSERT INTO todos (title, description, quadrant, user_id, category) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        let values = [ newTodo.title, newTodo.desc, newTodo.quadrant, userId, newTodo.category ];
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

    let getAllTodos = (userId, callback) => {

        let queryString = 'SELECT * FROM todos WHERE user_id = $1';
        let values = [userId];

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

        let queryString = 'UPDATE todos SET title = $1, description = $2 WHERE id = $3';
        let values = [ editedTodo.title, editedTodo.description, todoId ];

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

      return {
        addTodo,
        getAllTodos,
        getCurrentTodo,
        editTodo,
        deleteTodo,
  };
};