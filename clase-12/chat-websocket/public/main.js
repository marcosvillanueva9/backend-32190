const socket = io()

socket.on('messages', data => {
    const html = data.map(msj => {
        return `<div>
        <strong>${msj.author}</strong>
        <em>${msj.text}</em>
        </div>`
    })
    .join(" ")

    document.getElementById("messages").innerHTML = html
})

function addMessage() {
    const message = {
        author: document.getElementById("username").value,
        text: document.getElementById("text").value
    }

    socket.emit('new-message', message)
    return
}