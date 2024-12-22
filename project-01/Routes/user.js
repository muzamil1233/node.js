const express = require('express');
const router = express.Router();
router.get("/users",async function (req, res) {
    const allDbUsers = await User.find({});
    const html = `
    <ul>
    ${allDbUsers.map((user)=>
      `<li>
        ${user.firstName}-
        ${user.email}
      </li>`)
      .join("")}
    </ul>`;
    res.send(html)});
    
    router.get('/api/users', async (req,res)=>{
        
    
        const allDbUsers = await User.find({})
        return res.json(allDbUsers);
     })
     app.post("/api/users",(req,res)=>{
        const body = req.body;
        users.push({...body, id : users.length+1})
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(body) , (err,data) =>{
            return res.json({status:"succes", id : users.length});
        });
        
        
      });
  

     module.exports = router;