const http = require("http");
const fs = require("fs");
const httpParse = require("url").parse;

const dir = __dirname; //const for the current directory of application

function displayPage(res, url) {
  debugger;
  const file = dir + url + ".html";
  fs.createReadStream(file).pipe(res);
}

function errorPage(res) {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1 style='color:red'>Opps! Something went wrong</h1>");
  res.write("<hr>");
  res.write("<h2> The page is on available!!</h2>");
}

http
  .createServer((req, res) => {
    if (req.method == "GET") {
      const query = httpParse(req.url).query;
      if (query != null) {
        debugger;
        let obj = httpParse(req.url, true).query;
        console.log(obj.txtName + " " + obj.txtEmail);
        const msg = `Thanku For Registering Mr.${obj.txtName} Ur Email is Registerd with us ${obj.txtEmail} `;
        res.write(msg);
        res.end();
        return;
      }
    } else if (req.method == "POST") {
      req.on("data", function (inputs) {
        res.write(inputs);
        res.end();
        return;
      });
    }
    console.log(req.url);
    switch (req.url) {
      case "/favicon.ico":
        res.end();
        return;
      case "/Register":
        displayPage(res, req.url);
        break;
      case "/Home":
        displayPage(res, req.url);
        break;
      default:
        errorPage(res);
        res.end();
        break;
    }
  })
  .listen(1234);
