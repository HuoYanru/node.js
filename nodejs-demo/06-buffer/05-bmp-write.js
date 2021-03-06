#!/user/bin/node

var fs=require('fs');

var width=16;
var height=16;

var pixelByteSize=width*height*4;
var totalSize=pixelByteSize+54;

var buf=new Buffer(totalSize);

buf.fill(0);
//head
buf.write('BM');
buf.writeUInt32LE(totalSize,0x02);
buf.writeUInt32LE(54,0x0a);
buf.writeUInt32LE(40,0x0e);
buf.writeUInt32LE(32,0x1c);
buf.writeUInt32LE(pixelByteSize,0x22)
buf.writeInt32LE(width,0x12);
buf.writeInt32LE(height,0x16);
//data
for(var i=54;i<totalSize;i+=4){
    buf.writeUInt32LE(0xff0000,i);
}
fs.writeFile('./out.bmp',buf,function(err){
    if(err !=null){
        console.error(err);
	console.exit(1);
    }
});
