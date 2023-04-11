const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    const chunks = [];

    req.on("data", (chunk) => {
      const buf = Buffer.from(chunk);
      const str = buf.toString();
      chunks.push(str);

      const obj = JSON.parse(chunks);
      const value = obj.num1;

      // Write the code here to check if the number is odd or even
      if (num1 % 2 === 0) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("The number is even");
      } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("The number is odd");
      }
    });
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

module.exports = server;
