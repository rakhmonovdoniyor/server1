const jwt = require("jsonwebtoken");
const CrmUser = require("../models/auth.models");

const protect = async(req, res, next) => {
    let token;
    
    if ( 
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer"))   
    {
        try {
            token = req.headers.authorization.split(" ")[1];

         const decoded = jwt.verify(token,process.env.JWT_SECRET);
         req.user = await CrmUser.findById(decoded.id).select("-password");

         if (!req.user) {
            return res.status(401).json({message: "CrmUser note found"})
         }
         next();
        } catch (error) {
            res.status(401).json({message: "Not aut, token fail"})
        }
    }

    if(!token){
        res.status(401).json({message: "No auth, NO TOKEN"});
    }
};


module.exports = {protect};