fs = require('fs')

let file_path = process.argv[2]

let data = fs.readFile(file_path, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data.split("\n").length-1);
});