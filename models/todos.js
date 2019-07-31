const sha256 = require('js-sha256');

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */

module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    let createTodo = (newTodo, callback) => {

        let queryString = `INSERT INTO todos (title, description, quadrant, user_id, category) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        let values = [ newTodo.title, newTodo.description, newTodo.quadrant, newTodo.user_id, newTodo.category ];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            console.log('result of adding a new todo: ~~~~~~~~~~~~~~~~~~')
            console.table(queryResult);
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

    let editTodo = () => {

    }

    let deleteTodo = () => {

    }

      return {
        createTodo,
        editTodo,
        deleteTodo,
  };
};