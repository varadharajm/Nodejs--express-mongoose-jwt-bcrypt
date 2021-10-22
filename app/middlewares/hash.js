const bcrypt = require("bcrypt");
const saltrounds = 5;

const hashGenerate = async(plainpassword) =>{
    const salt = await bcrypt.genSalt(saltrounds);
    const hash = await bcrypt.hash(plainpassword, salt);
    return hash;
};

const hashvalidate = async(plainpassword, hashpassword) =>{
    return await bcrypt.compare(plainpassword,hashpassword);
};

module.exports.hashGenerate = hashGenerate;
module.exports.hashvalidate = hashvalidate;