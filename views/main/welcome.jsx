const React = require("react");
const DefaultLayout = require('../layouts/default');
const CreateBoardBlock = require('../components/createBoardBlock')

class Welcome extends React.Component {
  render() {

    let user = this.props.user;
    let headerTitle = `Welcome ${user.name} | Plannr`;

    return (

      <DefaultLayout title={headerTitle} user={user}>

        <br/>
        <br/>
        <h1> Welcome to Plannr, {user.name}.</h1>
        <br/>
        <br/>
        <h4> Here's how you can get started : </h4>
        <br/>
        <br/>

        <div className="welcome-container">
            <div className="welcome-block-one">
                <h2>Getting Started</h2>
                <br/>
                <br/>
                <a href="/howto"><button type="button" className="btn btn-info">Read Starter Guide</button></a>

            </div>
            <div className="welcome-block-two">
                <h2>Create Your First Board</h2>
                <br/>
                <br/>
                <CreateBoardBlock/>
            </div>
        </div>





      </DefaultLayout>
    );

  }
}

module.exports = Welcome;