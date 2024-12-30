'use strict'
const http = require('http')
const fs = require('fs');
const server = http.createServer(function (req, res) {
    let src = fs.createReadStream(process.argv[3])
    src.pipe(res)
    // console.log('connect')
    // res.end()
})
server.listen(process.argv[2])