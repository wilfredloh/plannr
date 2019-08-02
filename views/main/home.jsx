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
    let addButton;
    let currentButton = <button className="toggleViewButton">Current</button>;
    let completeButton = <button className="toggleViewButton">Completed</button>;

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
                        let linkTag = <a href={todoUrl} className="todos"> {todo.title}</a>
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
                        let linkTag = <a href={todoUrl} className="checked-todo todos"> {todo.title}</a>
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
        completeButton = <button className="toggleViewButton-focus">Completed</button>;
    } else {
        addButton = <button className="addNewTaskButton"> + </button>;
        currentButton = <button className="toggleViewButton-focus">Current</button>;
    }

    return (
      <DefaultLayout title={headerTitle} >
        <div className="welcome-title"> Welcome, {this.props.user.name} </div>

        <a href='/home?display=current'>{currentButton}</a>
        <a href='/home?display=completed'>{completeButton}</a>

        <div className="quadrant-container">
            <div className="quadrant-duo">
                <div className="quadrants" data-id="1">
                    <div className="quadrant-head-container">
                        <span className="quadrant-header">Do First</span>
                        <span>{addButton}</span>
                    </div>
                    <ul className="big-list">
                        {todosArr1}
                    </ul>
                </div>
                <div className="quadrants" data-id="2">
                    <div className="quadrant-head-container">
                        <span className="quadrant-header">Schedule</span>
                        <span>{addButton}</span>
                    </div>
                    <ul className="big-list">
                        {todosArr2}
                    </ul>
                </div>
            </div>

            <div className="quadrant-duo">
                <div className="quadrants" data-id="3">
                    <div className="quadrant-head-container">
                        <span className="quadrant-header">Delegate</span>
                        <span>{addButton}</span>
                    </div>
                    <ul className="big-list">
                        {todosArr3}
                    </ul>
                </div>
                <div className="quadrants" data-id="4">
                    <div className="quadrant-head-container">
                        <span className="quadrant-header">Do Last</span>
                        <span>{addButton}</span>
                    </div>
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