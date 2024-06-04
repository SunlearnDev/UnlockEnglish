"use strict"

const {model, Schema, Types} = require('mongoose');

const DOCUMENT_NAME = 'User';
const COLLECTION_NAME = 'users';

var UserSchema = new Schema({
    _id: {
        type: Types.ObjectId,
        auto: true
    },
    fullname: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    phone:{
        type:Number,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: false
    },
    status:{
        type: String,
        enum:['active', 'inacative'],
        default: 'inacative',
    },
    address:{
        type:String,
    },
    verfify: {
        type: Schema.Types.Boolean,
        default: false,
    }
}, {
    collection : COLLECTION_NAME,
    timestamps: true
});

module.exports = model(DOCUMENT_NAME, UserSchema);