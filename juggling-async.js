'use strict'

const http = require('http')
const { BufferListStream } = require('bl')

let ans = ["", "", ""]
let cnt = 0

function getData(url, index) {
    http.get(url, function (res) {
        res.pipe(BufferListStream((err, data) => {
            if (err) {
                return console.error(err)
            }
            ans[index] = data.toString();
            cnt++;
            if (cnt == 3){
                ans.forEach(ele => console.log(ele))
            }
        }))
    })
}

getData(process.argv[2], 0)
getData(process.argv[3], 1)
getData(process.argv[4], 2)