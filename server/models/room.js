const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = Schema({
  title: String,
  schdules: {
    type: Array
  }
})

module.exports = mongoose.model('room', RoomSchema);
