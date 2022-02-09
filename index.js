var express =require('express');
var app = express();

app.get('/',function(req,res){
    res.send('hello world');
});

app.listen(process.env.PORT || 3000);
console.log('dev server started on port 3000');

module.express =app;