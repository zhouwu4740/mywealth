var app = require("./app.js");

var port = process.env.PORT || 3000;
app.listen(port);

console.log("Server start and listenning on " + port);
