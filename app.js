const express = require('express');
const app = express();
var port = 8080;

app.listen(port,()=>{
    console.log("Server listening on port "+port+'...');
});

app.get('/movies',(req,res)=>{
    
});
app.get('/movies/:id',(req,res)=>{
    
});
app.get('/movies/:id/actors',(req,res)=>{
    
});
app.get('/movies/:id/quotes',(req,res)=>{
    
});
app.get('/actors/:id',(req,res)=>{
    
});
app.get('/quotes/:id',(req,res)=>{
    
});
app.post('/quotes/:id',(req,res)=>{
    
});
app.put('/quotes/:id',(req,res)=>{
    
});
app.delete('/quotes/:id',(req,res)=>{
    
});