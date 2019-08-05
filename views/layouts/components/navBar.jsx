const React = require('react');

class NavBar extends React.Component {
  render() {

    let user = this.props.user;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/home">
            <img src="/css/images/plannr.png" width="auto" height="28" className="d-inline-block align-top" alt="logo"/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/boards">Boards</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/stats">Stats</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/howto">Getting Started</a>
              </li>
            </ul>

            <div className="btn-group menu1">
              <button type="button" className="btn btn-light dropdown" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                {user.name}
              </button>
              <div className="dropdown-menu dropdown-menu-lg-right ">
                <a className="dropdown-item" href="/boards">Manage Boards</a>
                <form id="logout" method="POST" action="/logout">
                    <button className="dropdown-item" type="submit">Sign Out</button>
                </form>
              </div>
            </div>
            <div className="menu2">
                <a className="dropdown-item" href="/boards">Manage Boards</a>
                <form id="logout" method="POST" action="/logout">
                    <button className="dropdown-item" type="submit">Sign Out</button>
                </form>
            </div>
          </div>
        </nav>
    );
  }
}

module.exports = NavBar;

                    // <a href="javascript: logout()">Sign Out</a>