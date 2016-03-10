var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var IndexRoute = ReactRouter.IndexRoute
var ReactDOM = require('react-dom')
var React = require('react')



var Home = React.createClass({
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
          
                         <form className="form">
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
                        
              
               <ProductList list={updatedList} />
          </div>
         
        );
    }
});

module.exports = Home;