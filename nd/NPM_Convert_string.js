const jsConvert = require('js-convert-case');  //npm install js-convert-case

// Convert String
console.log("------------------------------------");
console.log("String to convert : param-case");
console.log("------------------------------------");
console.log("String to CamelCase: " + jsConvert.toCamelCase('param-case')); 		
console.log("String to SnakeCase: " + jsConvert.toSnakeCase('param-case')); 		
console.log("String to PascalCase: " + jsConvert.toPascalCase('param-case')); 		
console.log("String to DotCase: " + jsConvert.toDotCase('param-case')); 		
console.log("String to PathCase: " + jsConvert.toPathCase('param-case')); 		
console.log("String to TextCase: " + jsConvert.toTextCase('param-case')); 		
console.log("String to SentenceCase: " + jsConvert.toSentenceCase('param-case'));	
console.log("String to HeaderCase: " + jsConvert.toHeaderCase('param-case')); 		
console.log("String to LowerCase: " + jsConvert.toLowerCase('param-case')); 		
console.log("String to UpperCase: " + jsConvert.toUpperCase('param-case')); 		
console.log("String to KebabCase: " + jsConvert.toKebabCase('param case')); 		
