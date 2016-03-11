var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var IndexRoute = ReactRouter.IndexRoute
var ReactDOM = require('react-dom')
var React = require('react')
var request = require('superagent') ; 



var AddProductForm = React.createClass({

  getInitialState : function (){
    return {
      name: '',
      price: '',
      description: '',
      image: ''
    };
  },

 handleSubmit: function(event){

    {/*alert('Submit Pressed')*/}
    
    event.preventDefault();
    var name =  this.state.name.trim();
    var price = this.state.price.trim();
    var description = this.state.description.trim();
    var image = this.state.image.trim();
    
    {/*alert(name);*/}

    if(!name || !price || !description || !image){
      alert('Please fill in fields');
      return;
    };
    this.setState({status: ''});
    this.setState({name: '',price:'', description: '', image: ''});


      request.post('http://localhost:3000/products')
      .send({name: this.state.name, price: this.state.price, description: this.state.description, image: this.state.image})
      .set('Accept', 'application/json')
      .end(function(err, res){
      if (err || !res.ok) {
        alert('Oh no! error');
      } else {
       alert('yay got ' + JSON.stringify(res.body));
      }
      });

  },

   handleNameChange: function(event){
    this.setState({name: event.target.value});
  },

  handlePriceChange: function(event){
    this.setState({price: event.target.value});
  },

   handleDescriptionChange: function(event){
    this.setState({description: event.target.value});
  },

  handleImageChange: function(event){
    this.setState({image: event.target.value});
  },


  render: function (){

      return(

          <div>
          	<div className = "row">
          	 <div className = "col-md-6  col-md-offset-3">
              <h2>Add Product</h2>

                <form onSubmit= {this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type ="text" className="form-control" placeholder="Name" value={this.state.name} onChange={this.handleNameChange}/>
                    </div>
                     <div className="form-group">
                        <label>Price</label>
                        <input type ="text" className="form-control" placeholder="Price" value={this.state.price} onChange={this.handlePriceChange}/>
                    </div>
                     <div className="form-group">
                        <label>Description</label>
                        <input type ="text" className="form-control" placeholder="Description" value={this.state.description} onChange={this.handleDescriptionChange}/>
                    </div>
                     <div className="form-group">
                        <label>Image</label>
                         <input type ="text" className="form-control" placeholder="Image Url" value={this.state.image} onChange={this.handleImageChange}/>
                    </div>

                    <button type ="submit" className="btn btn-primary">Submit</button>
                </form>

                </div>

             </div>

          </div>

        );
  }
});


module.exports = AddProductForm;