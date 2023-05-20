const express = require("express")
const path  = require("path")


const app = express();
const server = require("http").createServer(app);



const io = require("socket.io")(server);

io.on("connection", function(socket){
    console.log("it works nerd")
    socket.on("newuser", function(username){
        socket.broadcast.emit("update", username + "joined the conversation");
    });
})



server.listen(8000, function(){
    console.log("its still working")
});
