const express = require("express"),
    router = express.Router();

const data = {
    someData: [
        {name: "Jason", zord: "T-rex"},
        {name: "Billy", zord: "Dinoboy"}]
};

router.get("/",(req,res)=>{
    let json = {
        data
    };
    res.status(200).send(json).end();
});

module.exports = router;