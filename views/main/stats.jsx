const React = require("react");
const DefaultLayout = require('../layouts/default');


class Home extends React.Component {
  render() {

    let headerTitle = 'How To | Plannr';
    let user = this.props.user;

    return (

      <DefaultLayout title={headerTitle} user={user}>

        <p>
            Todos created on:
        </p>

       <div id="chart_div"></div>


      </DefaultLayout>
    );

  }
}

module.exports = Home;