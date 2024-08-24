const jwt = require("jsonwebtoken")
const CrmUser = require("../models/auth.models");


const generateToken = (id) =>{
    return jwt.sign({id}, "SSHHHH", {
        expiresIn: "30d"
    })
}

const registerUser = async(req, res) => {
    const {name,email,password,surname,country,number} =req.body;
    console.log("error 1")
    try {
        const userExist = await CrmUser.findOne({email});
        console.log("error 2")
        if(userExist){
            // console.log("error 3");
            return res.status(400).json({message: "CrmUser already exist"})
            // console.log("error 4");
        }

        const user = CrmUser.create({
            name ,
            surname,
            email,
            password,
            number,
            country,

        });

        res.status(201).json({
            _id: user._id,
            name: user.name,
            surname: user.surname,
            email: user.email,
            country: user.country,
            number: user.number,
            
            // token: generateToken(user._id)
        });
        
    } catch (error) {
        console.log("error3",error);
        res.status(400).json({message: "error register", error})
    }
};


const Login = async (req, res) =>{
    const {email,password} = req.body;
    console.log("Working");
     try {
        const user = await CrmUser.findOne({email});
        console.log("Working 2");
        if (user && (await user.matchPassword(password))){
            console.log("Working 3");
            res.status(200).json({
                _id: user._id,        
                email: user.email, 
                password: user.password,            

            });
            console.log("Working 4");
        }  
        else{
            res.status(404).json({message: "email or password invalid!"})
        }
    } catch (error) {
        res.status(400).json({message: "error login", error})
    }
}
 
module.exports = {registerUser, Login}