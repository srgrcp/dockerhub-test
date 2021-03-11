"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var routes_1 = require("./routes");
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', routes_1.default);
module.exports = app;
//# sourceMappingURL=app.js.map