const express = require('express');
const app = express();
const port = 8000;

app.get('/',(req,res) =>{
    res.send("Home page");
});
app.listen(port , () => {
    console.log("Server running on the  port "+ port);
});