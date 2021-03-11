"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var indexRouter = express_1.Router();
indexRouter.get('/', function (_, res) {
    res.json({ title: 'Express' });
});
exports.default = indexRouter;
//# sourceMappingURL=index.js.map