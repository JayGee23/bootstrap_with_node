const express = require('express');
const Registrant = require('../models/registrant');

const registrantRouter = express.Router();

registrantRouter.route('/')
    .get((req, res, next) => {
        Registrant.find()
            .then(registrants => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'applicatoin/json');
                res.json(registrants)
            })
            .catch(err => next(err));
    })
    .post((req, res, next) => {
        Registrant.create(req.body)
            .then(registrant => {
                console.log('Registrant Created', registrant);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(registrant);
            })
            .catch(err => next(err));
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('Put operation not support on /registrants');
    })
    .delete((req, res, next) => {
        Registrant.deleteMany()
            .then(response => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'applicatoin/json');
                res.json(response)
            })
            .catch(err => next(err));
    });


//export
module.exports = registrantRouter;