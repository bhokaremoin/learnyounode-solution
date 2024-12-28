'use strict'
const fs = require('fs')
const path = require('path')

module.exports = (dir_path, file_extension, callback) => {
    let extension = "."+file_extension
    fs.readdir(dir_path, function (err, files) {
        if (err){
            callback(err)
            return
        }
        let ans = files.filter((file) => path.extname(file) === extension)
        callback(null, ans)
    })
}