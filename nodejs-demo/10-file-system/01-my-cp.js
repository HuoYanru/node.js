#!/user/bin/node

var fs=require('fs');
var src=process.argv[2];
var dst=process.argv[2];

fs.createReadStream(src).pipe(fs.createWriteStream(dst));
