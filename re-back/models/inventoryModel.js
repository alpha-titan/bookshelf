const mongoose = require("mongoose")

const inventorySchema = new mongoose.Schema({
    title: String,
    bookcount: Number
})

module.exports = Inventory = mongoose.model('inventory', inventorySchema)