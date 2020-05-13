const express = require("express");
const db = require("../data/dbConnection");

const router = express.Router();

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


//GET request- get by id

router.get("/:id", (req, res)=>{
    const { id } = req.params;
    db("cars")
    .where({ id })
    .first()
    .then((car)=>{
        res.status(200).json(car)
    })
    .catch((error)=>{
        res.status(500).json({error: error.message})
    })
})

//PUT request- update by id

router.put("/:id", (req, res)=>{
    const { id } = req.params; 
    db("cars")
    .where({id})
    .update(req.body)
    .then((car)=>{
        res.status(200).json(car)
    })
    .catch((err)=>{
        res.status(500).json({error: error.message})
    })
})


//DELETE request- delete by id
router.delete("/:id", (req, res)=>{
    const { id }= req.params;
    db("cars")
    .where({ id })
    .del()
    .then((car)=>{
        res.status(200).json(car);
    })
    .catch((error)=>{
        res.status(500).json({error: error.message})
    })
})

module.exports = router; 