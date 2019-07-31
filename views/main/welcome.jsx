const React = require("react");
const FrontLayout = require('../layouts/frontpage');


class Welcome extends React.Component {
  render() {

    let user = this.props.user;
    let headerTitle = `Welcome ${user.name} | Plannr`;

    return (

      <FrontLayout title={headerTitle}>

        <h1> Welcome to Plannr, {user.name}.</h1>
        <p> Here's how you can get started: </p>

        <div className="home">
            <h1 className="header-text"></h1>
            <div className="home-artists">
                <a href="./artists"className="home-p">How to use </a>
            </div>
            <div className="home-songs">
                    <a href="./songs"className="home-p">Guide</a>
            </div>
            <div className="home-playlists">
                    <a href="./playlists"className="home-p">Hello</a>
            </div>
        </div>
        <a href="./home">Get started</a>


      </FrontLayout>
    );

  }
}

module.exports = Welcome;