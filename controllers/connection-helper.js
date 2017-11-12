const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const STATUS_CODES = require('../common/common-status-codes');

const dbPath = Symbol();


class ConnectionHelper {

    constructor() {
        this[dbPath] = path.join(__dirname, '../db/app-db.db');
    }


    connect() {
        console.log('connecting to db...');
        return new Promise((resolve, reject) => {
            const db = new sqlite3.Database(this[dbPath], sqlite3.OPEN_READONLY, (err) => {
                if (err) {
                    reject({ status : STATUS_CODES.DB_CONNECTION_ERROR, error : err});
                } else if (db.open) {
                    resolve(db);
                } else {
                    reject({ status : STATUS_CODES.DB_CONNECTION_ERROR, error: 'Unkown error occurred while opening db' });
                }
            });
        });
    }
    close(db) {
        db.close((err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Close the database connection.');
        });
    }
}

module.exports = new ConnectionHelper();