const http = require("http");
const secrets = require("./secrets.json"); 

const hostname = "127.0.0.1";
const port = 3001;

function getDbConnectionString() {
  return `postgres://user:${secrets.dbPassword}@localhost:5432/mydb`;
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(
    "Shared secret file example is running.\n" +
    `API token from secrets.json: ${secrets.apiToken}\n` +
    `DB connection string (fake): ${getDbConnectionString()}\n`
  );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
