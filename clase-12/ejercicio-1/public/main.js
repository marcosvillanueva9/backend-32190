const socket = io()

socket.on('messages', data => {
    const html = data.map(msj => {
        return `<div class="rounded col-3 text-break" style="background: gray">
        <strong style="color: white">${msj.author}:</strong>
        <em style="color: white">${msj.text}</em>
        <br>
        <em>${msj.date}</em>
        </div>`
    })
    .join("<br>")

    document.getElementById("messages").innerHTML = html
})

function addMessage() {
    const message = {
        author: document.getElementById("username").value,
        text: document.getElementById("text").value,
        date: new Date().toLocaleString()
    }

    socket.emit('new-message', message)
    return
}