const React = require('react');

class NavBarIntro extends React.Component {
  render() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/index">
            <img src="/css/images/plannr.png" width="auto" height="28" className="d-inline-block align-top" alt="logo"/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
                {/*     TO INSERT NEW TABS WHEN FEATURES EXPAND     */}
            </ul>
            <a href="/login">
                <button class="btn btn-light">Sign In</button>
            </a>
            <a href="/register">
                <button class="btn btn-primary">Create Account</button>
            </a>
          </div>
        </nav>
    );
  }
}

module.exports = NavBarIntro;