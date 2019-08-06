const React = require('react');
const NavBarIntro = require('../layouts/components/navBar-index');

class FrontLayout extends React.Component {
  render() {

    let headerTitle = "Plannr: Where Dreams Become Reality";

    let loginURL = `/login`;
    let registerURL = `/register`;

    return (
      <html>
        <head>
            <title>{this.props.title}</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" rel="stylesheet"/>
            <link rel="stylesheet" type="text/css" href="../../css/style.css"/>
            <link rel="icon" type="image/png" href="/css/images/favicon.png"/>

        </head>
        <body class="body-index">
            <NavBarIntro/>
                                {/*   Section A    */}

        <section className="section-a">
          <div className="container">
            <div>
              <h1>Plan for anything.</h1>
              <p>
              Whether you’re planning a holiday, sharing a shopping list with a partner or managing multiple work projects, Plannr is here to help you tick off all your personal and professional to-dos.
              </p>
              <a href="/register" className="btn btn-outline-primary">Create Account</a>
            </div>
            <img src="/css/images/plannr-iphone.png" className="phone" alt="" />
          </div>
        </section>

                                {/*   Section B    */}
        <section id="about" className="section-b">
          <div className="overlay">
            <div className="section-b-inner">
              <h2 className="text-5">Focus on what matters most</h2>
              <p className="mt-1">
                Manage everything from big projects to personal moments.
                A single place for your notes, ideas, lists and reminders.
                Nothing falls through the cracks.
              </p>
            </div>
          </div>
        </section>
                                        {/*   Section C    */}
        <section className="section-c">
          <div className="container">
            <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80" alt="" />
            <div>
              <h1>Never worry about forgetting things again</h1>
              <p>
                Let Plannr remember it all for you. You can get tasks out of your head and onto your to-do list anytime, anywhere.
              </p>
            </div>
          </div>
        </section>
                                {/*   Section D    */}

        <section className="section-d">
          <div className="container-d">
              <h1>Unclutter your mind with Plannr</h1>
              <br/>
              <br/>
              <a href="/register"><button className="btn btn-outline-primary">Sign Up Today</button></a>
          </div>
        </section>

                                {/*   Footer    */}
            <hr/>
            <p class="copyright">
                &copy; <script>document.write(new Date().getFullYear())</script> <a href="">Plannr</a>, the Productive App
            </p>
        </body>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>

      </html>
    );
  }
}

module.exports = FrontLayout;