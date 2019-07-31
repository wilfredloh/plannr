const React = require("react");
const DefaultLayout = require('../layouts/default');
const TweetBlock = require('../components/userTweetBlock');


class Home extends React.Component {
  render() {

    let headerTitle = 'Home | Plannr';
    let todosQ1 = this.props.todos.q1;
    let todosQ2 = this.props.todos.q2;
    let todosQ3 = this.props.todos.q3;
    let todosQ4 = this.props.todos.q4;

    let todosArr1 = <div>Empty</div>
    let todosArr2 = <div>Empty</div>
    let todosArr3 = <div>Empty</div>
    let todosArr4 = <div>Empty</div>

    if (todosQ1.length > 0){
        todosArr1 = todosQ1.map((todo) => {
            let todoUrl = `/todos/${todo.id}`
            return(
                <div>
                    <input type="checkbox" value={1}/><a href={todoUrl}> {todo.title}</a>
                </div>
            )
        })
    }

    if (todosQ2.length > 0){
        todosArr2 = todosQ2.map((todo) => {
            let todoUrl = `/todos/${todo.id}`
            return(
                <div>
                    <input type="checkbox" value={1}/><a href={todoUrl}> {todo.title}</a>
                </div>
            )
        })
    }

    if (todosQ3.length > 0){
        todosArr3 = todosQ3.map((todo) => {
            let todoUrl = `/todos/${todo.id}`
            return(
                <div>
                    <input type="checkbox" value={1}/><a href={todoUrl}> {todo.title}</a>
                </div>
            )
        })
    }

    if (todosQ4.length > 0){
        todosArr4 = todosQ4.map((todo) => {
            let todoUrl = `/todos/${todo.id}`
            return(
                <div>
                    <input type="checkbox" value={1}/><a href={todoUrl}> {todo.title}</a>
                </div>
            )
        })
    }

    // let user = this.props.user;


    return (

      <DefaultLayout title={headerTitle} >
        <p> Hello! </p>

        <div id="q1" data-id="1">Q1
            <button id="button1">add</button>
            <div>
                {todosArr1}
            </div>
        </div>
        <div>Q2
            <a href="/todos/2/new"><button id="button2">add</button></a>
            <div>
                {todosArr2}
            </div>
        </div>
        <div>Q3
            <a href="/todos/3/new"><button id="button3">add</button></a>
            <div>
                {todosArr3}
            </div>
        </div>
        <div>Q4
            <a href="/todos/4/new"><button id="button4">add</button></a>
            <div>
                {todosArr4}
            </div>
        </div>

      </DefaultLayout>
    );

  }
}

module.exports = Home;