const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BuildingSchema = Schema({
  title: {
    type: String,
    required: [true]
  },
  description: {
    type: String,
    required: [true]
  },
  room: [{
    type: Schema.Types.ObjectId,
    ref: 'room'
  }]
})

module.exports = mongoose.model('building', BuildingSchema);
