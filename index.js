const http = require("http");
const PORT = process.env.PORT || 5000;
const url = require("url");
const queryValid = require("./utils/checkQueryValidity");

const password = require("./generate-password.js");

const server = http.createServer((req, res) => {
  const queryObj = url.parse(req.url, true).query;

  const validQueries = {
    num: "boolean",
    caps: "boolean",
    char: "boolean",
    len: "number",
  };

  const validity = queryValid(queryObj, validQueries);
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Content-Type": "application/json",
  };
  if (validity.state === false) {
    res.writeHead(400, headers);
    res.end(JSON.stringify({ data: `${validity.key} is not a valid query` }));
  } else {
    const data = password(
      queryObj.num,
      queryObj.char,
      queryObj.len,
      queryObj.caps
    );
    res.writeHead(200, headers);
    res.end(JSON.stringify({ data: data }));
  }
});

server.listen(PORT, () => console.log("Server started on port " + PORT));
