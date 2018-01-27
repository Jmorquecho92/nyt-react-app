var React = require('react');

 
var results = React.createClass({

	
	getInitialState: function(){
		return {
			searchTerm: "",
			results: "",
			history: [] 
		}
	},	

	
	setTerm: function(term){
		this.setState({
			searchTerm: term
		})
	},



	render: function(){

		return(
			<div className="jumbotron">

				

			</div>

		)
	}
});

// // Export the component back for use in other files
module.exports = results;