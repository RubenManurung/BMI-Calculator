const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended : true}));


//Normal Calculator
app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
  let operator = req.body.operator;
  let n1 = Number(req.body.angka1);
  let n2 = Number(req.body.angka2);
  let result = 0;
  console.log(req.body);

  if(operator == "+"){
    result = n1+n2;
  }else if(operator == "-"){
    result = n1-n2;
  }else if(operator == "*"){
    result = n1*n2;
  }else if(operator == "/"){
    result = n1/n2;
  }else{
    res.send("wrong");
  }

  res.send("The result is "+result);
});


app.post("/bmiCalculator", function(req, res){
  let w = parseFloat(req.body.weight);
  let h = parseFloat(req.body.height);

  let bmi = w / Math.pow(h, 2);

  res.send("Your BMI is "+bmi);
});


app.listen(3000, function(){
  console.log("This running at port 3000");
});
