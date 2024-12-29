'use strict'
const http = require('http')
const { BufferListStream } = require('bl')

http.get(process.argv[2], function (res) {
    res.pipe(BufferListStream((err, data) => {
        if (err) {
            return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})