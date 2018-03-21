/*var time = 0;
var timer = setInterval(function(){
  time += 2;
  console.log(time + 'seconds have passed');
  if (time>5){
    clearInterval(timer);
  }
}, 2000);
*/
//console.log(__dirname);
//console.log(__filename);

//function expressions

/*function callFunction(fun){
  fun();
}

var sayBye = function(){
  console.log('bye');
};

//sayBye();

callFunction(sayBye); */

/*var stuff= require('./stuff');

console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi, 5)); */


/*var events = require('events');
var util = require('util');

var Person = function(name){
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];


people.forEach(function(person){
  person.on('speak', function(mssg){
    console.log(person.name + ' said: ' + mssg);
  });

});


james.emit('speak', 'hey dudes');
ryu.emit('speak', 'I want a curry');
*/


//var fs = require('fs');

//var readMe = fs.readFileSync('readMe.txt', 'utf8');
//fs.writeFileSync('writeMe.txt', readMe);
//console.log(readMe);

//fs.readFile('readMe.txt', 'utf8', function(err, data){
  //fs.writeFile('writeMe.txt', data,  (error) => { /* handle error */ });
//});


//fs.unlink('writeMe.txt');

//fs.rmdirSync('stuff');

/*fs.mkdir('stuff', function(){
  fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('./stuff/writeMe.txt', data);
  });
});*/


//fs.unlink('./stuff/writeMe.txt', function(){
  //fs.rmdir('./stuff');
//});


//var http = require('http');
//var fs = require('fs');

//var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
//var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

/*myReadStream.on('data', function(chunk){
  console.log('new chunk received:');
  myWriteStream.write(chunk);
  //console.log(chunk);
});*/




/*var server = http.createServer(function(req,res){
  console.log('request was made:' + req.url);
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if(req.url === '/contact'){
    res.writeHead(200, {'Content-Type': 'text/hmtl'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else{
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  //var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  //var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
  //myReadStream.pipe(res);
  /*var myObj = {
    name: 'Ryu',
    job: 'Ninja',
    age: 29
  };
  res.end(JSON.stringify(myObj));

}); */
  //res.end('feed me popcoen');
//});*/
//server.listen(3000, '127.0.0.1');
//console.log(' working!!');


var express = require('express');
var app = express();

app.set('view engine', 'ejs');


app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
  //res.render(__dirname + '/index.html');
  res.render('index');
});


app.get('/contact', function(req, res){
//  res.render(__dirname + '/contact.html');
  console.log(req.query);
  res.render('contact');
});

app.get('/profile/:name', function(req, res){
//res.send('You request to see a profile of' +  req.params.name);
  var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
  res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
