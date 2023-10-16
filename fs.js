var fs = require("fs");

fs.readFile("mussum.txt", "utf8", function(error, text)
{
	if(error)
	   throw error;
	console.log("O arquivo contém :", text);
});