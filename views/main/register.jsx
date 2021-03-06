const React = require('react');
const FrontLayout = require('../layouts/frontpage');

class Register extends React.Component {
  render() {

    let headerTitle = "Create Account | Plannr";

    let registerURL = `/register`;
    let loginURL = `/login`;


    return (

      <FrontLayout title={headerTitle}>

        <h1>Create your account</h1>

        <form method="POST" action={registerURL}>
            <p>Name:</p>
            <input type={"text"} name={"name"} required/>
            <p>Password:</p>
            <input type={"password"} name={"password"} required/>
            <p>Email:</p>
            <input type={"text"} name={"email"} required/>

            <br/>
            <br/>
            <button type="submit" className="btn btn-outline-primary">Sign up</button>
        </form>
        <br/>
        <p>Already have an account? Login instead</p>
        <form action={loginURL}>
            <button type="submit" className="btn btn-outline-dark">Login</button>
        </form>

      </FrontLayout>
    );
  }
}

module.exports = Register;