// ------------------------------------------- Server Req Example ---------------------------------------------------------
// const http = require("http");
// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.write(`
//             <html>
//                 <head>
//                     <title>ReadStream Form</title>
//                 </head>
//                 <body>
//                     <form action="/process" method="post">
//                         <input type="text" name="message" />
//                         <button type="submit">Submit</button
//                     </form>
//                 </body>
//             </html>
//             `);
//         res.end();
//     } else if (req.url === "/process" && req.method === "POST") {
//         res.write("This is process Page\n");
//         const body = [];
//         req.on("data", (chunk) => {
//             body.push(chunk);
//         })
//         req.on("end", () => {
//             res.write(Buffer.concat(body).toString());
//             res.end();
//         })
//     }
// });
// server.listen(3000, () => {
//     console.log("Server listening on port no: 3000");
// })
// ------------------------------------------- Server Req Example ---------------------------------------------------------

// ---------------------------------------------- Normal Example ----------------------------------------------------------
// const fs = require("fs");
// const ourReadStream = fs.createReadStream(`${__dirname}/../fileSystem/bigdata.txt`, "utf-8");
// ourReadStream.on("data", (data) => {
//     console.log(data);
// })
// ---------------------------------------------- Normal Example ----------------------------------------------------------