const mongoose = require('mongoose');

class DB {
    
    constructor() {
        this._db = null;
        this.URL = process.env.MONGODB_URL;
        
    }
}

DB.prototype.initDB = function() {
    mongoose.connect(this.URL,{ useNewUrlParser : true })
    .then(db => {
        this._db = db;

        // console.log(`DB is connected successfully`);
        return this._db;
    })
    .catch(err => {
        throw new Error(err);
    })
}

DB.prototype.getDB = function () {
    if(this._db){
        return this._db;
    }
    else{
        return this.initDB();
    }
}

module.exports = DB