var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var IndexRoute = ReactRouter.IndexRoute
var ReactDOM = require('react-dom')
var React = require('react')
var products = require('./../data.js').allProducts;

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


module.exports = Home;