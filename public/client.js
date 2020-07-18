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
    const colour = document.getElementById('selectColor').value
    colorTheBox(colour)
}