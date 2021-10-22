const userModule =require("../models/user.model");
const {hashGenerate, hashvalidate} = require("../middlewares/hash");
const {generateToken} = require("../middlewares/token");


const sigup = async(req ,res) =>{
        const hashpassword = await hashGenerate(req.body.password);
        const user = new userModule({
                name:req.body.name,
                email:req.body.email,
                password:hashpassword
            });
        const saveUser = await user.save();
        res.send(saveUser);
};

const singin = async(req, res) =>{
    try{
        const existinguser = await userModule.findOne({email: req.body.email});

        if(!existinguser){
            res.send("Invaild Email");
        }else{
            const checkuser = await hashvalidate(req.body.password, existinguser.password);
            if(!checkuser){
                res.send("Invalid Password");
            }else{
                // console.log(existinguser);
                const token = await generateToken(existinguser.email);
                // res.cookie("jwt",token);
                res.send({message : "Login Successfully",token});
            }
        }
    }catch (error){
        res.send(error);
    };
};

const user = async(req, res) =>{
    const user_data =await userModule.findOne({email: req.body.email});
    res.send(user_data);
};

const logoff = async(req, res) =>{
    res.clearCookie("jwt");
    res.send({ message : " Logoff success fully"});
};

const error = (req, res) => {
    res.json({ message : " 404 Page Not Found"});
}
 module.exports = {error, sigup, singin, user, logoff};