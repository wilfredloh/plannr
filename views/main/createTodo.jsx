const React = require("react");
const DefaultLayout = require('../layouts/default');
const TweetBlock = require('../components/userTweetBlock');


class Home extends React.Component {
  render() {

    let headerTitle = 'New Todo | Plannr';
    let quadrant = this.props.quadrant;


    return (

      <DefaultLayout title={headerTitle} >
        <p> Hello! </p>

        <h4>Create new todo</h4>

        <form method="POST" action="/todos">
            <p>Header</p>
            <input name="title"/>
            <p>Description</p>
            <input name="description"/>
            <p>Quadrant</p>
            <input name="quadrant" value={quadrant}/>
            <br/>
            <button>Submit</button>
        </form>


      </DefaultLayout>
    );

  }
}

module.exports = Home;