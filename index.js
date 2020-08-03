
var express = require('express');

app.use('/', express.static(__dirname + './'));

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'),function(){
    console.log('Uniper - UniManage - Front End running on port: ' + port);
});
