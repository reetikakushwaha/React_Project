import bycrypt from 'bcryptjs';

export const addAdmin = async(req, res, next) =>{
    const {email, password} = req.body;

    let existingAdmin;
    try{
        existingAdmin = await admin.findOne({email});
    }catch(err){
        return console.log(err);
    }
    if(existingAdmin){
        return res.status(400).json({message:"Admin already exists"});
    }
    let admin;
    const hashedPassword = bycrypt.hashSync(password);
    try{
        admin = new admin({email, password: hashedPassword});
        admin = await admin.save();
    }catch(err){
        return console.log(err)
    }
    if(!admin){
        return res.status(500).json({message:"Unable to store admin"});
    }
    return res.status(201).json({admin});
};