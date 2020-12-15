const express = require('express');
const path = require('path');
const app = express();

app.set("port",5001);
app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/index', (req,res)=>{
    res.sendFile(path.join(__dirname,'./public/index.html'))
    
});

app.use('/pagina', (req,res)=>{
    res.sendFile(path.join(__dirname,'./public/pagina2.html'))
});


app.listen(app.get("port"),()=>{
  console.log(`Server on port 5001`);
});
