var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var IndexRoute = ReactRouter.IndexRoute
var ReactDOM = require('react-dom')
var React = require('react')
var request = require('superagent') ; 
var _ = require('lodash');


var ProductListItem = React.createClass({

  getInitialState : function() {
               return {
                name: this.props.product.name,
                price: this.props.product.price,
                description: this.props.product.description,
                reviews: this.props.product.reviews,
                image: this.props.product.image   
               } ;
            },


 
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
                <button type ="submit" className="btn btn-danger" value="Delete"/>
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


var FilterOptions = React.createClass({
      handleChange : function(e, type,value) {
           e.preventDefault();
           this.props.option( type,value);
      },
      handleTextChange : function(e) {
            this.handleChange( e, 'search', e.target.value);
      },
      handleSortChange : function(e) {
          this.handleChange(e, 'sort', e.target.value);
      },
      render: function(){
           return (
             
             <div className ="row">
              <div className ="col-md-3">
                   <form className="form">
                    <div className="form-group">
                     <label>Search Product: </label>
                      <input type="text"  className="form-control" placeholder="Search Products" value={this.props.filterText}
                          onChange={this.handleTextChange} />
                       <div className="form-group">
                            <label>Sort: </label>
                            <select className="form-control" id="sort" value={this.props.order } 
                         onChange={this.handleSortChange} >
                               <option value="name">Name</option>
                               <option value="price">Price</option>
                            </select>
                        </div>
                    </div>
                  </form>
              </div>
            </div>
               );
          }
       });


var Home = React.createClass({

    getInitialState : function() {
        return {
            search : '' , sort: 'name'
      }
    },

    handleChange : function(type,value) {
                    if ( type == 'search' ) {
                        this.setState( { search: value } ) ;
                      } else {
                         this.setState( { sort: value } ) ;
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

  
    render: function(){
         var updatedList = localStorage.getItem('products') ?
                  JSON.parse(localStorage.getItem('products')) : [] ;

        var list = updatedList.filter(function(p) {
                  return p.name.toLowerCase().search(this.state.search.toLowerCase() ) != -1 ;
                }.bind(this) );
          var filteredList = _.sortBy(list, this.state.sort) ;

        return (

          <div>

          {/*

          
            <div className ="row">
              <div className ="col-md-3">
                   <form className="form">
                    <div className="form-group">
                     <label>Search Product: </label>
                      <input type="text"  className="form-control" placeholder="Search Products" onChange={this.filterText} />
                       <div className="form-group">
                            <label>Sort: </label>
                            <select className="form-control" id="sort" value={this.props.order} onChange={this.handleSortChange}>
                               <option value="price">Name</option>
                               <option value="name">Price</option>
                            </select>
                        </div>
                    </div>
                  </form>
              </div>
            </div>  */}  
                     <FilterOptions option={this.handleChange } 
                        filterText={this.state.search} 
                        sort={this.state.sort} />


                     <ProductList list={filteredList}/> 
                           
                             
          </div>
         
        );
    }
});



module.exports = Home;