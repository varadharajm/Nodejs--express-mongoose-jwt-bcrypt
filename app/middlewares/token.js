const jsonwt = require("jsonwebtoken");

const generateToken = (email)=>{
    // console.log(email);
    const token = jsonwt.sign({email}, process.env.JWT_key, { expiresIn:"3hours"});
    // console.log(token);
    return token;
};

const validateToken = (req, res, next) =>{

    // const cookies = await req.body.token;
    // console.log(cookies);


    try{
        //  const {jwt} = cookies;
       
        const valid = jsonwt.verify(req.query.token || req.headers["x-access-token"] || req.headers["authorization"] , process.env.JWT_key);
        if(valid){
            next();
        }else{
            res.send("Access denied");
        }
    }catch{
        res.send({ message: "Invalid Token"});
    }
}

module.exports.generateToken = generateToken;
module.exports.validateToken = validateToken;