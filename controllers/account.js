const sha256 = require('js-sha256');
const secret = 'secretpassword9090'


module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let showIndex = (req, res) => {

        if (req.cookies.loggedin) {
            res.redirect('/home');
        } else {
            res.render('main/index');
        }
    };

    let showRegister = (req, res) => {
      res.render('main/register');
    };

    let register = (req, res) => {

        let username = req.body.name;
        let password = sha256(req.body.password);

        db.account.getUserUsingName(username, (error, result) => {

            if (result) {
                res.send('Already got user la');
            } else {
                db.account.createUser(username, password, (error, user) => {
                    if (error) {
                        console.log("error in getting file", error);

                    } else {
                        let hashedCookie = sha256(user[0].id + 'userID' + secret);
                        res.cookie('user_id', user[0].id);
                        res.cookie('loggedin', hashedCookie);
                        let dataSet = {
                            user : user[0]
                        }
                        res.redirect('/welcome');
                    }
                });
            }
        });
    };

    let showLogin = (req, res) => {
      res.render('main/login');
    };

    let login = (req, res) => {
        let username = req.body.name;
        let password = sha256(req.body.password);

        db.account.getUserUsingName(username, (error, user) => {
            if (user) {
                db.account.checkUserLogin(username, password, (error, currentUser) => {
                    if (currentUser) {
                        let hashedCookie = sha256(currentUser[0].id + 'userID' + secret);
                        res.cookie('user_id', currentUser[0].id);
                        res.cookie('loggedin', hashedCookie);
                        res.redirect('/home');

                    } else {
                        console.log("error in getting file", error);
                        res.send('please use a valid password');
                    }
                });
            } else {
                console.log("error in getting file", error);
                res.send('please use a valid username');
            }
        });
    };

    let logout = (req, res) => {
      res.clearCookie('user_id');
      res.clearCookie('loggedin');
      res.redirect('/index');
    };

    let redirect = (req, res) => {
      res.redirect('/index');
    };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    showIndex,
    showRegister,
    register,
    showLogin,
    login,
    logout,
    redirect,
  };

}