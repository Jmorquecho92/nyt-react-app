// 
var axios = require('axios');


var apiKey = "ee02f5b0d28048f7aae742325d5ff8de";

// Helper Functions (in this case the only one is runQuery)
var helpers = {

	
	runQuery: function(topic){ 

		console.log(topic);
		// console.log(startyear);
		// console.log(endyear);

		//Figure out the geolocation
		var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + apiKey +'&q='+ topic;

		return axios.get(queryURL)
			.then(function(response){

				console.log("check" + response);
				// return response.data.results[0].formatted;
		})

	},

	
	getHistory: function(){

		return axios.get('/api')
			.then(function(response){

				console.log(response);
				return response;
			});
	},

	
	postHistory: function(topic){

		return axios.post('/api', {topic: topic})
			.then(function(results){

				console.log("Posted to MongoDB");
				return(results);
			})
	}

}


 
module.exports = helpers;