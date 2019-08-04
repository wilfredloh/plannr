const React = require('react');
const NavBar = require('./components/navBar');

class DefaultLayout extends React.Component {
  render() {

    let user = this.props.user;

    return (
      <html>
        <head>
            <title>{this.props.title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" type="text/css" href="../../css/style.css"/>
            <link rel="icon" type="image/png" href="/css/images/favicon.png"/>

        </head>

        <body>
            <NavBar user={user}/>
            <div className="container">{this.props.children}</div>
        </body>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js">
        </script>
        <script src="/script.js"></script>

      </html>
    );
  }
}

module.exports = DefaultLayout;