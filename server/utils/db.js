const mongoose=require('mongoose');
require('dotenv').config()

const uri=process.env.MONGODB_URI;
const options={
    useNewUrlParser:true,
    useUnifiedTopology:true,
};
mongoose.connect(uri,options)
    .then(()=>console.log('CONNECTED TO DATABASE'))
    .catch((err)=>console.error('Failed to connect to DB',err))

const db=mongoose.connection;
module.exports=db;