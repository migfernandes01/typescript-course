"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
// factory decorator function to add a middleware metadata
function use(middleware) {
    return function (target, key, desc) {
        // extract middlewares metadata or start an empty array
        var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target, key) || [];
        // push new middleware to middlewares array
        middlewares.push(middleware);
        // define new middleware metadata with middlewares array
        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.middleware, middlewares, target, key);
    };
}
exports.use = use;
