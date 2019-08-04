const React = require("react");
const DefaultLayout = require('../layouts/default');


class Home extends React.Component {
  render() {

    let headerTitle = 'How To | Plannr';
    // let todo = this.props.todo;

    // let editURL = `/todos/${todo.id}?_method=PUT`
    // let deleteURL = `/todos/${todo.id}?_method=DELETE`

    let currentQuadrant = '';


    let editedTodoTime = '';


    return (

      <DefaultLayout title={headerTitle} >

        <p>
            https://blog.trello.com/eisenhower-matrix-productivity-tool-trello-board?source=post_page---------------------------
        </p>

      </DefaultLayout>
    );

  }
}

module.exports = Home;