const React = require("react");
const DefaultLayout = require('../layouts/default');
const CreateBoardBlock = require('../components/createBoardBlock')

class Boards extends React.Component {
  render() {

    let headerTitle = 'Boards | Plannr';
    let user = this.props.user;

    let boardArr = 'Empty';
    if (this.props.board) {
        let boards = this.props.board;
        boardArr = boards.map( (board, i)=> {
            let boardURL = `/board/${board.board_id}`
            return(
                <a href={boardURL}>Board{i+1}. {board.title}</a>
            )
        });
    }

    return (

      <DefaultLayout title={headerTitle} user={user}>

      <CreateBoardBlock/>

        <div>
            {boardArr}
        </div>

      </DefaultLayout>
    );

  }
}

module.exports = Boards;