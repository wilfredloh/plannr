const React = require("react");
const DefaultLayout = require('../layouts/default');
const TweetBlock = require('../components/userTweetBlock');


class Home extends React.Component {
  render() {

    let headerTitle = 'Home | Plannr';
    // let user = this.props.user;


    return (

      <DefaultLayout title={headerTitle} >
        <p> Hello! </p>

        <h4>Todos go here</h4>

        <div>Q1
            <p>todo goes here</p>
            <a href="/todos/new"><button>add</button></a>
        </div>
        <div>Q2
            <p>todo goes here</p>
            <button>add</button>
        </div>
        <div>Q3
            <p>todo goes here</p>
            <button>add</button>
        </div>
        <div>Q4
            <p>todo goes here</p>
            <button>add</button>
        </div>

      </DefaultLayout>
    );

  }
}

module.exports = Home;