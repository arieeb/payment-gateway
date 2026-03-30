const express =require("express");
const Razorpay= require("razorpay");
const cors = require("cors");

const app=express();
app.use(cors());
app.use(express.json());
const razorpay=new Razorpay({
  key_id:process.env.KEY_ID,
  key_secret:process.env.KEY_SECRET
});
app.post("/create-order",async(req,res)=>{
  try{
    const order= await razorpay.orders.create({
    amount:5000,
      currency:"INR",
    });
  res.json(order);
  }
  catch(err){
    res.status(500).send("error creating order");
  }
});
app.get("/",(req,res)=>{
res.send("send running");
         });
const PORT=process.env.PORT||5000;
  app.listen(PORT,() =>console.log("server started"));
    
