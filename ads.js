var o=0,i=setInterval(function(){Logger.log((++o)+' '+Math.random());},5000);
setTimeout(function(){clearInterval(i);Logger.log('TO');},60000);