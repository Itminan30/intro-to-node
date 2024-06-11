const root = {
    message: "Hello Server Users!!!",
}
const http = require("http");
const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.write("Hello Server Users!!!");
        res.end();
    } else if(req.url === "/about"){
        res.write("I am learning Raw Node.js!!!");
        res.end();
    } else if(req.url === "/contact"){
        res.write("My email is itminan30@gmail.com!!!");
        res.end();
    } else {
        res.write("404 Not found Page!!!");
        res.end();
    }
    
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
})

// Just for understading, we will not use this event listener
// server.on("connection", () => {
//     console.log("New Connection!!!");
// })