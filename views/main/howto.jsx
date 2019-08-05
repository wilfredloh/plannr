const React = require("react");
const DefaultLayout = require('../layouts/default');


class Home extends React.Component {
  render() {

    let headerTitle = 'How To | Plannr';
    let user = this.props.user;

    let creditURL = `https://blog.trello.com/eisenhower-matrix-productivity-tool-trello-board?source=post_page`;

    return (

      <DefaultLayout title={headerTitle} user={user}>

      <h3>Getting Started</h3>


<div class="howto-learn">
    <ol>
        <h4>"Important” and “Urgent” tasks</h4>
        <p>These receive a priority level of 1 and should be your primary focus to complete.</p>
        <h4>“Important”, but “Not Urgent” tasks</h4>
        <p>These are the long-term goals and tasks that you are important to you personal and professional development, but don’t have a firm deadline.</p>
        <h4>“Not Important”, but “Urgent” tasks</h4>
        <p>These tasks are the ones you can delegate or schedule to complete after your 1st quadrant tasks are completed.</p>
        <h4>“Not Important” and “Not Urgent” tasks</h4>
        <p>These tasks are placed in the 4th quadrant ones you put to wayside and should eliminate. Do you really need to binge-watch Season 1 of This Is Us or could that time be better used to work on your 2nd quadrant tasks, such as reading one new book per month?</p>
    </ol>
    <img src="https://blog.trello.com/hs-fs/hubfs/Imported_Blog_Media/eisenhower-box2-654x576.jpg?width=654&name=eisenhower-box2-654x576.jpg"/>
</div>
        <a href={creditURL}>Credits</a>

      </DefaultLayout>
    );

  }
}

module.exports = Home;