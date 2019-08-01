const React = require("react");
const DefaultLayout = require('../layouts/default');
const TweetBlock = require('../components/userTweetBlock');


class Home extends React.Component {
  render() {

    let headerTitle = 'Todo | Plannr';
    let todo = this.props.todo;

    let editURL = `/todos/${todo.id}?_method=PUT`
    let deleteURL = `/todos/${todo.id}?_method=DELETE`

    return (

      <DefaultLayout title={headerTitle} >
        <p> Hello! </p>

        <form method="POST" action={editURL}>
            <p>Title</p>
            <input id="input-title" name = {"title"} defaultValue = {todo.title}/>
            <p>Description</p>
            <textarea id="input-desc" name = {"description"} defaultValue = {todo.description}/>
            <br/>
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