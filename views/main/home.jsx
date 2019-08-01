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

    if (this.props.todos === null) {

    } else {
        let todosQ1 = this.props.todos.q1;
        let todosQ2 = this.props.todos.q2;
        let todosQ3 = this.props.todos.q3;
        let todosQ4 = this.props.todos.q4;

        let createList = (array) => {
            return (
                array.map((todo) => {
                    let todoUrl = `/todos/${todo.id}`
                    // let input = '';
                    // let linkTag = '';

                    // if (todo.completed) {
                    //     input = <input type="checkbox" defaultValue={todo.id} defaultChecked/>
                    //     linkTag = <a href={todoUrl} className="checked-todo"> {todo.title}</a>
                    // }
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

                    // return(
                    //     <li>
                    //         {input}
                    //         {linkTag}
                    //     </li>
                    // )
                })
            )
        }

        if (todosQ1.length > 0){

            todosArr1 = createList(todosQ1);

            // todosArr1 = todosQ1.map((todo) => {
            //     let todoUrl = `/todos/${todo.id}`
            //     let input = <input type="checkbox" defaultValue={todo.id}/>
            //     let linkTag = <a href={todoUrl}> {todo.title}</a>

            //     if (todo.completed) {
            //         input = <input type="checkbox" defaultValue={todo.id} defaultChecked/>
            //         linkTag = <a href={todoUrl} className="checked-todo"> {todo.title}</a>
            //     }
            //     return(
            //         <li>
            //             {input}
            //             {linkTag}
            //         </li>
            //     )
            // })
        }




        if (todosQ2.length > 0){
            todosArr2 = createList(todosQ2);

            // todosArr2 = todosQ2.map((todo) => {
            //     let todoUrl = `/todos/${todo.id}`
            //     let input = <input type="checkbox" defaultValue={todo.id}/>
            //     let linkTag = <a href={todoUrl}> {todo.title}</a>

            //     if (todo.completed) {
            //         input = <input type="checkbox" defaultValue={todo.id} defaultChecked/>
            //         linkTag = <a href={todoUrl} className="checked-todo"> {todo.title}</a>
            //     }
            //     return(
            //         <li>
            //             {input}
            //             {linkTag}
            //         </li>
            //     )
            // })
        }

        if (todosQ3.length > 0){
            todosArr3 = createList(todosQ3);

            // todosArr3 = todosQ3.map((todo) => {
            //     let todoUrl = `/todos/${todo.id}`
            //     let input = <input type="checkbox" defaultValue={todo.id}/>
            //     let linkTag = <a href={todoUrl}> {todo.title}</a>

            //     if (todo.completed) {
            //         input = <input type="checkbox" defaultValue={todo.id} defaultChecked/>
            //         linkTag = <a href={todoUrl} className="checked-todo"> {todo.title}</a>
            //     }
            //     return(
            //         <li>
            //             {input}
            //             {linkTag}
            //         </li>
            //     )
            // })
        }

        if (todosQ4.length > 0){
            todosArr4 = createList(todosQ4);

            // todosArr4 = todosQ4.map((todo) => {
            //     let todoUrl = `/todos/${todo.id}`
            //     let input = <input type="checkbox" defaultValue={todo.id}/>
            //     let linkTag = <a href={todoUrl}> {todo.title}</a>

            //     if (todo.completed) {
            //         input = <input type="checkbox" defaultValue={todo.id} defaultChecked/>
            //         linkTag = <a href={todoUrl} className="checked-todo"> {todo.title}</a>
            //     }
            //     return(
            //         <li>
            //             {input}
            //             {linkTag}
            //         </li>
            //     )
            // })
        }
    }

    // let user = this.props.user;

    return (

      <DefaultLayout title={headerTitle} >
        <p> Hello! </p>

        <button>Current</button>
        <button>Completed</button>

        <div className="quadrant-container">
            <div className="quadrant-duo">
                <div className="quadrants" data-id="1">Q1
                    <button className="button"> + </button>
                    <ul className="big-list">
                        {todosArr1}
                    </ul>
                </div>
                <div className="quadrants" data-id="2">Q2
                    <button className="button"> + </button>
                    <ul className="big-list">
                        {todosArr2}
                    </ul>
                </div>
            </div>

            <div className="quadrant-duo">
                <div className="quadrants" data-id="3">Q3
                    <button className="button"> + </button>
                    <ul className="big-list">
                        {todosArr3}
                    </ul>
                </div>
                <div className="quadrants" data-id="4">Q4
                    <button className="button"> + </button>
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