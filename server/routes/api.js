const express = require('express');
const router = express.Router();
const Building = require('../models/building');
const Room = require('../models/room');

router.get('/show', (req, res) => {
    Building.find({}).populate({ path: 'room' }).exec((err, building) => {
        res.json(building);
    })
})

router.get('/show/:id', (req, res) => {
    Building.findById({_id: req.params.id}).then((building) => {
        res.send(building);
    })
})

router.post('/add', (req, res) => {
    Building.create(req.body).then((building) => {
        res.send(building);
    })
})

router.post('/room', (req, res) => {
    Room.create(req.body).then((room) => {
        res.send(room);
    })
})

module.exports = router;