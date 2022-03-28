const express=require("express");

const User=require("../models/user.models");

const todo=require("../models/user.models");

const router=express.Router();

router.post("/register",async(req,res)=>{

    try{
        const user=await User.create(req.body);

        return res.status(200).send(user);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
});

router.post("/login",async(req,res)=>{

    try{
        const login=await User.create(req.body);

        return res.status(200).send(login);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
});

router.post("/todos",async(req,res)=>{

    try{
        const todo=await User.create(req.body);

        return res.status(200).send(todo);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

router.get("/todos",async(req,res)=>{

    try{
        const todos=await User.findById(req.params.id).lean().exex();

        return res.status(200).send(user);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

router.get("/todos:id",async(req,res)=>{

    try{
        const todos=await User.find(req.params.id).lean().exex();

        return res.status(200).send(todo);
    }
    catch(err){
        return res.status(401).send(err.message);
    }
});

router.patch("/todos:id",async(req,res)=>{

    try{
        const todos=await User.findByIdAndUpdate(req.param.id,req.body).lean().exex();

        return res.status(200).send(todo);
    }
    catch(err){
        return res.status(401).send(err.message);
    }
});

router.delete("/todos:id",async(req,res)=>{

    try{
        const todos=await User.findByIdAndDelete(req.param.id).lean().exex();

        return res.status(200).send(todo);
    }
    catch(err){
        return res.status(401).send(err.message);
    }
})