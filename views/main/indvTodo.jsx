const React = require("react");
const DefaultLayout = require('../layouts/default');
const TweetBlock = require('../components/userTweetBlock');


class Home extends React.Component {
  render() {

    let headerTitle = 'Todo | Plannr';
    let todo = this.props.todo;

    let editURL = `/todos/${todo.id}?_method=PUT`
    let deleteURL = `/todos/${todo.id}?_method=DELETE`
    let user = this.props.user

    let currentQuadrant = '';
    let quadrantDesc = ['Do First', 'Schedule', 'Delegate', "Do Last"];
    for (let i=0; i<quadrantDesc.length; i++) {
        if ( todo.quadrant == (i+1)) {
            currentQuadrant = quadrantDesc[i];
        }
    }

    let editedTodoTime = '';
    if (todo.edited_date) {
        editedTodoTime = `Last Modified: ${todo.edited_date}`
    }
    let completedTodoTime = '';
    if (todo.completed) {
        completedTodoTime = `Completed on: ${todo.completed_date}`
    }

    return (

      <DefaultLayout title={headerTitle} user={user}>

        <form method="POST" action={editURL}>
            <p>Title</p>
            <input id="input-title" name = "title" defaultValue = {todo.title}/>
            <p>Description</p>
            <textarea id="input-desc" name = "description" defaultValue = {todo.description}/>
            <br/>
            <p>Current Priority: {currentQuadrant}</p>
            <p>Set Priority:</p>
            <select name="quadrant">
                <option value="1">Do First</option>
                <option value="2">Schedule</option>
                <option value="3">Delegate</option>
                <option value="4">Do Last</option>
            </select>
            <br/>
            <br/>
            <p>Created: {todo.created_date}</p>
            <p>{editedTodoTime}</p>
            <p>{completedTodoTime}</p>

            <button>Edit Todo</button>
        </form>

        <form method="POST" action={deleteURL}>
            <button>Delete Todo</button>
        </form>

      </DefaultLayout>
    );

  }
}

module.exports = Home;