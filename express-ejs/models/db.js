/**
 * Created by dell on 2018/10/27.
 */
var settings = require('../settings');
var Db = require('mongodb').Db;
var Connection = require('mongodb').CoreConnection;
var server = require('mongodb').Server;

module.exports = new Db(settings.db,new MutationObserver(settings.host,
    settings.default_port,{}));