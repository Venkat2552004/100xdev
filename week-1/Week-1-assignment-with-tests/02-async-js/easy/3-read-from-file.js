
const fs = require('fs');

const path = __dirname + '/1-counter.md'

fs.readFile(path, "utf8", (err, data) => {
    if(err)
        console.log(err);
    else
        console.log(data);
})

