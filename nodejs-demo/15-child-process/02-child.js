#!/usr/bin/node

var cp=require('child_process');

console.log('i am child process.PID:',process.pid);

var timer=global.setInterval(function(){
    console.log('time:',Date.now());
},2000);

global.setTimeout(function(){
    global.clearInterval(timer);
    console.log('OK! 16 seconds.Game Over!');
},16000);
