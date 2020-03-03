const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions( {new: true, runValidators: true} ) //If new is not set as true, the MongoDB will return the old information
//If the runValidators is not set as true, when updating an information the constraints will not be validated.

module.exports = Todo