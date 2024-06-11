const http = require("http");
const fs = require("fs");
// --------------------------------------------- Normal Example -------------------------------------------------------
// const ourReadStream = fs.createReadStream(`${__dirname}/../fileSystem/bigdata.txt`);
// const ourWriteStream = fs.createWriteStream(`${__dirname}/../fileSystem/output.txt`);
// Hard Way
// ourReadStream.on("data", (chunk) => {
//     ourWriteStream.write(chunk);
// })
// Easy way
// ourReadStream.pipe(ourWriteStream);
// --------------------------------------------- Normal Example ---------------------------------------------------------
// --------------------------------------------- Server Example ---------------------------------------------------------
const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(`/${__dirname}/../fileSystem/bigdata.txt`);
    myReadStream.pipe(res);
})
server.listen(3000, () => {
    console.log("Server Listening on port 3000");
})