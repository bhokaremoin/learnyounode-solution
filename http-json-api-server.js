'use strict'
const http = require('http')
const host = Number(process.argv[2])

const server = http.createServer(function (req, res) {
    if (req.method !== 'GET') {
    return res.end('send me a GET\n')
    }
    res.writeHead(200, { 'Content-Type': 'application/json' })

    const url = new URL(req.url, `http://localhost:${host}`);
    const iosString = url.searchParams.get('iso')
    const date = new Date(iosString)
    let jsomOutput = {}
    if(url.pathname === "/api/parsetime"){
        jsomOutput = {  
            "hour": date.getHours().toString(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        }
    }
    else if(url.pathname === "/api/unixtime"){
        jsomOutput = { "unixtime": date.getTime() }
    }
    res.write(JSON.stringify(jsomOutput))
    res.end()
})

server.listen(host)