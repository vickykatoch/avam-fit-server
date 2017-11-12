const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const  sqliteJSON  =  require('sqlite-json');
const cnHelper = require('./connection-helper');
const STATUS_CODES = require('../common/common-status-codes');
const _ = require('lodash');


router.get('/:user', (req, res) => {
    const userId = req.params.user;
    cnHelper.connect().then(db => {
        const exporter = new sqliteJSON(db);
        const sql = `select * from users where userid='${userId}' and isActive = 1`;
        exporter.json(sql, (err, json) => {
            if (err) {
                cnHelper.close(db);
                res.json({ status: STATUS_CODES.DB_DATA_FETCH_ERROR, error: err });
            }
            const result = JSON.parse(json);
            if(result && result.length>0) {
                const scalar = result[0];
                fetchRoles(userId,exporter).then(jsonData=> {
                    cnHelper.close(db);
                    if(jsonData.length > 0) {
                        res.json({
                            userId,
                            name : scalar.name,
                            data : resolveRoles(jsonData)
                        });
                    } else {
                        res.json({
                            userId,
                            name : scalar.name,
                            roles :{}
                        });
                    }
                }).catch(err=> {
                    cnHelper.close(db);
                    res.json({ status : STATUS_CODES.DB_DATA_FETCH_ERROR, error : err});
                });
            } else {
                res.json({ status : STATUS_CODES.DB_RECORD_NOT_FOUND, error : 'Record not found' })
            }
        });
    }).catch(err => res.json(err));
});

function fetchRoles(userId, dbConverter) {
    return new Promise((resolve,reject) => {
        const sql = `select R.code as roleCode, R.isAdmin, R.description as role,R.priority, RR.permissions, RS.*
                        from ROLES R, USER_ROLES UR, ROLE_RESOURCES RR, RESOURCES RS
                        where R.code = UR.role AND UR.role = RR.role AND RR.resource = RS.name
                        and UR.user = '${userId}' AND R.isActive = 1 
                        order by R.priority`;
        dbConverter.json(sql, (err,  json)=> {
            if (err) {
                cnHelper.close(db);
                reject(err);
            } else {
                resolve(JSON.parse(json));
            }
        });
    });
}
function resolveRoles(rolesData) {
    const groupedData = _.groupBy(rolesData,'roleCode');
    const roles = Object.keys(groupedData);
    const roleDetails = {};
    const resources = {};
    roles.forEach(role=> {
        groupedData[role].forEach(resource=> {
            roleDetails[`${role}`] = { code : role, name : resource.role, isAdmin : resource.isAdmin === 0 ? false : true };
            delete resource['roleCode'];
            delete resource['role'];
            resources[resource.name] = resource;
        });
    });
    return {
        roles : Object.values(roleDetails),
        resources : Object.values(resources)
    };
    
}

module.exports = router;