const http = require("http");
http
  .createServer(function (req, res) {
    if (req.url == "/Employees") {
      res.write("This page is for Employees");
    } else if (req.url == "Customers") {
      res.write("This page is for Customers");
    } else {
      res.write("This is Default Page");
      res.statusMessage();
    }
    res.end();
  })
  .listen(1234);
