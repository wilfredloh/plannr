const React = require("react");
const DefaultLayout = require('../layouts/default');


class Welcome extends React.Component {
  render() {

    let user = this.props.user;
    let headerTitle = `Welcome ${user.name} | Plannr`;

    return (

      <DefaultLayout title={headerTitle} user={user}>

        <h1> Welcome to Plannr, {user.name}.</h1>
        <p> Here's how you can get started: </p>

        <div className="home">
            <h1 className="header-text"></h1>
            <div className="home-artists">
                <a href="/boards/create"className="home-p">Create Your First Board</a>
            </div>
            <div className="home-songs">
                    <a href="/howto"className="home-p">Getting Started</a>
            </div>
        </div>

        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New Board</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form method="POST" action="/board">
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">Board Name:</label>
                    <input name="title" type="text" class="form-control" id="recipient-name"/>
                     <button type="submit" class="btn btn-primary">Create Board</button>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Create Board</button>
              </div>
            </div>
          </div>
        </div>

      </DefaultLayout>
    );

  }
}

module.exports = Welcome;