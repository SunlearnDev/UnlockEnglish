"use strict"
const _ = require('lodash')

const getInfo = ({fileds = [], data = {}}) => {
    return _.pick(data, fileds)
}

module.exports = getInfo