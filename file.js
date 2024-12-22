// const fs = require('fs');

// // sync means this was a synchronous call
// fs.writeFileSync("./sample.txt", "hey whatsapp")



//  const result = fs.readFileSync("./contacts.txt", "utf-8");
//  console.log(result);


// //  fs.readFileSync("./contact.txt", "utf-8",(err , result )=>{
// //     if (err){
// //         console.log(err);
        
// //     }else{
// //         console.log(result);
// //     }

// //  })  as this is a asynchronous call so it doesnot return means we cannot store itin variablelike in sync 


// fs.appendFileSync("./contact.txt",new Date().getDate().toLocaleString());


// console.log(fs.statSync("./contact.txt"));