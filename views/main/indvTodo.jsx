const React = require("react");
const DefaultLayout = require('../layouts/default');


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
            <h2>Task</h2>
            <br/>
            <input id="input-title" name = "title" defaultValue = {todo.title}/>
            <p>Description</p>
            <textarea id="input-desc" name = "description" defaultValue = {todo.description}/>
            <br/>
            <p>Current Priority: <strong>{currentQuadrant}</strong></p>
            <p><em>Set Priority:</em></p>
            <select name="quadrant">
                <option value="1">Do First</option>
                <option value="2">Schedule</option>
                <option value="3">Delegate</option>
                <option value="4">Don't Do</option>
            </select>
            <br/>
            <br/>
            <p>Created: {todo.created_date}</p>
            <p>{editedTodoTime}</p>
            <p>{completedTodoTime}</p>

            <button className="btn btn-outline-dark">Make Changes</button>
        </form>
        <br/>
        <form method="POST" action={deleteURL}>
            <button className="btn btn-outline-danger">Delete Task</button>
        </form>

      </DefaultLayout>
    );

  }
}

module.exports = Home;