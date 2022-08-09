
var url = require('url');

var address = 'https://abc.com/index.html?code=string&key=12&id=false';

var q = url.parse(address, true);
 
console.log("Host:" + q.host); 				//returns 'abc.com'
console.log("Path:" + q.pathname); 			//returns '/index.html'
console.log("Search parameters:" + q.search); 	//returns '?code=string&key=12&id=false'

var qdata = q.query; 	// returns an object: { code: string, key: '12',id='false' }

// console.log(qdata); 

console.log("1st Parameter value:" + qdata.code); 	//returns 'string'
console.log("2nd Parameter value:" + qdata.key); 	//returns '12'
console.log("3rd Parameter value:" + qdata.id); 	//returns 'false'
npm install js-convert-case