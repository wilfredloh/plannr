const React = require("react");
const DefaultLayout = require('../layouts/default');


class Home extends React.Component {
  render() {

    let headerTitle = 'How To | Plannr';
    let user = this.props.user;
    let week = this.props.week;

    return (

      <DefaultLayout title={headerTitle} user={user}>

        <p>
            {user.name}'s Weekly Stats
        </p>

       {/*<div id="chart_div"></div>*/}
       <div id="columnchart_material"></div>
       <p> This week </p>
       <p>{week.created} new todos created</p>
       <p>{week.completed} todos completed</p>


      </DefaultLayout>
    );

  }
}

module.exports = Home;