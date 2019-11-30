const userController = require('../controllers/userController');


module.exports = (app) => {
    app.get('/',(req,res) => {
        res.send("Welcome bro");
    });
    app.get('/users',userController.getAllUsers);

    app.post('/user',userController.insertUser);
}