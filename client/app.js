var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var IndexRoute = ReactRouter.IndexRoute
var ReactDOM = require('react-dom')
var React = require('react')
var products = require('./data').allProducts;

 // var ProductPage = require('./javascript/productPage.js');
 // var Home = require('./javascript/home.js');

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
                      <li className="active"><Link to="/home">Home</Link></li>
                       <li><Link to="/whatsnew">Whats New</Link></li>
                       <li><Link to="/specials">Specials</Link></li>
                       <li><Link to="/myaccount">My Account</Link></li>
                    </ul>
                  </div>
                </div>
              </nav>
            );
  }
});


var Home = React.createClass({
  render : function(){
     return(

      <div>

      <div className="jumbotron">
  
          <ul className="tablist" role="tablist">
            <li role="presentation" className="active"><a href="#featured" aria-controls="featured" role="tab" data-toggle="tab">Featured Item</a></li>
            <li role="presentation"><a href="#best" aria-controls="best" role="tab" data-toggle="tab">Best Seller</a></li>
            <li role="presentation"><a href="#discount" aria-controls="discount" role="tab" data-toggle="tab">Summer Discount</a></li>
            <li role="presentation"><a href="#premium" aria-controls="premium" role="tab" data-toggle="tab">Premium Product</a></li>
            <li role="presentation"><a href="#gift" aria-controls="gift" role="tab" data-toggle="tab">Gift Idea</a></li>
          </ul>

         
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane active" id="featured">
              <div className="tab-text">
                <h2>Apple iPhone 6</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis ornare dolor. Vivamus malesuada auctor est id aliquet. Morbi rutrum lectus sit amet purus pulvinar vehicula</p>
                <a href="product.html" classNameclassName="btn btn-default">Read More</a>
              </div>
              <img className="slide-img" src="img/iphone.png"/>
            </div>
            <div role="tabpanel" className="tab-pane" id="best">
              <div className="tab-text">
                <h2>Xbox One</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis ornare dolor. Vivamus malesuada auctor est id aliquet. Morbi rutrum lectus sit amet purus pulvinar vehicula</p>
                <a href="product.html" className="btn btn-default">Read More</a>
              </div>
              <img className="slide-img" src="img/xbox.png"/>
            </div>
            <div role="tabpanel" className="tab-pane" id="discount">
              <div className="tab-text">
                <h2>Playstation 4</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis ornare dolor. Vivamus malesuada auctor est id aliquet. Morbi rutrum lectus sit amet purus pulvinar vehicula</p>
                <a href="product.html" className="btn btn-default">Read More</a>
              </div>
              <img className="slide-img" src="img/ps4.png"/>
            </div>
            <div role="tabpanel" className="tab-pane" id="premium">
              <div className="tab-text">
                <h2>Microsoft Surface</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis ornare dolor. Vivamus malesuada auctor est id aliquet. Morbi rutrum lectus sit amet purus pulvinar vehicula</p>
                <a href="product.html" className="btn btn-default">Read More</a>
              </div>
              <img className="slide-img" src="img/surface.png"/>
            </div>
             <div role="tabpanel" className="tab-pane" id="gift">
              <div className="tab-text">
                <h2>Vizio Smart TV</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis ornare dolor. Vivamus malesuada auctor est id aliquet. Morbi rutrum lectus sit amet purus pulvinar vehicula</p>
                <a href="product.html" className="btn btn-default">Read More</a>
              </div>
              <img className="slide-img" src="img/tv.png"/>
             </div>
          </div>
        </div>
    
         <div>
         <ProductDisplay products = {this.props.products}/>
         </div>
      </div>

      
    );
                        
          
    }
});


var ProductDisplay = React.createClass({
    render : function(){
          var displayedProducts = this.props.products.map(function(product){
            return <ProductItem key={product.id} products={product}/>;
          });
          return (

                     <section id="products">
                          <ul>
                              {displayedProducts}
                          </ul>
                      </section>
            );

    }
});




var ProductItem = React.createClass({
    render : function () {
       return (

  
          <div className="col-md-4">
            <div className="thumbnail">
              <img src={this.props.products.image}/>
              <div className="caption">
                <h4 className="pull-right">
                  €{this.props.products.price}
                </h4>
                <h4><Link to="/product">{this.props.products.name}</Link></h4>
                                     <p>{this.props.products.description}</p>
                </div>
                <div className="ratings">
                  <p className="pull-right">{this.props.products.reviews} Reviews</p>
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



var TechApp = React.createClass({
  render : function() {
    return (
      <div>
        <div className="container">
          <Header />
           <NavBar />
           <Home products = {this.props.products}/>
              {this.props.children}
         </div>
          <Footer />
      </div>
    )
  }
});


ReactDOM.render(
<TechApp products={products} />,
document.getElementById('mount-point'));