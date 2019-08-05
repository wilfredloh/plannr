const React = require('react');

class CreateBoardBlock extends React.Component {
  render() {

    return (

        <div>
            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Create New Board</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Create New Plannr Board</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form method="POST" action="/board">
                      <div className="form-group">
                        <label for="recipient-name" className="col-form-label">Board Name:</label>
                        <input name="title" type="text" className="form-control" id="recipient-name"/>
                        <br/>
                         <button type="submit" className="btn btn-info">Create Board</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

module.exports = CreateBoardBlock;