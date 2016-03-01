var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var IndexRoute = ReactRouter.IndexRoute
var ReactDOM = require('react-dom')
var React = require('react')


var Home = require('./javascript/home.js');
var Product = require('./javascript/product.js');


var Header = React.createClass({
  render : function() {
    return (
      <header>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <h1 className="logo"><i className="glyphicon glyphicon-tag"></i> Tech <span className="primary">Store</span></h1>
            <p className="subtext">All Your Electronic Needs</p>
          </div>
      
        </div>
      </header>
      );
  }
});


var NavBar = React.createClass({
  render : function(){
     return(
              <nav className="navbar navbar-default">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>
                  <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                      <li className="active"><a href="#">Home</a></li>
                      <li><a href="#">Whats New</a></li>
                      <li><a href="#">Specials</a></li>
                      <li><a href="#">My Account</a></li>
                    </ul>
                    
                  </div>
                </div>
              </nav>
            );
  }
});


var Footer = React.createClass({
  render : function() {
    return (
      <footer className="footer">
        
           <p>James McCann 20029187 &copy; 2016 - <a href="#">Terms</a> &middot; <a href="#">Privacy</a></p>
  
        </footer>
      ) ;
  }
});

var App = React.createClass({
  render : function() {
    return (
      <div>
        <div className="container">
        <Header />
          <NavBar />
            {this.props.children}
      </div>
      <Footer />
    </div>
    )
  }
});

ReactDOM.render((
 <Router >
    <Route path="/" component={App} >   
           <IndexRoute component={Home} />
   
           <Route path="product" component={Product} />
    </Route>
 </Router>
), document.getElementById('mount-point')) ;