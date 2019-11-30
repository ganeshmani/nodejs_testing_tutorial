const UserModel = require('../models/User');
const Joi = require('joi');
module.exports = {

   getAllUsers : async (req,res) => {
        
    try {

        const user = await UserModel.getAllUsers();

        res.status(200).json({
            data : user,
            error : null
        })

    }
    catch(e){
        res.status(500).json({
            data : null,
            error : e
        })
    }
    
   },
   insertUser : async(req,res) => {
       try {
        
        const userData = Joi.object().keys({
            name : Joi.string().required(),
            email : Joi.string().email().required(),
            password : Joi.string().required()
        })
        
        const result = Joi.validate(req.body,userData);
        
        const { value,error } = result;
        
        if(error) {

            res.status(422).json({
                data : null,
                error : 'Invalid Request'    
            })
        }
        else{

            const name = req.body.name;
            const email = req.body.email;
            const password = req.body.password;

            const user = await UserModel.insertUser({ name,email,password });

            res.status(200).json({
                data : user,
                error : null
            })
        }
            
           
       }
       catch(e){
           console.log("e",e);
           res.status(500).json({
               data : null,
               error : e
           })
       }
   }
}