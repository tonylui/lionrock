var express = require('express');

var app = express();

app.get('/:fileName', function(req, res){
  res.sendfile(req.params.fileName);
});

var port = process.env.PORT || 8080;
app.listen(port, function(){console.log('listening on ' + port)});
