const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const app = express();

app.listen(3333, function(){
    console.log("listening on port 3333");
});

app.use(compression());
app.use(helmet());
const rootController = require("./routes/index")

const data = {
    someData: [
        {name: "Jason", zord: "T-rex"},
        {name: "Billy", zord: "Dinoboy"}]
};


app.get("/",rootController);
app.get("/all", function (req,res){
    let json={
        data
    }
    res.status(200).send(json).end();
});

app.get("/wp", function(req,res){
    const {name} = req.query;
    let snippet = `Hello ${name}`;
    if (!name){
        snippet = `No name provided!`;
        res.status(500).send(snippet).end();
    }
    res.status(200).send(snippet);
});