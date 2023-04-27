const express = require('express');
const router = express.Router();
const uuid = require('uuid');
let users = require('../../Users');

router.get('/',  (rec, res) => {
    res.json(users);
});

router.get('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));

    if(found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)));
    }else{
        res.semdStatus(400);
    }
});

module.exports = router;