const fs = require("fs")
console.log(fs.readFileSync("./content/first.txt","utf-8"))

fs.writeFileSync("./content/result.txt",fs.readFileSync("./content/first.txt","utf-8")+fs.readFileSync("./content/second.txt","utf-8"))
