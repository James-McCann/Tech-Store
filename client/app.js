var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var IndexRoute = ReactRouter.IndexRoute
var ReactDOM = require('react-dom') ;
var React = require('react') ;
var request = require('superagent') ; 

var Location = require('./components/location.js');
var MyAccount = require('./components/myaccount.js');
var AddProductForm = require('./components/addProductForm.js');
var Home = require('./components/home.js');



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
   
    render: function(){
       
        return (

          <div>
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
                      <li className="active"><Link to="/">Home</Link></li>
                       <li><Link to="/addproductform">Add Product</Link></li>
                       <li><Link to="/myaccount">My Account</Link></li>
                       <li><Link to="/location">Location</Link></li>

                    </ul>
                    </div>
                  </div>
              </nav>
          </div>
         
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




var Specials = React.createClass({
  render : function() {
    return (

          <div>
          <h1>Hey</h1>
          <h2>Specials</h2>
          </div>
      );

  }

});


var TechStoreApp = React.createClass({

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
  <Router>
    <Route component={TechStoreApp}>
    <Route path="/" component={Home}/>
      <Route path="addproductform" component={AddProductForm} />
      <Route path="location" component={Location} />
      <Route path="myaccount" component={MyAccount} >
      </Route>
    </Route>
  </Router>
  ),
    document.getElementById('mount-point')
); 