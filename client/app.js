var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var IndexRoute = ReactRouter.IndexRoute
var ReactDOM = require('react-dom') ;
var React = require('react') ;
var request = require('superagent') ; 


var MyAccount = require('./javascript/myaccount.js');
{/*var Home = require('./javascript/home.js');*/}

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
    getInitialState : function() {
        return {
            searchText : ''
      }
    },


    componentDidMount : function() {
         var that = this ;
         request.get('http://localhost:3000/products').end(function(error, res){
              if (res) {
                var json = JSON.parse(res.text);
                localStorage.clear();
                localStorage.setItem('products', JSON.stringify(json)) ;
                this.setState( {}) ;
              } else {
                console.log(error );
              }
            }.bind(this)); 
    },


    filterProducts : function(event) {
        event.preventDefault();
        this.setState({searchText : event.target.value.toLowerCase()});
    },


    render: function(){
        var updatedList = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [] ;

        updatedList = updatedList.filter(function(productItem){

               return productItem.name.toLowerCase().search(this.state.searchText) !== -1 ;  

         }.bind(this) );

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
                       
                       <li><Link to="/specials">Specials</Link></li>
                       <li><Link to="/myaccount">My Account</Link></li>
                    </ul>
                        <ul className="nav navbar-nav navbar-right">
                         <form className="navbar-form">
                          <div className="form-group">
                            <input type="text"  className="form-control" placeholder="Search Products" onChange={this.filterProducts} />
                             <div className="form-group">
                                  <label for="sort">Sort: </label>
                                  <select className="form-control" id="sort">
                                     <option value="price">High Price</option>
                                     <option value="price">Low Price</option>
                                  </select>
                                </div>
                                </div>
                         </form>
                        </ul>
                    </div>
                  </div>
              </nav>
               <ProductList list={updatedList} />
          </div>
         
        );
    }
});


  
var ProductListItem = React.createClass({
    render : function() {
         return (

           <div className="col-md-4">
            <div className="thumbnail">
              <img src={this.props.product.image}/>
              <div className="caption">
                <h4 className="pull-right">
                  €{this.props.product.price}
                </h4>
                <h4><Link to="/product">{this.props.product.name}</Link></h4>
                                     <p>{this.props.product.description}</p>
                </div>
                <div className="ratings">
                  <p className="pull-right">{this.props.product.reviews} Reviews</p>
                  <p>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>

                  </p>
                </div>
              </div>
            </div>
           )
    }
});


var ProductList = React.createClass({
   render : function(){
          var displayProducts = this.props.list.map(function(productItem){
            return <ProductListItem key={productItem.name} product={productItem}/>;
          });
          return (

                     <section id="products">
                          <ul>
                              {displayProducts}
                          </ul>
                      </section>
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
  <Router >
    <Route path="/" component={TechStoreApp}>
      <Route path="specials" component={Specials} />
      <Route path="myaccount" component={MyAccount} >
      </Route>
    </Route>
  </Router>
  ),
    document.getElementById('mount-point')
); 