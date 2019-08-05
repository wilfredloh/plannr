const React = require("react");
const DefaultLayout = require('../layouts/default');
const CreateBoardBlock = require('../components/createBoardBlock')

class Welcome extends React.Component {
  render() {

    let user = this.props.user;
    let headerTitle = `Welcome ${user.name} | Plannr`;

    return (

      <DefaultLayout title={headerTitle} user={user}>

        <h1> Welcome to Plannr, {user.name}.</h1>
        <p> Here's how you can get started: </p>

        <div className="home">
            <h1 className="header-text"></h1>
            <div className="home-artists">
                <a href="/boards/create"className="home-p">Create Your First Board</a>
            </div>
            <div className="home-songs">
                    <a href="/howto"className="home-p">Getting Started</a>
            </div>
        </div>

        <CreateBoardBlock/>

      </DefaultLayout>
    );

  }
}

module.exports = Welcome;