const React = require('react');
const FrontLayout = require('../layouts/frontpage');

class Index extends React.Component {
  render() {

    let headerTitle = "Plannr: Where Dreams Become Reality";

    let loginURL = `/login`;
    let registerURL = `/register`;

    return (

      <FrontLayout title={headerTitle}>

                                {/*   Section A    */}
        <section class="section-a">
          <div class="container">
            <div>
              <h1>Plan for anything.</h1>
              <p>
              Plannr is the easiest way to get stuff done. Whether you’re planning a holiday, sharing a shopping list with a partner or managing multiple work projects, Plannr is here to help you tick off all your personal and professional to-dos.
              Plannr is the only productivity app you need to *actually* get things done.
              </p>
              <a href="/register" class="btn btn-outline-primary">Create Account</a>
            </div>
            <img src="https://www.any.do/v4/images/translations/en/to-do-list/main-image@2x.jpg" alt="" />
          </div>
        </section>

                                {/*   Section B    */}
        <section id="about" class="section-b">
          <div class="overlay">
            <div class="section-b-inner">
              <h2 class="text-5">Focus on what matters most</h2>
              <p class="mt-1">
                Manage everything from big projects to personal moments.
                A single place for your notes, ideas, lists and reminders.
                Nothing falls through the cracks.
              </p>
            </div>
          </div>
        </section>
                                {/*   Section A    */}
        <section class="section-a">
          <div class="container">
            <img src="https://www.any.do/v4/images/translations/en/to-do-list/main-image@2x.jpg" alt="" />
            <div>
              <h2>Never worry about forgetting things again</h2>
              <p>
                Let Todoist remember it all for you. You can get tasks out of your head and onto your to-do list anytime, anywhere, on any device
              </p>
            </div>
          </div>
        </section>
                                {/*   Section A    */}

        <section class="section-a">
          <div class="container">
              <h2>Unclutter your mind with Plannr</h2>
              <a href="/register" class="btn btn-outline-primary">Create Account</a>
          </div>
        </section>

      </FrontLayout>
    );
  }
}

module.exports = Index;


{/*}
        <form method="POST" action={loginURL}>
            <p>Name:</p>
            <input type={"text"} name={"name"} required/>
            <p>Password:</p>
            <input type={"password"} name={"password"} required/>
            <br/>
            <br/>
            <input type="submit" value="Login"/>
        </form>
            <br/>
            <br/>
        <h5>Sign up in seconds</h5>
        <form action={registerURL}>
            <input type="submit" value="Sign up"/>
        </form>


    <!-- Footer -->
    <footer class="section-footer py-4 bg-primary">
      <div class="container">
        <div>
          <h2 class="text-2 mb-1">Lorem ipsum dolor sit.</h2>
          <a href="http://twitter.com">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
          <a href="http://facebook.com">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          <a href="http://youtube.com">
            <i class="fab fa-youtube fa-2x"></i>
          </a>
        </div>
        <div>
          <h3>Company Info</h3>
          <ul>
            <li><a href="#">All Products</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h3>Blog Posts</h3>
          <ul>
            <li><a href="#">Lorem ipsum dolor.</a></li>
            <li><a href="#">Lorem ipsum dolor.</a></li>
            <li><a href="#">Lorem ipsum dolor.</a></li>
            <li><a href="#">Lorem ipsum dolor.</a></li>
          </ul>
        </div>
        <div>
          <h3>Subscribe</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <form
            class="mt-1"
            name="email-form"
            method="POST"
            data-netlify="true"
          >
            <div class="email-form">
              <span class="form-control-wrap"
                ><input
                  type="email"
                  name="email"
                  id="email"
                  size="40"
                  class="form-control"
                  placeholder="E-mail"/></span
              ><button type="submit" value="Submit" class="form-control submit">
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
*/}