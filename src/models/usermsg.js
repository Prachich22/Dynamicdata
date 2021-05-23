const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("invalid email id")
            }
        }
    }, phone: {
        type: Number,
        required: true,
        min: 10
    }, message: {
        type: Number,
        required: true,
        minLength: 3
    }, date: {
type:Date,
default:Date.now
    }

})
//we need a collection
//isme 2 argu hote h first m first letter capital & singular form and second structure ko define 
const User = mongoose.model("User", userSchema);
module.exports = User;
