const express = require("express");

const app=express()
const port=process.env.port|8000
app.get('/',(req,res)=>{
    res.json({message:"hehhe this is working"})
})

app.listen(port,()=>{
    console.log(`running in ${port}`);
    
})