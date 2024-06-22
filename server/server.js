require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute  =require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const db=require('./utils/db');
const errorMiddleware = require("./middlewares/error-middleware");

const corsOptions ={
  origin:"http://localhost:3000",
  methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials:true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form",contactRoute);
app.use(errorMiddleware);


db.once('open', () => {
  console.log('Database connection is open.');
  });

  db.on('error', (err) => { 
    console.error('Connection error:', err); 
  }); 

  
PORT=5000;
app.listen(PORT, () => {
    console.log(`Web server is running at ${PORT}`);
  });