for (let i = 0; i < process.argv.length; i++) {
    console.log(process.argv[i])
}

console.log(process.argv)

app.listen(process.argv[2])