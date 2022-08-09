const http = require("http");
var url = require('url');

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
 	res.writeHead(200);
 	const queryObject = url.parse(req.url, true).query;
	var operator = queryObject.operator;
	var num1 =  parseInt(queryObject.val1);
	var num2 =  parseInt(queryObject.val2);
	var result;
	
        function add(a, b){
		return a + b
	};

	function subtract(a, b){
		return a - b
	};

	function multiply(a, b){
		return a * b
	};

	function divide(a, b){
		return a / b
	};

	switch(operator){
		case "addition":
		result = add(num1, num2);
		break;

		case "subtraction":
		result = subtract(num1, num2);
		break;

		case "multiplication":
		result = multiply(num1, num2);
		break;

		case "division":
		result = divide(num1, num2);
		break;

		default:
		result = "Sorry, please enter a valid operator!"
	};
	
res.end(JSON.stringify(result));
  
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});