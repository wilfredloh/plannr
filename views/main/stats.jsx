const React = require("react");
const DefaultLayout = require('../layouts/default');


class Home extends React.Component {
  render() {

    let headerTitle = 'How To | Plannr';
    let user = this.props.user;
    let week = this.props.week;
    let productivity = `${Math.floor((week.completed)/(week.created)*100)}%`

    let chartDiv = '';
    let stats = 'No stats to show!';

    if (week.created || week.completed) {
       chartDiv = <div id="columnchart_material"></div>
       stats =
        <div className="weekly-stats">
           <div className="week-card"><h2>{week.created}</h2><p>new todos created</p></div>
           <div className="week-card"><h2>{week.completed}</h2><p>todos completed</p></div>
           <div className="week-card"><h2>{productivity}</h2><p>productive</p></div>
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