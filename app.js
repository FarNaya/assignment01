
//express code, supports the app.
const express = require('express');
const path = require('path');
const  ejs = require('ejs');
const pageInfo = require('./pageInfo');
const moment = require('moment');


const app = express();
app.locals.moment = require('moment');


app.set('views', path.join(__dirname, 'views'));
//to execute the app.ejs 'join' conects two directories in any OS. '__dirname' put me in the project route.

app.set('view engine', 'ejs');
//templates engine
  
app.get('/',function(req, res) {  
 res.render('index',pageInfo.index);
  });
  
app.get('/oliphaunt',function(req, res) {  
 res.render('oliphaunt',pageInfo.oliphaunt);
  });
  
app.get('/theBathSong',function(req, res) {  
 res.render('theBathSong',pageInfo.theBathSong);
  });
  
 app.get('/theStoneTroll',function(req, res) {  
    res.render('theStoneTroll',pageInfo.theStoneTroll);
  });
  
app.set('port', process.env.PORT || 3000); 
//to indicate what port is going to listen, and there's none configured, it'll be runned on port 3000
//here the variable is stablished.

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.status(404);
    res.send('404: File Not Found');
  });


app.listen(app.get('port'), () => {
// usually it's placed on port 3000, and then write a function that listens on a port;
//here the variable is used, instead of executing on port 3000,  to get te port.

    console.log(`server on port ${app.get('port')}`) 
} );
