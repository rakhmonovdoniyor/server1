const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
 




const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        // required: true,
        unique: true,
    },
    password: {
        type: Number,
        // required: true,
    },
    surname: {
        type: String,
        // required: true,
    },
    country: {
        type: String,
        // required: true,
    },
    number: {
        type: Number,
        // required: true,
    }
    
});

// UserSchema.pre("save",async function(next) {
//     if(!this.isModified("password")) return next();
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password,salt);
// });


UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}


const CrmUser = mongoose.model("CrmUser", UserSchema);

module.exports = CrmUser;