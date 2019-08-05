const React = require("react");
const DefaultLayout = require('../layouts/default');


class Home extends React.Component {
  render() {

    let headerTitle = 'How To | Plannr';
    let user = this.props.user;
    let week = this.props.week;

    let chartDiv = '';
    let stats = 'No stats to show!';

    if (week.created || week.completed) {
       chartDiv = <div id="columnchart_material"></div>
       stats =
        <div>
           <p> This week </p>
           <p>{week.created} new todos created</p>
           <p>{week.completed} todos completed</p>
        </div>
    }

    return (

      <DefaultLayout title={headerTitle} user={user}>

        <p>
            {user.name}'s Weekly Stats
        </p>

       {/*<div id="chart_div"></div>*/}
       {chartDiv}
       {stats}

      </DefaultLayout>
    );

  }
}

module.exports = Home;