const React = require('react');
const FrontLayout = require('../layouts/frontpage');

class Login extends React.Component {
  render() {

    let headerTitle = "Login | Plannr";

    let loginURL = `/login`;
    let registerURL = `/register`;

    return (

      <FrontLayout title={headerTitle}>

        <h1>Login</h1>

        <form method="POST" action={loginURL}>
            <p>Name:</p>
            <input type={"text"} name={"name"} required/>
            <p>Password:</p>
            <input type={"password"} name={"password"} required/>
            <br/>
            <br/>
            <button type="submit" className="btn btn-outline-dark">Login</button>
        </form>
        <br/>
        <p>New to Plannr?</p>
        <form action={registerURL}>
            <button type="submit" className="btn btn-outline-primary">Sign up now</button>
        </form>

      </FrontLayout>
    );
  }
}

module.exports = Login;