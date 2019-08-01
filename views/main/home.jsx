const React = require("react");
const DefaultLayout = require('../layouts/default');
const TweetBlock = require('../components/userTweetBlock');


class Home extends React.Component {
  render() {

    let headerTitle = 'Home | Plannr';

    let todosArr1 = '';
    let todosArr2 = '';
    let todosArr3 = '';
    let todosArr4 = '';
    let button;

    let query = this.props.query;

    if (this.props.todos === null) {

    } else {
        let todosQ1 = this.props.todos.q1;
        let todosQ2 = this.props.todos.q2;
        let todosQ3 = this.props.todos.q3;
        let todosQ4 = this.props.todos.q4;


        let createCurrentList = (array) => {
            return (
                array.map((todo) => {
                    let todoUrl = `/todos/${todo.id}`
                    if (!todo.completed) {
                        let input = <input type="checkbox" defaultValue={todo.id}/>
                        let linkTag = <a href={todoUrl}> {todo.title}</a>
                        return(
                            <li>
                                {input}
                                {linkTag}
                            </li>
                        )
                    }
                })
            )
        }

        let createCompletedList = (array) => {
            return (
                array.map((todo) => {
                    let todoUrl = `/todos/${todo.id}`
                    if (todo.completed) {
                        let input = <input type="checkbox" defaultValue={todo.id} defaultChecked/>
                        let linkTag = <a href={todoUrl} className="checked-todo"> {todo.title}</a>
                        return(
                            <li>
                                {input}
                                {linkTag}
                            </li>
                        )
                    }
                })
            )
        }

        if (todosQ1.length > 0){
            if (query.display === 'completed') {
                todosArr1 = createCompletedList(todosQ1);
            } else {
                todosArr1 = createCurrentList(todosQ1);
            }
        }

        if (todosQ2.length > 0){
            if (query.display === 'completed') {
                todosArr2 = createCompletedList(todosQ2);
            } else {
                todosArr2 = createCurrentList(todosQ2);
            }
        }

        if (todosQ3.length > 0){
            if (query.display === 'completed') {
                todosArr3 = createCompletedList(todosQ3);
            } else {
                todosArr3 = createCurrentList(todosQ3);
            }
        }

        if (todosQ4.length > 0){
            if (query.display === 'completed') {
                todosArr4 = createCompletedList(todosQ4);
            } else {
                todosArr4 = createCurrentList(todosQ4);
            }
        }
    }

    if (query.display === 'completed') {
        // do nothing
    } else {
        button = <button className="button"> + </button>;
    }

    return (

      <DefaultLayout title={headerTitle} >
        <p> WELCOMEEEEE!!!!! </p>

        <a href='/home?display=current'><button>Current</button></a>
        <a href='/home?display=completed'><button>Completed</button></a>

        <div className="quadrant-container">
            <div className="quadrant-duo">
                <div className="quadrants" data-id="1">Q1
                    {button}
                    <ul className="big-list">
                        {todosArr1}
                    </ul>
                </div>
                <div className="quadrants" data-id="2">Q2
                    {button}
                    <ul className="big-list">
                        {todosArr2}
                    </ul>
                </div>
            </div>

            <div className="quadrant-duo">
                <div className="quadrants" data-id="3">Q3
                    {button}
                    <ul className="big-list">
                        {todosArr3}
                    </ul>
                </div>
                <div className="quadrants" data-id="4">Q4
                    {button}
                    <ul className="big-list">
                        {todosArr4}
                    </ul>
                </div>
            </div>
        </div>

      </DefaultLayout>
    );

  }
}

module.exports = Home;