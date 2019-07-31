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
        let values = [ newTodo.title, newTodo.description, newTodo.quadrant, userId, newTodo.category ];

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

    // let getTodo = (userId, callback) => {

    //     let queryString1 = 'SELECT * FROM todos WHERE user_id = $1 AND quadrant = 1';
    //     let queryString2 = 'SELECT * FROM todos WHERE user_id = $1 AND quadrant = 2';
    //     let queryString3 = 'SELECT * FROM todos WHERE user_id = $1 AND quadrant = 3';
    //     let queryString4 = 'SELECT * FROM todos WHERE user_id = $1 AND quadrant = 4';
    //     let values = [userId];

    //     let obj = {
    //         q1 : null,
    //         q2 : null,
    //         q3 : null,
    //         q4 : null
    //     }

    //     console.log('in GET TODO ~~~~~~~~~~~~~~~~~~~~~~~`')
    //     dbPoolInstance.query(queryString1, values, (error, q1) => {
    //         if (q1) {
    //             obj.q1 = q1.rows
    //         }
    //         console.log('success in getting q1!');

    //         dbPoolInstance.query(queryString2, values, (error, q2) => {
    //             if (q2) {
    //                 obj.q2 = q2.rows
    //             }
    //             console.log('success in getting q2!');

    //             dbPoolInstance.query(queryString3, values, (error, q3) => {
    //                 if (q3) {
    //                     obj.q3 = q3.rows
    //                 }
    //                 console.log('success in getting q3!');

    //                 dbPoolInstance.query(queryString4, values, (error, q4) => {
    //                     if (q4) {
    //                         obj.q4 = q4.rows
    //                     }
    //                     console.log('success in getting q4!');
    //                     console.log('obj:' , obj);
    //                     callback(null, obj);
    //                 });
    //             });
    //         });
    //     });
    // };

    let getTodo = (userId, callback) => {

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

    let editTodo = () => {

    }

    let deleteTodo = () => {

    }

      return {
        addTodo,
        getTodo,
        editTodo,
        deleteTodo,
  };
};