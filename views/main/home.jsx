const React = require("react");
const DefaultLayout = require('../layouts/default');
const TweetBlock = require('../components/userTweetBlock');


class Home extends React.Component {
  render() {

    let headerTitle = 'Home | Plannr';

    let todosArr1 = <div></div>
    let todosArr2 = <div></div>
    let todosArr3 = <div></div>
    let todosArr4 = <div></div>

    if (this.props.todos === null) {

    } else {
        let todosQ1 = this.props.todos.q1;
        let todosQ2 = this.props.todos.q2;
        let todosQ3 = this.props.todos.q3;
        let todosQ4 = this.props.todos.q4;

        if (todosQ1.length > 0){
            todosArr1 = todosQ1.map((todo) => {
                let todoUrl = `/todos/${todo.id}`
                return(
                    <div>
                        <input type="checkbox" defaultValue={1}/><a href={todoUrl}> {todo.title}</a>
                    </div>
                )
            })
        }

        if (todosQ2.length > 0){
            todosArr2 = todosQ2.map((todo) => {
                let todoUrl = `/todos/${todo.id}`
                return(
                    <div>
                        <input type="checkbox" defaultValue={1}/><a href={todoUrl}> {todo.title}</a>
                    </div>
                )
            })
        }

        if (todosQ3.length > 0){
            todosArr3 = todosQ3.map((todo) => {
                let todoUrl = `/todos/${todo.id}`
                return(
                    <div>
                        <input type="checkbox" defaultValue={1}/><a href={todoUrl}> {todo.title}</a>
                    </div>
                )
            })
        }

        if (todosQ4.length > 0){
            todosArr4 = todosQ4.map((todo) => {
                let todoUrl = `/todos/${todo.id}`
                return(
                    <div>
                        <input type="checkbox" defaultValue={1}/><a href={todoUrl}> {todo.title}</a>
                    </div>
                )
            })
        }
    }

    // let user = this.props.user;

    return (

      <DefaultLayout title={headerTitle} >
        <p> Hello! </p>

        <button>Current</button>
        <button>Completed</button>

        <div class="quadrant-container">
            <div class="quadrant-duo">
                <div class="quadrants" data-id="1">Q1
                    <button id="button1">add</button>
                    <div>
                        {todosArr1}
                    </div>
                </div>
                <div class="quadrants" data-id="2">Q2
                    <button id="button2">add</button>
                    <div>
                        {todosArr2}
                    </div>
                </div>
            </div>

            <div class="quadrant-duo">
                <div class="quadrants" data-id="3">Q3
                    <button id="button3">add</button>
                    <div>
                        {todosArr3}
                    </div>
                </div>
                <div class="quadrants" data-id="4">Q4
                    <button id="button4">add</button>
                    <div>
                        {todosArr4}
                    </div>
                </div>
            </div>
        </div>

      </DefaultLayout>
    );

  }
}

module.exports = Home;