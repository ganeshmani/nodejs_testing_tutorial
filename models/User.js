const Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});

class User {

    static getAllUsers() {
        return this.find({}).exec();
    }

    static getUserById(id) {
        return this.findOne({
            _id : id
        }).exec();
    }

    static getUserByEmail(email) {
        return this.findOne({
            email : email
        }).exec();
    }

    static insertUser(userInfo) {

        
        const user = this(userInfo);

        return user.save();
    }

    static updateUser(id,field){

        return this.findOneAndUpdate({
            _id : id
        },{
            $set : {
                field
            }
        }).exec();
    }


}

userSchema.loadClass(User);


module.exports = Mongoose.model('User',userSchema);