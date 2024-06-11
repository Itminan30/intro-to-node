// ---------------------------------------------------- lodash --------------------------------------------------------
const _ = require("lodash");
const { people } = require("./others/people");
function lodashOp() {
    console.log(_.last(people));
}
// lodashOp();
// --------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------- path --------------------------------------------------------
const path = require("path");
function pathOp() {
    console.log(path);
    const myPath = "F:/Ed/web/NodeTutorialSumit/initialProject/others/people.js";
    console.log(path.parse(myPath));
}
// pathOp();
// --------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------- os ---------------------------------------------------------
const os = require("os");
function osOp() {
    console.log(os);
    console.log(os.freemem() / (1024 * 1024 * 1024));
    console.log(os.cpus());
}
// osOp();
// --------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------- fs --------------------------------------------------------
const fs = require("fs");
function asyncFileOp() {
    console.log(fs);

    fs.writeFile("./fileSystem/myFile.txt", "Hello Programmers!!! ");
    fs.appendFile("./fileSystem/myFile.txt", "How are you? ");

    fs.readFile("./fileSystem/myFile.txt", (err, data) => {
        console.log(data.toString());
    });
}
// asyncFileOp();

function asyncFileOp2() {
    fs.writeFile("./fileSystem/myFile.txt", "Hello Programmers!!! ", (err, data) => {
        fs.appendFile("./fileSystem/myFile.txt", "How are you? ", () => {
            fs.readFile("./fileSystem/myFile.txt", (err, data) => {
                console.log(data.toString());
            });
        });
    });
}
// asyncFileOp2();

// console.log("Asynchronus Operation is used before this line of code!!! So this line will be printed first!!!");
// --------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------- Events --------------------------------------------------------
const {School} = require("./others/event");
// School Class requires and extends events.
const school = new School();
// register a listener for an event (bellRing in this case)
school.on("bellRing", ({period, text}) => {
    console.log(`We have to run!!! As ${period} ${text}!!!`);
})
// raise (or emit) an event
// school.startSchool();
// --------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------- http --------------------------------------------------------