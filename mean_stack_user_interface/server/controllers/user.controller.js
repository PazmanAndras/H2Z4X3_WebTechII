const express = require('express');
const httpStatusCode  = require('http-status-codes');
const router = express.Router();


const user = require('../models/user.model');


router.get('/', (req, res) => {
    user.find().then(docs=>{
        res.send(docs);
    }).catch(err=>{
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(err);
    })
});

//CERATE 
router.post('/', (req, res) => {
    const obj = req.body;
    user.create(obj).then(doc=>{
        res.status(httpStatusCode.CREATED).send(obj);
    }).catch(err=>{
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(err);
    })
});;

// SELECT 
router.get('/:id', (req, res) => {
    let id = req.params.id;
    user.findById(id).then(docs=>{
        res.send(docs);
    }).catch(err=>{
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(err);
    })
});;

//UPDATE
router.put('/:id', (req, res) => {
    let id = req.params.id;
    const obj = req.body;
    user.findByIdAndUpdate(id, { name:obj.name, contact:obj.contact, address:obj.address}),(err, doc=>{
        if(err)
             res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(err);
        else
            res.send(doc);
    });
});;

//DELETE
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    user.findByIdAndDelete(id).then(docs => { 
        res.send(httpStatusCode.OK).send(docs);      
    }).catch(err => {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(err);
    })
});;

module.exports = router;