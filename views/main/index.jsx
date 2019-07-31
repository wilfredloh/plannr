const React = require('react');
const FrontLayout = require('../layouts/frontpage');

class Index extends React.Component {
  render() {

    let headerTitle = "Plannr: Where Dreams Become Reality";

    let loginURL = `/login`;
    let registerURL = `/register`;

    return (

      <FrontLayout title={headerTitle}>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
        <h1>Plannr: Plan for Anything</h1>
        <h3>Plannr is the only productivity app you need to *actually* get things done.</h3>
        <form method="POST" action={loginURL}>
            <p>Name:</p>
            <input type={"text"} name={"name"} required/>
            <p>Password:</p>
            <input type={"text"} name={"password"} required/>
            <br/>
            <br/>
            <input type="submit" value="Login"/>
        </form>
            <br/>
            <br/>
        <h5>Sign up in seconds</h5>
        <form action={registerURL}>
            <input type="submit" value="Sign up"/>
        </form>

      </FrontLayout>
    );
  }
}

module.exports = Index;