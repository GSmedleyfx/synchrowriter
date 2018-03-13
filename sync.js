function host()
{
    var WebSocketServer = require("websocketserver");
    var server = new WebSocketServer("all", 9000);
    activateSynchronization();
}

function activateSynchronization()
{
    var socket = new WebSocket("ws://localhost:9000");

    var yourInputField = document.getElementById("yours");
    var theirInputField = document.getElementById("theirs");

    socket.onopen = function()
    {
        
    }

    yourInputField.onkeypress = function()
    {
        socket.send(yourInputField.value);
    }

    socket.onmessage = function(message)
    {
        theirInputField.value = message.data;
    }
}