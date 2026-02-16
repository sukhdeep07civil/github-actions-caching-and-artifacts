import express from 'express'

const app = express();

app.get("/",(req,res)=>{
    res.send("this is homepage.")
})

app.listen(3000,()=>{
    console.log("app is listening on port 3000")
})