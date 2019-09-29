var express=require('express')
var app=express();
var bodyparser=require('body-parser')

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())



app.post("/user_search",function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(req.body.id)
    res.end()
})

app.post("/admin_search",function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(req.body.adminid)
    res.end()
})

app.post("/teach_search",function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(req.body.Facultyid)
    res.end()
})

app.post("/stud_search",function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(req.body.Rollno)
    res.end()
})

app.listen(8051,function(){
    console.log("Started on 8081")
})