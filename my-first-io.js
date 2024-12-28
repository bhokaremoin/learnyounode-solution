fs = require('fs')

let file_path = process.argv[2]

let data = fs.readFileSync(file_path);
data = data.toString();
let lines = data.split("\n");
console.log(lines.length-1);