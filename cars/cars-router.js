const express = require("express");
const db = require("../data/dbConnection");

const router = require("../data/dbConnection");

//Post request

router.post("/", (req, res)=>{
    db("cars")
    .insert(req.body, "id")
    .then((cars)=>{
        res.statust(200).json(cars)
    })
    .catch((error)=>{
        res.status(500).json({error: error.message})
    })
})



//GET request
router.get("/", (req, res)=>{
    db("cars") //name of the table
    .then((cars)=>{
        res.status(200).json(cars)
    })
    .catch((err)=>{
        res.status(500).json({error: error.message})
    })
})