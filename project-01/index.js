 const express = require('express');
 const fs = require('fs')
 const mongoose = require('mongoose');
 const app = express();
 const users = require("./MOCK_DATA.json");
const { type } = require('os');
 const PORT = 8000;

 mongoose.connect('mongodb://localhost/mydb')
 .then(()=> console.log('MongoDB connected succesfully'))
 .catch(err => console.log(err));

 const userSchema = new mongoose.Schema({
  first_name :{
    type : String,
    required : true
  },
  last_mame :{
    type : String,
    required : false
  },
  email :{
    type : String,
    required : true,
    unique : true
  },
  job_title: {
    type : String,
    required : false
  },
  gender :{
    type: String
  }

 })




// Routes
app.get("/users",async function (req, res) {
  const allDbUsers = await User.find({});
  const html = `
  <ul>
  ${allDbUsers.map((user)=>
    `<li>
      ${users.firstName}
      {user.email}
    </li>`)
    .join("")}
  </ul>`;
  res.send(html)});
  
  



 const user = mongoose.model('User', userSchema );


 MiddleWare - plugin
 app.use(express.urlencoded({ extended : false}))
 app.use((req, res,next) => {
    console.log("hello from developers ")
    next();
 })

 app.get('/users',(req,res)=>{
   const html= `
   <ul>

   ${users.map((user)=>
`<li>
${user.first_name}
</li>`)}
   </ul>`;
   res.send(html);
 });
 app.get('/api/users',(req,res)=>{
    //  alwayz add x to custom header 

    res.setHeader("X-myName", 'muzamil');
    return res.json(users);
 })
  

  app.route("/api/users/:id").get(
    (req,res)=>{
            const id = Number(req.params.id);
            const user = users.find(user=>user.id === id);
            return res.json(user);
  })
  .patch((req, res)=>{
    // Edit user with id 
     return res.json({status:"pending"})
  })
  // delete user with id 
  .delete((req, res)=>{
    return res.json({status:"pending"})
  })

  app.post("/api/users",(req,res)=>{
    const body = req.body;
    users.push({...body, id : users.length+1})
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(body) , (err,data) =>{
        return res.json({status:"succes", id : users.length});
    });
    
    
  });
  const result = await user.create({
      first_name : body.first_name,
      last_mame : body.last_name,
      email : body.email,
      job_title : body.job_title,
      gender : body.gender,
    })
    
    return res.status(201).json({msg : "succus"})
//  app.get("api/users/:id",(req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find(user=>user.id === id);
//     return res.json(user);
// });

// app.post("/api/users",(req,res)=>{

// })
// app.patch("/api/users/:id",(req,res)=>{
    
// })
// app.delete("/api/users/:id",(req,res)=>{
    
// })


app.use((req, res)=>{
  fs.appendFile(
    "log.txt",
    '\n${Date.now()}: ${req.ip}: ${req.method}: ${req.path}\n',
    (err, data) => {
      next();
    }
  );
})



// Routes 

app.use("/user", userRouter);

 app.listen(PORT, ()=> console.log(`listening on port : ${PORT}`));


//  201 means requested has been created succusfully 
//   and 401 is a bad request it means request have not be recieved fully 