const express = require("express");
const db = require("../data/dbConnection");

const router = require("../data/dbConnection");

//GET request
// router.get("/", (req, res)=>{
//     db("cars")
//     .then((cars)=>{
//         res.status(200).json({cars})
//     })
//     .catch((err)=>{
//         res.status(500).json({error: error.message})
//     })
// })