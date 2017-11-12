const express = require('express');
const router = express.Router();
// const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const  sqliteJSON  =  require('sqlite-json');
const cnHelper = require('./connection-helper');
const STATUS_CODES = require('../common/common-status-codes');
const _ = require('lodash');

router.get('/:user/:scope',(req,res)=> {
    const userId = req.params.user;
    const scope = req.params.scope;
    cnHelper.connect().then(db => {
        const exporter = new sqliteJSON(db);
        const sql = `select workspace from user_workspaces where user='${userId}' and scope='${scope}'`;
        db.get(sql, [], (error, row)=> {
            if(error) {
                res.json({ status : STATUS_CODES.DB_DATA_FETCH_ERROR, error: error});
            }
            res.json({
                status : STATUS_CODES.OK,
                data : row ? JSON.parse(row) : {}
            });
        });
    }).catch(err => res.json(err));
});

// router.post('')


module.exports = router;