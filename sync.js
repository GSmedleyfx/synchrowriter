const electron = require("electron");
const modal = require("modal");
window.onload = function()
{
    

    electron.ipcRenderer.on("hostServer", host);
    electron.ipcRenderer.on("activateSynchronization", activateSynchronization);
}

function host()
{
    var WebSocketServer = require("websocketserver");
    var server = new WebSocketServer("all", 9000);
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