const express = require("express");
const cors = require("cors");
const Websocket = require("ws");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;
const wss = new Websocket.Server({ port: 3500 });

wss.on('connection', (ws) => {
    console.log("New Connection Estabilished");

    ws.on('message', (message) => {
        console.log("Message", message.toString());

        wss.clients.forEach((client) => {
            if(client.readyState === Websocket.OPEN) {
                client.send(message.toString());
            }
        })
    })

    ws.on('close', () => {
        console.log("Connection Disconnected");
    })
})

app.listen(() => {
    console.log(`The app was running at port: ${PORT}`)
})