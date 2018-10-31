let mongoose = require('mongoose');
let TodoSchema = mongoose.Schema({
    name: String
}, {
    timestamp: true    //automatically adds two new fields: createdAt and updatedAt to the schema.
});

module.exports = mongoose.model('Todo', TodoSchema);