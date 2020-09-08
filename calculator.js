const express =  require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var op = req.body.op;
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    console.log(req.body);
    var result = 0;    
    if(op=="+")  result = num1 + num2;
    if(op=="-")  result = num1 - num2;
    if(op=="*")  result = num1 * num2;
    if(op=="/"){
        if(num2==0) res.send("Invalid: Division by zero\n");
        else result = num1 / num2;
    }  
    res.send("The result of the calculation is " + result);
});

app.listen(3000, function(){
    console.log("Server started at port 3000");
});