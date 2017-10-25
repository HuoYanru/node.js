#!/user/bin/node

var http=require('http');

var city=process.argv[2]||'石家庄';

var addr= 'http://api.jisuapi.com/weather/query?appkey=6de05d506782b8ae&city='+city;

http.get(new URL(addr),function(res){
    var result='';

    res.on('data',function(data){
	result += data.toString('utf8');
    });
    res.on('end',function(){
	var weather=JSON.parse(result);
	console.log(weather);
    })
});
