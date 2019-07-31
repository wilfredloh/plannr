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
                    <a href={todoUrl}><p>{todo.title}</p></a>
                </div>
            )
        })
    }

    if (todosQ2.length > 0){
        todosArr2 = todosQ2.map((todo) => {
            let todoUrl = `/todos/${todo.id}`
            return(
                <div>
                    <a href={todoUrl}><p>{todo.title}</p></a>
                </div>
            )
        })
    }

    if (todosQ3.length > 0){
        todosArr3 = todosQ3.map((todo) => {
            let todoUrl = `/todos/${todo.id}`
            return(
                <div>
                    <a href={todoUrl}><p>{todo.title}</p></a>
                </div>
            )
        })
    }

    if (todosQ4.length > 0){
        todosArr4 = todosQ4.map((todo) => {
            let todoUrl = `/todos/${todo.id}`
            return(
                <div>
                    <a href={todoUrl}><p>{todo.title}</p></a>
                </div>
            )
        })
    }

    // let user = this.props.user;


    return (

      <DefaultLayout title={headerTitle} >
        <p> Hello! </p>

        <div>Q1
            <p>todo goes here</p>
            <div>
                {todosArr1}
            </div>
            <a href="/todos/1/new"><button>add</button></a>
        </div>
        <div>Q2
            <div>
                {todosArr2}
            </div>
            <a href="/todos/2/new"><button>add</button></a>

        </div>
        <div>Q3
            <div>
                {todosArr3}
            </div>
            <a href="/todos/3/new"><button>add</button></a>

        </div>
        <div>Q4
            <div>
                {todosArr4}
            </div>
            <a href="/todos/4/new"><button>add</button></a>

        </div>

      </DefaultLayout>
    );

  }
}

module.exports = Home;