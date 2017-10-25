#!/user/bin/node
  var PI =Math.PI;

module.exports=function(radius){
    function circumference(){
	return PI*2*radius;
    }
    
    function area(){
	return PI*radius*radius;
    }

    return{
	area:area,
	circumference:circumference
    };
}
console.log('\n02-export-function:\n',module);

