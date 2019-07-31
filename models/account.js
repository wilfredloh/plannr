const sha256 = require('js-sha256');

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    let getUserUsingName = (username, callback) => {

        let queryString = 'SELECT * FROM users WHERE users.name = $1';
        let values = [username];

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

    let getUserUsingId = (userId, callback) => {

        let queryString = 'SELECT * FROM users WHERE users.id = $1';
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

    let checkUserLogin = (username, password, callback) => {

        let queryString = 'SELECT * FROM users WHERE name = $1 AND password = $2';
        let values = [username, password];

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

    let createUser = (username, password, callback) => {

        let queryString = `INSERT INTO users (name, password) VALUES ($1, $2) RETURNING id, name`;
        let values = [ username, password ];

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

  return {
    getUserUsingId,
    getUserUsingName,
    checkUserLogin,
    createUser,
  };
};