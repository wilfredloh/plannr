const React = require("react");

class Block extends React.Component {
  render() {

    let tweets = this.props.tweets;

    let tweetsArr = tweets.map((tweet,i)=>{
    let userURL = `/users/${tweet.id}`
        return (
            <div>
                <p>
                    <form action={userURL}>
                        <button>Follow</button>
                    </form>
                    <a href={userURL}>{tweet.name}</a>: {tweet.detail}
                </p>
            </div>
        )
    })


    return (

        <div>
            {tweetsArr}
        </div>

    );

  }
}

module.exports = Block;