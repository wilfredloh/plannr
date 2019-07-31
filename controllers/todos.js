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
                if (error) {
                    console.log("error in getting file", error);
                } else {
                    let dataSet = {
                        user : user
                    }
                    res.render('main/home', dataSet);
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
  };

}