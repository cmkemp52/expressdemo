const express = require("express"),
    router = express.Router();

router.get("/:person_name/:age?",(req,res)=>{
    console.log(req.params);
    const {person_name, age} = req.params;
    const snippet = `<h1>hi ${person_name}, you are ${age} years old!</h1>`;
    res.status(200).send(snippet).end();
});

module.exports = router;