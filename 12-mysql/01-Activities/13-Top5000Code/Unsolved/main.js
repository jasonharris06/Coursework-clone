var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "34XYkf*5",
  database: "top_songsDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
    runSearch();
});
 
function runSearch(){
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "Find song by artist",
                "Find all artists who appear more than once",
                "Find data within a sprecific range",
                "Search for a specific song",
                "exit"
            ]
        })
        .then(function(answer) {
            switch (answer.action){
                case "Find song by artist":

                artist();
                break;
                
                case "Find all artists who appear more than once":
                artistFindAll();
                break;

                case "Find data within a sprecific range":
                range();
                break;

                case  "Search for a specific song":
                song();
                break;

                case "exit":
                console.log("Goodbye Human!");
                break;

                default:


            }

        });
    };
    
    // function artist(selection) {
    //     connection.query("SELECT * FROM songs WHERE ", function (err, res) {
    //       if (err) throw err;
    //       var resArr = [];
    //       for (var i = 0; i < res.length; i++) {
    //         resArr.push(res[i].TITLE);
    //       }
    //       callback(resArr);
    //      });
    //   }
           
        
            


