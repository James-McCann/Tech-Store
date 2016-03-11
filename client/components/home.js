var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var IndexRoute = ReactRouter.IndexRoute
var ReactDOM = require('react-dom')
var React = require('react')
var request = require('superagent') ; 


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



var Home = React.createClass({

    getInitialState : function() {
        return {
            searchText : ''
      }
    },


    componentDidMount : function() {
         
         request.get('http://localhost:3000/products').end(function(error, res){
              if (res) {
                var json = JSON.parse(res.text);
                localStorage.clear();
                localStorage.setItem('products', JSON.stringify(json)) ;
                this.setState({}) ;
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
            <div className ="row">
              <div className ="col-md-3">
                   <form className="form">
                    <div className="form-group">
                     <label>Search Product: </label>
                      <input type="text"  className="form-control" placeholder="Search Products" onChange={this.filterProducts} />
                       <div className="form-group">
                            <label>Sort: </label>
                            <select className="form-control" id="sort">
                               <option value="price">Price</option>
                               <option value="price">Reviews</option>
                            </select>
                        </div>
                    </div>
                  </form>
              </div>
            </div>    
                     <ProductList list={updatedList}/> 
          </div>
         
        );
    }
});



module.exports = Home;