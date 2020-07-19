let socket = io()

socket.on('connect', () => {
    document.getElementById('socketId').innerText = socket.id
})


// docment .qeryselector- it works same as jquery

function colorTheBox(color) {
    document.querySelector('.' + color).style.backgroundColor = color
    setTimeout(() => {
        document.querySelector('.' + color).style.backgroundColor = null

    }, 500)
}

document.getElementById('colorIt').onclick = function() {
    const color = document.getElementById('selectColor').value
    socket.emit('colorIt', { color }) //here color will contain actual colour
        // colorTheBox(color)
}


// This is done because our data goes in every tab opened
socket.on('colorIt', (data) => {
    colorTheBox(data.color)
})