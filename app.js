const express = require('express');
const app = express();
var movieControllerModule = require('./movieCtrl');
var movieController = new movieControllerModule();
var port = 8080;

app.listen(port,()=>{
    console.log("Server listening on port "+port+'...');
});

app.get('/movies',(req,res)=>{
});
app.get('/movies/:id',(req,res)=>{
    movieController.getMovieById(req.params.id)
    .then(movie=>{
        res.writeHead(200);
        res.write(JSON.stringify(movie));
        res.end();
    })
    .catch(error=>{
        res.writeHead(404);
        res.write(error);
        res.end();
    });
});
app.get('/movies/:id/:prop',(req,res)=>{
    movieController.getMovieProp(req.params.id,req.params.prop)
    .then(props=>{
        res.writeHead(200);
        res.write(JSON.stringify(props));
        res.end();
    })
    .catch(error=>{
        res.writeHead(404);
        res.write(error);
        res.end();
    });
});
// app.get('/movies/:id/quotes',(req,res)=>{
//     movieController.getMovieProp(req.params.id,'quotes')
//     .then(quotes=>{
//         res.writeHead(200);
//         res.write(JSON.stringify(quotes));
//         res.end();
//     })
//     .catch(error=>{
//         res.writeHead(404);
//         res.write(error);
//         res.end();
//     });
// });
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