const express =require('express')
const dotenv =require('dotenv')
const { chats } = require('./data/Data')
const app=express()
dotenv.config();

app.get('/',(req,res)=>{
    res.send('API is running')
});

app.get("/api/chat",(req,res)=>{
    // res.send("Hello")
    res.send(chats);
    // console.log(chats)
});

const PORT=process.env.PORT || 5000

app.get('/api/chat/:id',(req,res)=>{
    // console.log(req.params.id)
    const singleChat=chats.find((c)=>c._id==req.params.id);
    res.send(singleChat);
})

app.listen(PORT,console.log(`Server Started on Port : ${PORT}`));