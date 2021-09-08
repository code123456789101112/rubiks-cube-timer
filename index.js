const cube = require("./cube.js");
const generateScramble = require("./scramble.js");

const express = require("express");
const WebSocket = require("ws");

const app = express();

app.get("/", (_req, res) => {
    res.sendFile("index.html", { root: "." });
});

app.listen(process.env.PORT || 3000, () => console.log("listening"));

const ws = new WebSocket.Server({ port: 3030 });

ws.on("connection", client => {
    client.on("message", message => {
        if (JSON.parse(message) === "3x3x3 scramble") {
            const scramble = generateScramble();

            client.send(`3x3x3-scramble ${scramble}`);
            client.send(`scramble-image ${JSON.stringify(cube(scramble))}`);
        }
    });
});
