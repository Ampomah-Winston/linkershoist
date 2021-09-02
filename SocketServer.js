const express = require('express');
const socket = require('socket.io');
const cors = require('cors');
// const moment = require('moment');

const app = express();// init express

app.use(express.json());
app.use(cors());

class SocketServer{
    constructor(portNumber = 4000){   
        this.port = portNumber;     
    }

    startListening(){
        
        const server = app.listen('4000',() => {
            console.log('socket server running ')
        });

        const IO = socket(server);
        
        IO.on('connection',socket=>{
            console.log('a user connected ', socket.id);
           
            socket.on('join_room', data=>{ 
                socket.join(data.group);
            });

            //receive message to room
            socket.on('send_to_room', data=>{
                //then send message to other group members
                socket.to(data.group).emit('groupResponse', {
                    composer: data.composer,
                    title:'groupResponse',
                    dir:'in',
                    msg:`${data.msg}`,
                    time: data.time ? data.time : '00:00:00'
                });
            })

            // runs when a user disconnects
            socket.on('disconnect',socket=>{
                console.log('a user disconnected');
                // IO.emit('ServerCom', {
                //     composer: 'ServerCom',
                //     title:'Disconnection',
                //     dir:'in',
                //     msg:'User disconnected'
                // })
            })
        })
    }
}

new SocketServer().startListening();

module.exports = SocketServer;