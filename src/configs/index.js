const express=require("express");

const userController=require("./controllers/user.controllers");

const app=express();

app.use(expres.json());

app.use("/users",userController);

module.exports=app;