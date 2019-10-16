const express = require("express"),
    router = express.Router();

router.get("/",(req,res)=>{
    const {name} = req.query;
    let snippet = `Hello ${name}`;
    if (!name){
        snippet = `No name provided!`;
        res.status(500).send(snippet).end();
    }
    res.status(200).send(snippet).end();
});

module.exports = router;