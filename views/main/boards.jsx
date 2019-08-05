const React = require("react");
const DefaultLayout = require('../layouts/default');


class Home extends React.Component {
  render() {

    let headerTitle = 'Main | Plannr';
    let user = this.props.user;
    let boards = this.props.board;

    let boardArr = boards.map( (board, i)=> {
        let boardURL = `/board/${board.board_id}`
        return(
            <a href={boardURL}>Board{i+1}. {board.title}</a>
        )
    });
    return (

      <DefaultLayout title={headerTitle} user={user}>

        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Create New Board</button>
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
                    <br/>
                     <button type="submit" class="btn btn-primary">Create Board</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div>
            {boardArr}
        </div>

      </DefaultLayout>
    );

  }
}

module.exports = Home;