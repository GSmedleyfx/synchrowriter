var socket = new WebSocket("ws://echo.websocket.org");

socket.onopen = function()
{
    socket.send("dogs");
}

socket.onmessage = function(message)
{
    console.log(message);
}