"use strict";

const mongoose = require('mongoose');
const { db: { host, port, name } } = require('../configs/configs.mongodb'); 
const connectDB = `mongodb://${host}:${port}/${name}`;

class Database{

    constructor(){
        this.conncert();
    }

    conncert(){
        if(1===1){
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true });
        }
        mongoose
            .connect(connectDB)
            .then(() => {
                console.log('Database connection successful');
            })
            .catch(err => {
                console.error('Database connection error', err);
            });
    }
    
    static getInstance(){
        if(!this.instance){
            this.instance = new Database();
        }
        return this.instance;
    }

}

const instance = Database.getInstance();
module.exports = instance;