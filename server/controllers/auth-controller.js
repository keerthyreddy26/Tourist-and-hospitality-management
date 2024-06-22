const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async(req,res) =>{
    try {
        res.status(200).send("Hello using router ");
    } 
    catch (error) {
        console.log(error);
    }
};


const register = async(req,res) =>{
    try {
        console.log(req.body);
        const {name,email, phone,password} = req.body;
        


        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({msg:"email already exist"});
        }

//const saltRound =10;
//const hash_password = await bcrypt.hash(password ,saltRound);
const userCreated = await User.create({name,email,phone,password});

        res.status(201).json({msg:"registration successful", 
            token: await userCreated.genrateToken(), 
            userId:userCreated._id.toString()});
    } catch (error) {
         res.status(400).json("internal server error");
    }
};


const login = async (req ,res) => {
    try {
        const {email, password} = req.body;
        const userExist = await User.findOne({email});
        console.log(userExist);
        if (!userExist){
            return res.status(400).json({message:"Invalid Credentials."});
        }
        //const user = await bcrypt.compare(password , userExist.password);
        const user = await userExist.comparePassword(password);
        if(user){
            res.status(200).json({msg:"Login  successful", 
            token: await userExist.genrateToken(), 
            userId:userExist._id.toString()});
        }
        else{
            res.status(401).json({message:"Invalid email or password"});
        }
    } catch (error) {
        //res.status(400).json("internal server error");
        next(error);
    }
 
};

const user = async (req, res) => {
    try {
      // const userData = await User.find({});
      const userData = req.user;
      console.log(userData);
      return res.status(200).json({ msg: userData });
    } catch (error) {
      console.log(` error from user route ${error}`);
    }
  };
module.exports ={ home , register,login,user};