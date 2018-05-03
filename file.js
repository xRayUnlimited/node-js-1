var fs = require('fs');

function prntContents(err, content) 
fs.readFile('my_file.txt', function(err, content) {
    console.log("IM READING THE FILE NOW")
    console.log(content)
});

console.log("I am doing something at the bottom")