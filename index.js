// // // const fs = require("fs ");


// // // fs.readFile("./sample.txt",(err,data)=>{
// // //   if(err){
// // //     return err;

// // //   }
// // //   console.log(data);
// // // })



// // // const pokemon = require ("pokemon");
// // // console.log(pokemon)


// //     // express.JS

// // const express = require("express");
// // const app = express();
// // const  bodyParser = require("body-parser");

// // const port = 3000;
// // app.use(bodyparser.urlencoded({ extended: false }));
// // app.use(express.use())

// // app.get("/",(req,res)=>{
// // res.send("Hello World");
// // });
// // app.listen(port,()=>{
// // console.log("listening on port: ${port}");
// // });
// // //if we want to access the body then you have to install body-parser then do thid


// // app.get("/", (req, res)=>{
// //     res.sendFile(path.join(__dirname+"./index.html"));
// // })
// // app.post("/", (req, res)=>{
// //     res.send("post request received");
// //     console.log("posting");
// // });

// // app.get("/api/users", (req, res)=>{
// //     res.json({
// //         name : "muxxi",
// //         email: "muxxi@gmail.com",
// //         password : "password"
// //     }
        

// //     );
// // })
// // app.post("/api/users", (req, res)=>{
// //    const userName = req.body.name;
// //    const email = req.body.email;
// //    const password = req.body.password;


// //     res.json({
// //         success : true,
// //         name : userName,
// //         email: email,
// //         password : password,
// //     })
// // });

// // const http = require("http");
// const fs = require("fs");
// const url = require("url");
// const express = require("express");

// const app = express();
//   app.get('/', (req,res)=>{
//     return res.send("hello from home page");
//   });
//   app.get('/about', (req,res)=>{
//     return res.send(`hello ${req.query.name}`);
//   });
//   app.listen(8000,()=> console.log("server started !"))

//   const myserver = http.createServer(app);
// // const myserver = http.createServer((req,res)=>{
// //     console.log("new req rec");
// //     const myUrl = url.parse(req.url, true);
// //     const log = `${Date.now()} ${req.method} ${req.url} new req recieved `
// //     console.log(myUrl);
// //     fs.appendFile("log.txt",log ,(err,data)=>{

// //         switch(myUrl.pathname){
// //             case "./ ": res.end ("homepage");
// //             break;
// //             case "/about": 
// //             const  username  = myUrl.query.myname
            
// //             res.end ( `hi, ${username}`);
// //             break;
// //             case"./search" : 
// //             const search = myUrl.query.search_query;
// //             res.end ("here are your result "+search);
// //             case "./signup":
// //                 if(req.method === "GET") res.end ("this is a signup form");
// //                 else if (req.method === "POST") {
// //                     res.end ("succes");
// //                 }
// //             default :
// //             res.end ("404 not found")
// //         }
// //         res.end ("hello from server again");
// //     })
 
// // });
// // myserver.listen(8000,() => console.log("server started"))



