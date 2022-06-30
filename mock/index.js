const express = require("express")
const app = express()
const vipLogin= require("./data/vip_login.json")
const adminLogin= require("./data/admin_login.json")
const url= require("url")

app.get("/login",(req,res) => {
  const user = url.parse(req.url,true).query.user;
  if(user == 'admin'){
    res.send(adminLogin)
  }else {
    res.send(vipLogin)
  }
})

app.listen(3000,()=> {
  console.log('运行在3000');
})
