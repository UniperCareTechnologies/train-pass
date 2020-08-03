
var express = require('express');
var app = express();
var port = 3000;
app.use('/', express.static(__dirname + './'));

app.set('port', (process.env.PORT || port));
app.listen(app.get('port'),function(){
    console.log('server running on port: ' + port);
});
