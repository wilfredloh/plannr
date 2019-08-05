const React = require("react");
const DefaultLayout = require('../layouts/default');
const CreateBoardBlock = require('../components/createBoardBlock')

class Welcome extends React.Component {
  render() {

    let user = this.props.user;
    let headerTitle = `Welcome ${user.name} | Plannr`;
    let boards = this.props.boards;
    let messages = this.props.messages;

    let boardsArr = '';
    let messagesArr = '';
    if (boards) {
        boardsArr = boards.map((board) => {
            let boardURL = `/board/${board.board_id}`
            return (
                <div>
                    <a href={boardURL}>{board.title}</a>
                    <hr/>
                </div>
            )
        });
    }
    if (messages) {
        messagesArr = messages.map( (message) => {
            return (
                <div>
                    <p>{message.title} | {message.created_time}</p>
                    <hr/>
                </div>
            )
        });
    }

    return (

      <DefaultLayout title={headerTitle} user={user}>

        <h1>{user.name}'s Dashboard</h1>

        <div class="content">
            <div class="container-fluid">
                <div class="row">

            {/* first column 3 */}
                    <div class="col-md-3">
                        <div class="card">
                            <div class="header">
                                <h4 class="title">Create New Board</h4>
                                <CreateBoardBlock/>
                            </div>
                        </div>
                        <div class="card">
                            <div class="header">
                                <h4 class="title"><a href="/howto">Getting Started</a></h4>
                                <p class="category">Find out easy ways on how to quickly get started or master the basics to become a productivity guru.</p>
                            </div>
                        </div>
                        <div class="card">
                            <a href="/stats">
                                <div class="header">
                                    <h4 class="title"><a href="/stats">See Stats</a></h4>
                                    <p class="category">Monitor your activity with data visualization charts.</p>
                                </div>
                            </a>
                        </div>
                    </div>

            {/* second column 3 */}
                    <div class="col-md-3">
                    <div class="card">
                            <div class="header">
                                <h4 class="title"><a href="/boards">All Boards</a></h4>
                            </div>
                            <div class="footer">
                                <p>Recent Boards</p>
                                <hr/>
                                {boardsArr}
                            </div>
                        </div>

                    </div>

            {/* third column 6 */}
                    <div class="col-md-6">
                        <div class="card ">
                            <div class="header">
                                <h4 class="title">Recent Activity</h4>
                            </div>

                            <div class="content">
                                <hr/>
                                {messagesArr}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer class="footer">
            <div class="container-fluid">
                <p class="copyright">
                    &copy; <script>document.write(new Date().getFullYear())</script> <a href="">Plannr</a>, the Efficiency Planner.
                </p>
            </div>
        </footer>

      </DefaultLayout>
    );

  }
}

module.exports = Welcome;