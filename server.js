const WebSocket = require("ws");

const wss = new WebSocket.Server({
    port: 9000,
    host: "127.0.0.1"
});
console.log("WebSocket server running on 9000");

wss.on("connection", (socket) => {

    console.log("Client connected");

    socket.on("message", (data) => {
        console.log("Data received:", data.toString());
        console.log("test");
    });

    setInterval(() => {
        socket.send("Message from server: " + new Date().toISOString());
    }, 1000);


    socket.on("close", () => {
        console.log("Client disconnected");
    });
});