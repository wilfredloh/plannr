const React = require("react");
const DefaultLayout = require('../layouts/default');
const CreateBoardBlock = require('../components/createBoardBlock')

class Welcome extends React.Component {
  render() {

    let user = this.props.user;
    let headerTitle = `Welcome ${user.name} | Plannr`;

    return (

      <DefaultLayout title={headerTitle} user={user}>

        <h1>{user.name}'s Dashboard</h1>
        <p> Here's how you can get started: </p>

        <div className="home">
            <h1 className="header-text"></h1>
            <div className="home-artists">
                <a href="/boards/create"className="home-p">show all todos</a>
            </div>
            <div className="home-songs">
                    <a href="/howto"className="home-p">Getting Started</a>
            </div>
        </div>

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
                                <p class="category">Master the basics</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="header">
                                <h4 class="title"><a href="/stats">See Stats</a></h4>
                                <p class="category">See activity</p>
                            </div>
                            <div class="content">
                                <div id="chartHours" class="ct-chart"></div>
                            </div>
                        </div>
                    </div>

            {/* second column 3 */}
                    <div class="col-md-3">
                    <div class="card">
                            <div class="header">
                                <h4 class="title"><a href="/boards">See Boards</a></h4>
                            </div>
                            <div class="footer">
                                <p>Recent Boards</p>
                                <hr/>
                                <p>Board1</p>
                                <hr/>
                                <p>Board2</p>
                                <hr/>
                                <p>Board3</p>
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
                                <div class="table-full-width">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td><li>Sign contract for "What are conference organizers afraid of?"</li></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
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