const express = require("express");
const router = express.Router();

const MensRanking = require("../models/mens");

router.post("/mens", async (req, res)=>{
    try{
        const mensData = new MensRanking(req.body);
        await mensData.save();
            // res.status(201).send(mensData)
            res.status(201).json({message:"Successful"})

    }catch(error){
        // res.status(400).send(error)
        res.status(400).json({error:"Invalid"})
        console.log(error)
    };
});

router.get("/mens", async (req, res)=>{
    try{
        const getMens = await MensRanking.find({}).sort({"ranking":1});
        res.status(200).send(getMens);
    }catch(error){
        res.status(400).send(error);
    }

});


router.get("/mens/:id", async (req, res)=>{
    try{
        const getMen = await MensRanking.findById(req.params.id);
        res.status(200).send(getMen);
    }catch(error){
        res.status(400).send(error);
    }
});


router.patch("/mens/:id", async (req, res)=>{
    try{
        const getMen = await MensRanking.findByIdAndUpdate(req.params.id, req.body, {
            new:true
        });
        res.status(201).send(getMen);
    }catch(error){
        res.status(500).send(error);
        console.log(error);
    }
});


router.delete("/mens/:id", async (req, res)=>{
    try{
        const getMen = await MensRanking.findByIdAndDelete(req.params.id);
        res.status(200).send(getMen);
    }catch(error){
        res.status(500).send(error);
        console.log(error);
    }
});
module.exports = router;