var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var IndexRoute = ReactRouter.IndexRoute
var ReactDOM = require('react-dom')
var React = require('react')


var MyAccount = React.createClass({
  render : function() {
    return (

          <div>
          <h1>Hey</h1>
          <h2>My account</h2>
          </div>
      );

  }

});

module.exports = MyAccount;