const express= require("express");
const socket= require("socket.io");

const app= express();//initialized and server ready
app.use(express.static("public"));

let port= "3000";
let server=app.listen(port,()=>{
    console.log("listening to port:"+port);
})

let io=socket(server);

io.on("connection",(socket)=>{
    console.log("connected to server");

    socket.on("beginPath",(data)=>{
        io.sockets.emit("beginPath",data);
    })
    socket.on("drawStroke",(data)=>{
        io.sockets.emit("drawStroke",data);
    })
    socket.on("undoRedo",(data)=>{
        io.sockets.emit("undoRedo",data);
    })
})