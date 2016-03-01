var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var IndexRoute = ReactRouter.IndexRoute
var ReactDOM = require('react-dom')
var React = require('react')

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

      
     
       <section id="products">
        <div className="row">
          <div className="col-md-4">
            <div className="thumbnail">
              <img src="img/s5.png"/>
              <div className="caption">
                <h4 className="pull-right">
                  $699.99
                </h4>
                <h4><Link to="/product">Samsung Galaxy S5</Link></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim</p>
                </div>
                <div className="ratings">
                  <p className="pull-right">15 Reviews</p>
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
         
          <div className="col-md-4">
            <div className="thumbnail">
              <img src="img/xbox.png"/>
              <div className="caption">
                <h4 className="pull-right">
                  $399.99
                </h4>
                <h4><Link to="/product">Xbox One</Link></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim</p>
                </div>
                <div className="ratings">
                  <p className="pull-right">8 Reviews</p>
                  <p>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star-empty"></span>
                  </p>
                </div>
              </div>
          </div>
          <div className="col-md-4">
            <div className="thumbnail">
              <img src="img/ps4.png"/>
              <div className="caption">
                <h4 className="pull-right">
                  $699.99
                </h4>
                <h4><Link to="/product">Playstation 4</Link></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim</p>
                </div>
                <div className="ratings">
                  <p className="pull-right">4 Reviews</p>
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
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="thumbnail">
              <img src="img/s5.png"/>
              <div className="caption">
                <h4 className="pull-right">
                  $699.99
                </h4>
                <h4><Link to="/product">Samsung Galaxy S5</Link></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim</p>
                </div>
                <div className="ratings">
                  <p className="pull-right">15 Reviews</p>
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
         
          <div className="col-md-4">
            <div className="thumbnail">
              <img src="img/tv.png"/>
              <div className="caption">
                <h4 className="pull-right">
                  $599.99
                </h4>
                <h4><Link to="/product">Vizio Smart TV</Link></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim</p>
                </div>
                <div className="ratings">
                  <p className="pull-right">22 Reviews</p>
                  <p>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star-empty"></span>
                  </p>
                </div>
              </div>
          </div>
          <div className="col-md-4">
            <div className="thumbnail">
              <img src="img/surface.png"/>
              <div className="caption">
                <h4 className="pull-right">
                  $399.99
                </h4>
                <h4><Link to="/product">Microsoft Surface</Link></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim</p>
                </div>
                <div className="ratings">
                  <p className="pull-right">14 Reviews</p>
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
          </div>
        </section>


        </div>
          );
    }
});


module.exports = Home;